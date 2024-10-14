document.addEventListener('DOMContentLoaded', function() {
  const topLogo = document.getElementById('top-logo');
  topLogo.style.display = 'block';
});

//click events on the artist list items
document.querySelectorAll('#artist-list li').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelectorAll('#artist-list li').forEach(function(li) {
      li.classList.remove('active');
    });

    this.classList.add('active');

    var content = document.getElementById('content');
    content.classList.add('show');
  });
});

const artists = [
  {name: "> Where are you Really From?",
    title: "Where are you <i> Really</i> From? (2024)",  
    image: "assets/where-are-you/1.jpg",       
    description: "The exploration of the common question, “Where are you really from?” was inspired by the conceptual structure of the Her Noise Archive. Irene Revell (2023) emphasized that the archive isn't just associated with “feminism”, but encompasses a broader theme of “power.” It’s designed to provoke power imbalances and explore the ways individuals can interrogate power relations and dynamics. The question itself, “where are you really from?,” holds a higher significance within this context, exploring how power dynamics not only dictate who poses the question but also influences who becomes the subject of these inquiries.<br><br> For this project, I conducted eight interviews and each individual was someone with a diverse background. Some of the questions I posed included:<br><br> - How have you dealt with or responded to stereotypes and racism? <br>  - Have you struggled with belonging? <br>    - How would you imagine a future where questions like, “where are you really from?” may no longer be asked?  <br><br>Towards the end of the interviews, participants shared suggestions for more considerate ways to ask questions: <br> <br>- What is your ethnicity? <br>- What is your background/heritage?<br>- What languages do you speak? <br><br> ",
    exit: "assets/x.png",
  },

  {name: "> Echoes of the Past, Present & Future",        
    image: "assets/echoes/echoes-img.jpg", 
    title: "Echoes of the Past, Present & Future (2023)", 
    description: "I question my motives and the role that creating art plays in my life. Is it merely a way to revisit and reconcile my past, or does it hold an alternative significance for my future? This piece is an exploration of that internal conflict. Using Pure Data and two speakers accompanied by acoustic structures, I create an immersive sound experience that gives the illusion of echoing. In this piece, the echoes serve as a metaphor for my past and internal chaos. They continue to reverberate in the present, becoming increasingly distant as time passes. I question how this distance will shape and influence my future decisions. The sound in this piece embodies a sense of ambiguity and uncertainty, much like my own personal journey. It also represents a willingness to embrace the unknown, the possibility of change, and forgiveness as I seek to transcend the limits of my personal experience. <br><br>",
    exit: "assets/x.png",
  },

  {name: "> Actually Nowhere Existing",        
    image: "assets/nowhere/beams-cover.jpg", 
    imageText: "'Nowhere Actually Existing' was presented in the Digital Arts Computing exhibition, Damned Soggy Oat Patch (2023) and The Beams, London.",
    title: "Actually Nowhere Existing (2023)",        
    description: "‘Nowhere Actually Existing’ was a collaboration between <b>Mary Tallontire</b> and <b>VenAur</b>. This digital worlbuilding piece illustrates a place that doesn’t exist, and won’t ever exist. It is a world that solely comes from Tallontire’s head and their imagination, embodying ideas of simulation being a presentation of a person's perception of reality, originally coming from game designer Doris C. Rusch. Furthermore, it depicts a idyllic, sustainable community, with animals running around freely and wildly, which come piece together to demonstrate a Utopia, and in particular, Tallontire’s utopia, as it is their perception of reality. The name in particular comes from the book The Village Against The World which discusses the village and inhabitants of Marinaleda in Spain who created a 'Utopia' and a foundation for a cooperative way of life. This world is only a simulation, however as perfect as it may present as, it has its flaws and it calls on the audience to them. This utopia isn't real, and will assure you you're aware of it. <br><br>In parallel with the visuals of the digital worldbuilding piece, VenAur crafted an accompanying audio landscape that harmoniously complemented the visual elements. The audio was created using Pure Data and consisted of layers of ambience. VenAur drew inspiration from the nature portrayed in the visuals and crafted a composition that intertwines tranquility, excitement, and subtle elements wind. By integrating the auditory and visual elements, the collaborative aimed to transport the audience to a realm that blurs the boundaries between reality and imagination, inviting them to explore the simulated utopia. <br><br>",
    exit: "assets/x.png",
  },

  {name: "> Toad and the Golden Baguette",        
    image: "assets/toad/toad-outdoor.png", 
    title: "Toad and the Golden Baguette",        
    description: "Toad Bakery is an independently owned bakery is Camberwell, South London. Zac Slater is a student at University of the Arts, who worked closely with the staff to develop an explorative open world 2D game that told the story of a students trip from Camberwell College of Arts across Peckham Road and into Toad to collect a brand new “Golden Baguette”. The game was developed in SpriteKit, a framework that uses Swift for iOS app development. Zac approached me to create the soundtrack and game sound design for “Toad: and the Golden Baguette”, we collaborated in order to create a signature sound that uses synths based on 16-bit video games from the 90s. I referenced a range of video games to get a sound that I felt represented Camberwell, and then combined this with a recent radio set Toad had done on NTS to create an accompanying “Toad Theme”. These were then integrated into the game which is soon to publish onto the Apple App Store.",
    exit: "assets/x.png",
  },

  {name: "> Temper Trauma",        
    image: "assets/tempertrauma/temperimg.jpg",
    title: "Temper Trauma (2022)",        
    description: "Temper Trauma was part of the Digital Arts Computing exhibition, Ephemerence. For this installation, I used capacitive sensors, Arduino, Processing, music platforms, and various objects. This work was an interactive piece where a set of objects are scattered out on the floor. The audience was invited to touch the objects, triggering a unique corresponding sound. While creating this piece, I was constantly reliving memories, which allowed me to become conscious of my past selves. Through achieving a better understanding of my past, it will allow for a process in the direction of healing.",
    exit: "assets/x.png",
  },

  {name: "> Exhibitions",        
    // image: "exhibitions/wrurf.png", 
    title: "Exhibitions",        
    description: "description. description  description description description description description",
    exit: "assets/x.png",
  },

  {name: "> About",        
    image: "assets/about/about-grain.jpg", 
    title: " <br> ",        
    description: "VenAur was born in South Korea and grew up in Norway. She engages into autoethnographic exploration, weaving personal themes into her artistic practice to communicate meaningful messages. She seeks to evoke emotional response beyond mere comprehension or conversation. Transforming vulnerabilities into sources of empowerment, she uses art as a means of reclaiming agency over her experiences. Focusing on sound-based installations combined with sculpture, VenAur crafts immersive auditory sculptures. Her sonic creations invite the audience to not only listen but also to feel, recognizing the profound impact sound can have. <br><br>VenAur graduated from the BSc Digital Arts Computing at Goldsmiths, University of London in 2023. Currently, she is pursuing her masters in Sound Arts at University of the Arts, London.",
    exit: "assets/x.png",
  },
];
const content = document.getElementById("content");

