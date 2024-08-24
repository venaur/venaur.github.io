document.addEventListener('DOMContentLoaded', function() {
  // Show the top logo when home-page is displayed
  const topLogo = document.getElementById('top-logo');
  topLogo.style.display = 'block';
});


// JavaScript to handle click events on the artist list items
document.querySelectorAll('#artist-list li').forEach(function(item) {
  item.addEventListener('click', function() {
    // Remove the 'active' class from all items
    document.querySelectorAll('#artist-list li').forEach(function(li) {
      li.classList.remove('active');
    });

    // Add the 'active' class to the clicked item
    this.classList.add('active');

    // Show the content with animation
    var content = document.getElementById('content');
    content.classList.add('show'); // Add 'show' class to trigger animation

  });
});


const artists = [
  {name: "> Where are you Really From?",
    title: "Where are you <i> Really</i> From? (2024)",  
    image: "assets/where-are-you/1.jpg",       
    description: "The exploration of the common question, “Where are you really from?” was inspired by the conceptual structure of the Her Noise Archive. Irene Revell (2023) emphasized that the archive isn't just associated with “feminism”, but encompasses a broader theme of “power.” It’s designed to provoke power imbalances and explore the ways individuals can interrogate power relations and dynamics. The question itself, “where are you really from?,” holds a higher significance within this context, exploring how power dynamics not only dictate who poses the question but also influences who becomes the subject of these inquiries.<br><br> For this project, I conducted eight interviews and each individual was someone with a diverse background. Some of the questions I posed included:<br><br> - How have you dealt with or responded to stereotypes and racism? <br>  - Have you struggled with belonging? <br>    - How would you imagine a future where questions like, “where are you really from?” may no longer be asked?  <br><br>Towards the end of the interviews, participants shared suggestions for more considerate ways to ask questions: <br> <br>- What is your ethnicity? <br>- What is your background/heritage?<br>- What languages do you speak?",
    exit: "assets/x.png",
  
  },

  {name: "> Echoes of the Past, Present & Future",        
    image: "assets/echoes/echoes-img.jpg", 
    title: "Echoes of the Past, Present & Future (2023)", 
    description: "I question my motives and the role that creating art plays in my life. Is it merely a way to revisit and reconcile my past, or does it hold an alternative significance for my future? This piece is an exploration of that internal conflict. Using Pure Data and two speakers accompanied by acoustic structures, I create an immersive sound experience that gives the illusion of echoing. In this piece, the echoes serve as a metaphor for my past and internal chaos. They continue to reverberate in the present, becoming increasingly distant as time passes. I question how this distance will shape and influence my future decisions. The sound in this piece embodies a sense of ambiguity and uncertainty, much like my own personal journey. It also represents a willingness to embrace the unknown, the possibility of change, and forgiveness as I seek to transcend the limits of my personal experience.",
    exit: "assets/x.png",
  },
  {name: "> Actually Nowhere Existing",        
    image: "assets/nowhere/beams-cover.jpg", 
    title: "Actually Nowhere Existing",        
    description: "description. description  description description description description description",
    exit: "assets/x.png",
  },
  {name: "> Toad and the Golden Baguette",        
    // image: "assets/claudia.png", 
    title: "Toad and the Golden Baguette",        
    description: "description. description  description description description description description",
    exit: "assets/x.png",
  },
  {name: "> Temper Trauma",        
    // image: "assets/claudia.png", 
    title: "Temper Trauma",        
    description: "description. description  description description description description description",
    exit: "assets/x.png",
  },
  {name: "> Exhibitions",        
    // image: "assets/claudia.png", 
    title: "Exhibitions",        
    description: "description. description  description description description description description",
    exit: "assets/x.png",
  },

  {name: "> About",        
    // image: "assets/claudia.png", 
    title: "About",        
    description: "description. description  description description description description description",
    exit: "assets/x.png",
  },
];

const content = document.getElementById("content");

//------ display artist names-----
function displayArtistNames() {
  const artistList = document.getElementById("artist-list");
  artistList.innerHTML = ""; 

  artists.forEach((artist, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = artist.name;
    listItem.onclick = () => showArtist(index);
    artistList.appendChild(listItem);
  });
}




