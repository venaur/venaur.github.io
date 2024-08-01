document.addEventListener('DOMContentLoaded', function() {
  // Show the top logo when home-page is displayed
  const topLogo = document.getElementById('top-logo');
  topLogo.style.display = 'block';
});

const collaborations = [
  {name: "> Toad",        
    // image: "assets/claudia.png", 
    title: "Where are you Really From?",        
    description: "description. description  description description description description description",
    instagram: "1313.es"
  },
];



const artists = [
  {name: "> Where are you Really From?",
    title: "Where are you <i> Really</i> From? (2024)",  
    image: "assets/where-are-you/1.jpg",       
    description: "The exploration of the common question, “Where are you really from?” was inspired by the conceptual structure of the Her Noise Archive. Irene Revell (2023) emphasized that the archive isn't just associated with “feminism”, but encompasses a broader theme of “power.” It’s designed to provoke power imbalances and explore the ways individuals can interrogate power relations and dynamics. The question itself, “where are you really from?,” holds a higher significance within this context, exploring how power dynamics not only dictate who poses the question but also influences who becomes the subject of these inquiries.<br><br> For this project, I conducted eight interviews and each individual was someone with a diverse background. Some of the questions I posed included:<br><br> - How have you dealt with or responded to stereotypes and racism? <br>  - Have you struggled with belonging? <br>    - How would you imagine a future where questions like, “where are you really from?” may no longer be asked?  <br><br>Towards the end of the interviews, participants shared suggestions for more considerate ways to ask questions: <br> <br>- What is your ethnicity? <br>- What is your background/heritage?<br>- What languages do you speak?",
  },

  {name: "> Echoes of the Past, Present & Future",        
    // image: "assets/amias.png", 
    title: "Echoes of the Past, Present & Future", 
    description: "Content",
    // instagram: "amias_hanley"
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
}


//--------- Display collaboration details ------
function showCollaborations(index){
  const collab = collaborations[index];

  const instagramLink = collab.instagram
    ? `<a href="https://www.instagram.com/${collab.instagram}" target="_blank" class="instagram-link">
         <img src="instagram.png" alt="Instagram" class="instagram-icon">
         <span class="instagram-username">${collab.instagram}</span>
       </a>`
    : '';
  
  content.innerHTML = `
    ${collab.image ? `<img src="${collab.image}" alt="${collab.name}">` : ''}
    <h2>${collab.title}</h2>
    <h3>${collab.name}</h3>
    <p>${collab.description}</p>
    <div>${instagramLink}</div>
  `;

  content.style.display = 'block';
}




displayArtistNames();
displayCollaborations();