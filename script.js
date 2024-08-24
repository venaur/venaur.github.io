// Helper function for creating delay
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }




document.addEventListener('DOMContentLoaded', function() {
  // Show the top logo when home-page is displayed
  const topLogo = document.getElementById('top-logo');
  topLogo.style.display = 'block';
});





// const collaborations = [
//   {name: "> Toad",        
//     // image: "assets/claudia.png", 
//     title: "Where are you Really From?",        
//     description: "description. description  description description description description description",
//     instagram: "1313.es"
//   },
// ];




const artists = [
  {name: "> Where are you Really From?",
    title: "Where are you <i> Really</i> From? (2024)",  
    image: "assets/where-are-you/1.jpg",       
    description: "The exploration of the common question, “Where are you really from?” was inspired by the conceptual structure of the Her Noise Archive. Irene Revell (2023) emphasized that the archive isn't just associated with “feminism”, but encompasses a broader theme of “power.” It’s designed to provoke power imbalances and explore the ways individuals can interrogate power relations and dynamics. The question itself, “where are you really from?,” holds a higher significance within this context, exploring how power dynamics not only dictate who poses the question but also influences who becomes the subject of these inquiries.<br><br> For this project, I conducted eight interviews and each individual was someone with a diverse background. Some of the questions I posed included:<br><br> - How have you dealt with or responded to stereotypes and racism? <br>  - Have you struggled with belonging? <br>    - How would you imagine a future where questions like, “where are you really from?” may no longer be asked?  <br><br>Towards the end of the interviews, participants shared suggestions for more considerate ways to ask questions: <br> <br>- What is your ethnicity? <br>- What is your background/heritage?<br>- What languages do you speak?",
  },

  {name: "> Echoes of the Past, Present & Future",        
    image: "assets/echoes/echoes-img.jpg", 
    title: "Echoes of the Past, Present & Future (2023)", 
    description: "I question my motives and the role that creating art plays in my life. Is it merely a way to revisit and reconcile my past, or does it hold an alternative significance for my future? This piece is an exploration of that internal conflict. Using Pure Data and two speakers accompanied by acoustic structures, I create an immersive sound experience that gives the illusion of echoing. In this piece, the echoes serve as a metaphor for my past and internal chaos. They continue to reverberate in the present, becoming increasingly distant as time passes. I question how this distance will shape and influence my future decisions. The sound in this piece embodies a sense of ambiguity and uncertainty, much like my own personal journey. It also represents a willingness to embrace the unknown, the possibility of change, and forgiveness as I seek to transcend the limits of my personal experience.",
  },
  {name: "> Actually Nowhere Existing",        
    image: "assets/nowhere/beams-cover.jpg", 
    title: "Actually Nowhere Existing",        
    description: "description. description  description description description description description",
  },
  {name: "> Toad and the Golden Baguette",        
    // image: "assets/claudia.png", 
    title: "Toad and the Golden Baguette",        
    description: "description. description  description description description description description",
  },
  {name: "> Temper Trauma",        
    // image: "assets/claudia.png", 
    title: "Temper Trauma",        
    description: "description. description  description description description description description",
  },
  {name: "> About",        
    // image: "assets/claudia.png", 
    title: "About",        
    description: "description. description  description description description description description",
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

//--------- Display collaborations list -----
function displayCollaborations() {
  const collablist = document.getElementById("collab-list");
  collablist.innerHTML = ""; 

  collaborations.forEach((collaboration, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = collaboration.name;
    listItem.onclick = () => showCollaborations(index);
    collablist.appendChild(listItem);
  });
}

// ---display artist details----
function showArtist(index) {
  const artist = artists[index];

  const instagramLink = artist.instagram
    ? `<a href="https://www.instagram.com/${artist.instagram}" target="_blank" class="instagram-link">
         <img src="instagram.png" alt="Instagram" class="instagram-icon">
         <span class="instagram-username">${artist.instagram}</span>
       </a>`
    : '';
  
  content.innerHTML = `
    ${artist.image ? `<img src="${artist.image}" alt="${artist.name}">` : ''}
    <h2>${artist.title}</h2>
    <p>${artist.description}</p>
    <div>${instagramLink}</div>
  `;

  // Display artist details
  content.style.display = "block";


    // Highlight the selected artist in the list
    highlightSelectedArtist(index);
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
//--------- Display collaboration details ------
// function showCollaborations(index){
//   const collab = collaborations[index];

//   const instagramLink = collab.instagram
//     ? `<a href="https://www.instagram.com/${collab.instagram}" target="_blank" class="instagram-link">
//          <img src="instagram.png" alt="Instagram" class="instagram-icon">
//          <span class="instagram-username">${collab.instagram}</span>
//        </a>`
//     : '';
  
//   content.innerHTML = `
//     ${collab.image ? `<img src="${collab.image}" alt="${collab.name}">` : ''}
//     <h2>${collab.title}</h2>
//     <h3>${collab.name}</h3>
//     <p>${collab.description}</p>
//     <div>${instagramLink}</div>
//   `;

//   content.style.display = 'block';
// }


// Update displayArtistNames to create a typing effect
// async function displayArtistNames() {
//   const artistList = document.getElementById("artist-list");
//   artistList.innerHTML = ""; // Clear the existing list

//   for (let artist of artists) {
//     const listItem = document.createElement("li");
//     artistList.appendChild(listItem); // Append the empty list item first

//     // Display each letter one by one
//     for (let letter of artist.name) {
//       listItem.textContent += letter;
//       await delay(50); // Adjust the speed by changing the delay time (in milliseconds)
//     }

//     // Set up the click event after all letters are displayed
//     listItem.onclick = () => showArtist(artists.indexOf(artist));
//   }
// }


displayArtistNames();
// displayCollaborations();