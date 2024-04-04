const titles = document.querySelectorAll('.title');
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const playbackBar = document.getElementById('playback-bar');
const exitButton = document.getElementById('exit-btn');
let isPlaying = false;

let isColorInverted = false; // Variable to track color inversion

// Function to toggle color inversion
function toggleColorInversion() {
  document.body.classList.toggle('invert-colors', isColorInverted);
}

// Function to play music
function playMusic(src) {
  audio.src = src;
  audio.play();
  isPlaying = true;
  isColorInverted = true; // Set color inversion when music starts
  toggleColorInversion();
  playPauseButton.textContent = 'Pause';
  document.querySelector('.play-bar').style.display = 'flex';
}

// Event listener for titles
titles.forEach(title => {
  title.addEventListener('click', () => {
    const src = title.getAttribute('data-src');
    playMusic(src);
  });
});

// Event listener for play/pause button
playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseButton.textContent = 'Play';
  } else {
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = 'Pause';
  }
});

// Event listener for audio time update to update playback bar
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  playbackBar.style.width = progress + '%';
});


// Event listener for exit button
exitButton.addEventListener('click', () => {
  audio.pause(); // Pause audio when exiting
  isPlaying = false;
  isColorInverted = false; // Reset color inversion
  toggleColorInversion();
  document.querySelector('.play-bar').style.display = 'none';
});

// Update playhead position function
function updatePlayhead() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  const playhead = document.getElementById('playhead');
  playhead.style.left = progress + '%';
}

// Show exit button only when music is playing
audio.addEventListener('play', () => {
  exitButton.style.display = 'block';
});

// Event listener for dragging the playhead
let isDragging = false;
playhead.addEventListener('mousedown', () => {
  isDragging = true;
});
document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const boundingRect = playhead.parentElement.getBoundingClientRect();
    const progress = (event.clientX - boundingRect.left) / boundingRect.width;
    const duration = audio.duration;
    audio.currentTime = duration * progress;
  }
});
document.addEventListener('mouseup', () => {
  isDragging = false;
});


// Event listener for audio time update to update playhead
audio.addEventListener('timeupdate', updatePlayhead);

//hide titles
// Function to hide all titles except the clicked one
function hideOtherTitles(clickedTitle) {
  titles.forEach(title => {
    if (title !== clickedTitle) {
      title.style.display = 'none';
    }
  });
}

// Function to show all titles
function showAllTitles() {
  titles.forEach(title => {
    title.style.display = 'block';
  });
}

// Event listener for titles
titles.forEach(title => {
  title.addEventListener('click', () => {
    const src = title.getAttribute('data-src');
    playMusic(src);
    hideOtherTitles(title);
  });
});

// Event listener for exit button
exitButton.addEventListener('click', () => {
  audio.pause(); // Pause audio when exiting
  isPlaying = false;
  isColorInverted = false; // Reset color inversion
  toggleColorInversion();
  document.querySelector('.play-bar').style.display = 'none';
  showAllTitles(); // Show all titles when exiting
});


//------------FOr the visuals-----------------------
// var canvas;

// function windowResized(){
//     resizedCanvas(windowWidth, windowHeight);
//     resizedCanvas.position(50,10);
// }

// function setup() {
//   canvas = createCanvas(windowWidth/1.5, windowHeight/16);
//   canvas.position(400,10);
//   canvas.style('position', 'fixed');
//   canvas.style('z-index', '1');
//   noFill();
// }
// function draw() {
//     background(255,0,0);
// }