// --------------------Display Artist Names--------------------------------------
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
// --------------------Animation--------------------------------------
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
addDynamicStyles();

// --------------------Show content--------------------------------------
function showContent() {
  const content = document.getElementById('content');
  content.style.display = 'flex';  
  content.classList.remove('minimize'); 
  content.classList.add('show');  
}
// --------------------Show artist content--------------------------------------
function showArtist(index) {
  const artist = artists[index];
  const content = document.getElementById('content');
  const body = document.body;

  content.innerHTML = `
    <div id="exit-icon" onclick="hideContent()">
      <img src="${artist.exit}" alt="Exit" class="exit-icon">
    </div>

    ${artist.name === '> About' ? `
      <div class="about-content">
        ${artist.image ? `<img src="${artist.image}" alt="${artist.name}" class="about-image">` : ''}
        <div class="about-description">
          <h2>${artist.title}</h2>
          <p>${artist.description}</p>
        </div>
      </div>
    ` : `
      ${artist.image ? `<img src="${artist.image}" alt="${artist.name}">` : ''}
      <h4>${artist.imageText || ''}</h4> 
      <h2>${artist.title}</h2>
      <p>${artist.description}</p>
    
      ${artist.name === '> Toad and the Golden Baguette' ? `
        <div class="gallery">
          <img src="assets/toad/toad-home.PNG" alt="Gallery Image 1">
          <img src="assets/toad/toad-fight.PNG" alt="Gallery Image 2">
        </div>
      ` : ''}

      ${artist.name === '> Actually Nowhere Existing' ? `
        <div class="nowhere-gallery">
          <img src="assets/nowhere/nowhere.jpg" alt="Gallery Image 1">
            <video controls>
                  <source src="assets/nowhere/beams.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
        </div>
    ` : ''}

    ${artist.name === '> Temper Trauma' ? `
    <div class="tt-gallery">
      <video controls>
        <source src="assets/temperTrauma/ttlooped.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img src="assets/temperTrauma/tt-1.png" alt="Gallery Image 1">
      <img src="assets/temperTrauma/tt-2.png" alt="Gallery Image 2">
      <img src="assets/temperTrauma/tt-3.png" alt="Gallery Image 3">
      <img src="assets/temperTrauma/tt-4.png" alt="Gallery Image 4">
    </div>
    ` : ''}

    ${artist.name === '> Echoes of the Past, Present & Future' ? `
    <div class="tt-gallery">
      <video controls>
        <source src="assets/echoes/echoesVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img src="assets/echoes/sketch1.png" alt="Gallery Image 1">
      <img src="assets/echoes/sketch2.png" alt="Gallery Image 2">
      <img src="assets/echoes/fusion2.png" alt="Gallery Image 3">
      <img src="assets/echoes/fusion3.png" alt="Gallery Image 4">
    </div>
    ` : ''}


    ${artist.name === '> Exhibitions' ? `
    <div class="tt-gallery">
      <img src="exhibitions/wrurf.png" alt="Where are you really from?">
      <img src="exhibitions/MA-wip.png" alt="MA WIP Show">
      <img src="exhibitions/dsop1.jpg" alt="Damned soggy oatpatch">
      <img src="exhibitions/dsop.jpg" alt="Damned soggy oatpatch">
      <img src="exhibitions/dsop-panel.png" alt="Damned soggy oatpatch">
      <img src="exhibitions/dsop-map.png" alt="Damned soggy oatpatch">
      <img src="exhibitions/ephemerence.jpg" alt="Ephemerence">
      </div>
    ` : ''}

    `}
  `;
  showContent(); 

//BG echoes img--------------------------------------
let bgImageEchoes = document.querySelector('.bgImg-echoes');
  if (!bgImageEchoes) {
    bgImageEchoes = document.createElement('div');
    bgImageEchoes.className = 'bgImg-echoes';
    bgImageEchoes.innerHTML = `<img src="assets/echo-copy.png" alt="bg image">`;
    document.body.appendChild(bgImageEchoes);
  }

  // Apply the `.show` class based on artist selection logic
  if (artist.name === '> Echoes of the Past, Present & Future') {
    body.classList.add('show-echoes');
    bgImageEchoes.classList.add('show');
  } else {
    body.classList.remove('show-echoes');
    bgImageEchoes.classList.remove('show');
  }
}

//nowhere-base-copy.png
// --------------------HideContent--------------------------------------
function hideContent() {
  const content = document.getElementById('content');
  content.classList.add('minimize'); 
  content.classList.remove('show');
 
  // Hide content after the animation ends
  content.addEventListener('animationend', () => {
    content.style.display = 'none';  
  }, { once: true });

  const body = document.body;
  content.innerHTML = ''; // Clear content

  // Remove the background image class
  body.classList.remove('show-echoes');
  const bgImageEchoes = document.querySelector('.bgImg-echoes');
  if (bgImageEchoes) {
    bgImageEchoes.classList.remove('show');
  }
  
}
// --------------------Highlight--------------------------------------
function highlightSelectedArtist(index) {
  const artistItems = document.querySelectorAll('#artist-list li');

  artistItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active'); 
    } else {
      item.classList.remove('active'); 
    }
  });
}
// --------------------Call func--------------------------------------
displayArtistNames();
hideContent();
addDynamicStyles();



