//ipconfig getifaddr en0
fetch('works.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('works-container');
    const filterBar = document.getElementById('filter-bar');
    const windowLayer = document.getElementById('window-layer');
    const minimizedContainer = document.getElementById('minimized-container');
    const aboutBlock = document.getElementById('about-block');

    const workElements = new Map();
    const workPositions = new Map();
    const activeTags = new Set();
    const windowState = new Map();

    let highestZ = 1000;

//----
function isMobileLayout() {
  return window.innerWidth <= 768;
}
//----




    function bringToFront(win) {
      highestZ += 1;
      win.style.zIndex = highestZ;
    }

    function centerPosition(width, height) {
      return {
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2
      };
    }

    function getWindowSize(expanded) {
      if (expanded) {
        return {
          width: Math.min(75 * 16, window.innerWidth - 64),
          height: window.innerHeight * 0.85
        };
      }

      return {
        width: Math.min(50 * 16, window.innerWidth - 64),
        height: 36 * 16
      };
    }

    function createMinimizedItem(work) {
      const existingItem = document.querySelector(
        `.minimized-item[data-id="${work.id}"]`
      );
      if (existingItem) return;

      const item = document.createElement('div');
      item.className = 'minimized-item';
      item.dataset.id = work.id;
      item.textContent = work.title;

      item.addEventListener('click', () => {
        openWorkWindow(work, true);
        item.remove();
      });

      minimizedContainer.appendChild(item);
    }

    function removeMinimizedItem(workId) {
      const item = document.querySelector(`.minimized-item[data-id="${workId}"]`);
      if (item) item.remove();
    }

function buildWindow(work) {
  const win = document.createElement('div');
  win.className = 'work-window';
  win.dataset.id = work.id;

const imageList = Array.isArray(work.image) ? work.image : work.image ? [work.image] : [];

  win.innerHTML = `
    <div class="window-topbar">
      <div class="topbar-left">
        <button class="icon-btn close-btn">
          <img src="assets/icons/close.png" alt="Close">
        </button>
        <button class="icon-btn minimize-btn">
          <img src="assets/icons/minimize.png" alt="Minimize">
        </button>
        <button class="icon-btn expand-btn">
          <img src="assets/icons/expand.png" alt="Expand">
        </button>
      </div>
      <div class="window-title">${work.title}</div>
    </div>
    <div class="window-content">
      <div class="window-images">
        ${imageList
          .map(image => `<img class="window-image" src="${image}" alt="${work.title}">`)
          .join('')}
      </div>
      <p class="window-details">${work.year} | ${work.details}</p>
      <div class="window-description">${work.description}</div>
      <div class="window-links">
        ${(work.links || [])
          .map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
          .join('')}
      </div>
    </div>
  `;

  const topbar = win.querySelector('.window-topbar');
  const closeBtn = win.querySelector('.close-btn');
  const minimizeBtn = win.querySelector('.minimize-btn');
  const expandBtn = win.querySelector('.expand-btn');

  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  win.addEventListener('mousedown', () => {
    bringToFront(win);
  });

  topbar.addEventListener('mousedown', e => {
    if (e.target.closest('.icon-btn')) return;

    bringToFront(win);

    const rect = win.getBoundingClientRect();
    isDragging = true;
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;

    let left = e.clientX - dragOffsetX;
    let top = e.clientY - dragOffsetY;

    if (top < 0) top = 0;

    win.style.left = `${left}px`;
    win.style.top = `${top}px`;

    const state = windowState.get(work.id);
    if (state) {
      state.left = left;
      state.top = top;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  closeBtn.addEventListener('click', () => {
    win.remove();
    removeMinimizedItem(work.id);
    windowState.delete(work.id);
  });

  minimizeBtn.addEventListener('click', () => {
    win.style.display = 'none';

    const state = windowState.get(work.id);
    if (state) {
      state.minimized = true;
    }

    createMinimizedItem(work);
  });

  expandBtn.addEventListener('click', () => {
    const state = windowState.get(work.id);
    if (!state) return;

    state.expanded = !state.expanded;
    win.classList.toggle('expanded', state.expanded);

    const rect = win.getBoundingClientRect();
    if (rect.top < 0) {
      win.style.top = '0px';
      state.top = 0;
    }
  });

  return win;
}

    function openWorkWindow(work, restoreFromMinimize = false) {
      let state = windowState.get(work.id);
      let win = document.querySelector(`.work-window[data-id="${work.id}"]`);

      if (win) {
        win.style.display = 'flex';

        if (restoreFromMinimize && state) {
          state.minimized = false;
        }

        bringToFront(win);
        removeMinimizedItem(work.id);
        return;
      }

      win = buildWindow(work);
      windowLayer.appendChild(win);

      state = state || {
        expanded: false,
        minimized: false,
        left: null,
        top: null
      };

      const size = getWindowSize(state.expanded);

      if (restoreFromMinimize && state.left !== null && state.top !== null) {
        win.style.left = `${state.left}px`;
        win.style.top = `${Math.max(0, state.top)}px`;
      } else {
        const centered = centerPosition(size.width, size.height);
        win.style.left = `${centered.left}px`;
        win.style.top = `${Math.max(0, centered.top)}px`;

        state.left = centered.left;
        state.top = Math.max(0, centered.top);
      }

      if (state.expanded) {
        win.classList.add('expanded');
      }

      state.minimized = false;
      windowState.set(work.id, state);

      bringToFront(win);
      removeMinimizedItem(work.id);
    }

function boxesOverlap(a, b) {
  const gap = 20;

  return !(
    a.right + gap < b.left ||
    a.left - gap > b.right ||
    a.bottom + gap < b.top ||
    a.top - gap > b.bottom
  );
}

function getSafeBounds(div) {
  const filterRect = filterBar.getBoundingClientRect();
  const aboutRect = aboutBlock.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const boxWidth = div.offsetWidth;
  const boxHeight = div.offsetHeight;

  const margin = 24;
  const leftColumnRight = Math.max(filterRect.right, aboutRect.right);
  const leftBound = Math.max(margin, leftColumnRight + 24);
  const topBound = margin;
  const rightBound = containerRect.width - boxWidth - margin;
  const bottomBound = containerRect.height - boxHeight - margin;

  return {
    leftBound,
    topBound,
    rightBound: Math.max(leftBound, rightBound),
    bottomBound: Math.max(topBound, bottomBound)
  };
}

function assignRandomPositionsOnce(worksToPlace) {
    if (isMobileLayout()) return;

  const placedRects = [];

  worksToPlace.forEach(work => {
    const div = workElements.get(work.id);
    if (!div) return;

    const boxWidth = div.offsetWidth;
    const boxHeight = div.offsetHeight;
    const bounds = getSafeBounds(div);

    let placed = false;
    let tries = 0;

    while (!placed && tries < 500) {
      const left =
        bounds.leftBound +
        Math.random() * Math.max(1, bounds.rightBound - bounds.leftBound);

      const top =
        bounds.topBound +
        Math.random() * Math.max(1, bounds.bottomBound - bounds.topBound);

      const newRect = {
        left,
        top,
        right: left + boxWidth,
        bottom: top + boxHeight
      };

      const overlaps = placedRects.some(rect => boxesOverlap(newRect, rect));

      if (!overlaps) {
        workPositions.set(work.id, { left, top });
        placedRects.push(newRect);
        placed = true;
      }

      tries++;
    }

    if (!placed) {
      const fallbackLeft = bounds.leftBound + placedRects.length * 20;
      const fallbackTop = bounds.topBound + placedRects.length * 20;

      workPositions.set(work.id, {
        left: Math.min(fallbackLeft, bounds.rightBound),
        top: Math.min(fallbackTop, bounds.bottomBound)
      });

      placedRects.push({
        left: Math.min(fallbackLeft, bounds.rightBound),
        top: Math.min(fallbackTop, bounds.bottomBound),
        right: Math.min(fallbackLeft, bounds.rightBound) + boxWidth,
        bottom: Math.min(fallbackTop, bounds.bottomBound) + boxHeight
      });
    }
  });
}
function createAboutBlock() {
  if (!aboutBlock || !data.about) return;

  aboutBlock.innerHTML = `<h1>${data.about.label || 'About'}</h1>`;

  aboutBlock.addEventListener('click', () => {
    const state = windowState.get(data.about.id);
    const restoreFromMinimize = Boolean(state && state.minimized);
    openWorkWindow(data.about, restoreFromMinimize);
  });
}

function positionAboutBlock() {
  if (!aboutBlock || !filterBar) return;

  const filterRect = filterBar.getBoundingClientRect();

  aboutBlock.style.left = `${filterRect.left}px`;
  aboutBlock.style.top = `${filterRect.bottom + 16}px`;
  aboutBlock.style.width = `${filterRect.width}px`;
}



function clampWorkPositionsToViewport() {
   if (isMobileLayout()) return;
   
  data.works.forEach(work => {
    const div = workElements.get(work.id);
    const position = workPositions.get(work.id);

    if (!div || !position) return;

    const bounds = getSafeBounds(div);

    const clampedLeft = Math.min(
      Math.max(bounds.leftBound, position.left),
      bounds.rightBound
    );

    const clampedTop = Math.min(
      Math.max(bounds.topBound, position.top),
      bounds.bottomBound
    );

    position.left = clampedLeft;
    position.top = clampedTop;

    div.style.left = `${clampedLeft}px`;
    div.style.top = `${clampedTop}px`;
  });
}

//-----
function clearWorkPositions() {
  data.works.forEach(work => {
    const div = workElements.get(work.id);
    if (!div) return;

    div.style.left = '';
    div.style.top = '';
  });
}
//-----


    function applyStoredPositions() {
      data.works.forEach(work => {
        const div = workElements.get(work.id);
        const position = workPositions.get(work.id);

        if (!div || !position) return;

        div.style.left = `${position.left}px`;
        div.style.top = `${position.top}px`;
      });
    }

    function updateFilters() {
      data.works.forEach(work => {
        const div = workElements.get(work.id);
        if (!div) return;

        const isVisible =
          activeTags.size === 0 ||
          (work.tags || []).some(tag => activeTags.has(tag));

        div.style.display = isVisible ? 'flex' : 'none';
      });
    }

    function createFilterUI() {
      const title = document.createElement('div');
      title.className = 'filter-title';
    //  title.textContent = 'Tags';
      filterBar.appendChild(title);

      const allTags = [...new Set(data.works.flatMap(work => work.tags || []))];

      allTags.forEach(tag => {
        const item = document.createElement('div');
        item.className = 'filter-item';

        const icon = document.createElement('img');
        icon.src = 'assets/icons/checkbox-empty.png';
        icon.alt = '';

        const label = document.createElement('span');
        label.textContent = tag;

        item.appendChild(icon);
        item.appendChild(label);

        item.addEventListener('click', () => {
          if (activeTags.has(tag)) {
            activeTags.delete(tag);
            icon.src = 'assets/icons/checkbox-empty.png';
          } else {
            activeTags.add(tag);
            icon.src = 'assets/icons/checkbox-checked.png';
          }

          updateFilters();
        });

        filterBar.appendChild(item);
      });
    }



    data.works.forEach(work => {
      const div = document.createElement('div');
      div.className = 'work-box';
      div.dataset.id = work.id;
      div.innerHTML = `<h1>${work.title}</h1>`;

      div.addEventListener('click', () => {
        const state = windowState.get(work.id);
        const restoreFromMinimize = Boolean(state && state.minimized);
        openWorkWindow(work, restoreFromMinimize);
      });

      container.appendChild(div);
      workElements.set(work.id, div);
    });

createFilterUI();
createAboutBlock();
positionAboutBlock();

// requestAnimationFrame(() => {
//   assignRandomPositionsOnce(data.works);
//   applyStoredPositions();
//   clampWorkPositionsToViewport();
//   updateFilters();
// });
requestAnimationFrame(() => {
  if (!isMobileLayout()) {
    assignRandomPositionsOnce(data.works);
    applyStoredPositions();
    clampWorkPositionsToViewport();
  } else {
    clearWorkPositions();
  }

  updateFilters();
});

window.addEventListener('resize', () => {
  positionAboutBlock();

  if (!isMobileLayout()) {
    clampWorkPositionsToViewport();
  } else {
    clearWorkPositions();
  }

  updateFilters();

  document.querySelectorAll('.work-window').forEach(win => {
    const rect = win.getBoundingClientRect();
    const id = win.dataset.id;
    const state = windowState.get(id);

    if (rect.top < 0) {
      win.style.top = '0px';
      if (state) state.top = 0;
    }

    if (rect.left < 0) {
      win.style.left = '0px';
      if (state) state.left = 0;
    }
  });
});
  })
  .catch(error => console.error('Error loading JSON:', error));