function hideContent() {
  const content = document.getElementById('content');
  
  // Apply the minimize class to trigger the animation
  content.classList.add('minimize');
  
  // Hide content after the animation ends
  content.addEventListener('animationend', () => {
    content.style.display = 'none'; // Hide content after animation completes
  }, { once: true }); // Ensure the event listener is triggered only once
}



// Function to dynamically add CSS styles for animations
function addDynamicStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes minimizeFromTop {
     100% {
      transform: translateY(100%);
      opacity: 0;
    }
      0% {
          transform: translateY(0);
          opacity: 1;
      }
        }

    .minimize {
      animation: minimizeFromTop 1s ease-out forwards;
    }

    .show {
      animation: slideUp 1s ease-out;
    }
  `;
  document.head.appendChild(style);
}
// Call this function to add the dynamic styles when the script loads
addDynamicStyles();



function hideContent() {
  const content = document.getElementById('content');
  
  // Add the minimize class to trigger the minimize animation
  content.classList.add('minimize');
  
  // Remove the show class if it exists
  content.classList.remove('show');

  // Hide content after the animation ends
  content.addEventListener('animationend', () => {
    content.style.display = 'none'; // Hide content after animation completes
  }, { once: true }); // Ensure the event listener is triggered only once
}


function showContent() {
  const content = document.getElementById('content');
  
  // Ensure content is displayed
  content.style.display = 'flex';
  
  // Remove the minimize class if it exists
  content.classList.remove('minimize');
  
  // Add the show class to trigger the show animation
  content.classList.add('show');
}




// ---display artist details----
// function showArtist(index) {
  // const artist = artists[index];

  // const instagramLink = artist.instagram
  //   ? `<a href="https://www.instagram.com/${artist.instagram}" target="_blank" class="instagram-link">
  //        <img src="instagram.png" alt="Instagram" class="instagram-icon">
  //        <span class="instagram-username">${artist.instagram}</span>
  //      </a>`
  //   : '';
  
  //   content.innerHTML = `
  //   <div id="exit-icon" onclick="hideContent()">
  //     <img src="${artist.exit}" alt="Exit" class="exit-icon">
  //   </div>
  //   ${artist.image ? `<img src="${artist.image}" alt="${artist.name}">` : ''}
  //   <h2>${artist.title}</h2>
  //   <p>${artist.description}</p>
  //   <div>${instagramLink}</div>
  // `;

  // // Display artist details
  // content.style.display = "block";

  //   // Show content with the animation class
  //   content.classList.add('show');

    // // Highlight the selected artist
    // highlightSelectedArtist(index);
// }


// Example function to show artist content
function showArtist(index) {
  const artist = artists[index];
  const content = document.getElementById('content');
  
  content.innerHTML = `
    <div id="exit-icon" onclick="hideContent()">
      <img src="${artist.exit}" alt="Exit" class="exit-icon">
    </div>
    ${artist.image ? `<img src="${artist.image}" alt="${artist.name}">` : ''}
    <h2>${artist.title}</h2>
    <p>${artist.description}</p>
  `;

  showContent(); // Show the content with animation
}



// Function to highlight the selected artist
function highlightSelectedArtist(index) {
  const artistItems = document.querySelectorAll('#artist-list li');

  artistItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active'); // Add 'active' class to the selected item
    } else {
      item.classList.remove('active'); // Remove 'active' class from all other items
    }
  });
}


//------ display artist names-----
function displayArtistNames() {
  const artistList = document.getElementById("artist-list");
  artistList.innerHTML = ""; 

  artists.forEach((artist, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = artist.name;
      listItem.onclick = () => showArtist(index); // Set click event handler
      artistList.appendChild(listItem);
  });
}
// Function to hide content
// function hideContent() {
//   content.classList.remove('show');
//   content.style.display = 'none'; // Hide content again
// }




// Call function to display names
displayArtistNames();
hideContent();
addDynamicStyles();



