document.getElementById('landing').addEventListener('click', function() {
  window.location.href = 'home.html'; // Replace 'home.html' with your home page URL
});






// document.getElementById('landing').addEventListener('click', function() {
//   const landing = document.getElementById('landing');
//   const home = document.getElementById('home');
//   const topLogo = document.getElementById('top-logo');

//   // Fade out landing page
//   landing.style.opacity = 0;

//   // Wait for the transition to end before hiding the landing and showing the home page
//   setTimeout(() => {
//     landing.style.display = 'none';
//     home.style.opacity = 1;
//     home.style.visibility = 'visible';
//     topLogo.style.display = 'block';
//   }, 500); // Duration of the transition
// });

const artists = [
  {name: "Where are you Really From?",        
    // image: "assets/claudia.png", 
    title: "Where are you Really From?",        
    description: "description.",
    instagram: "1313.es"
  },
  {name: "Echoes of the Past, Present & Future",        
    // image: "assets/amias.png", 
    title: "Echoes of the Past, Present & Future", 
    description: "Content",
    instagram: "amias_hanley"
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
    <h3>${artist.name}</h3>
    <p>${artist.description}</p>
    <div>${instagramLink}</div>
  `;

  // Display artist details
  content.style.display = "block";
}

displayArtistNames();
