
//Landing Page
// document.getElementById('landing').addEventListener('click', function() {
//   document.getElementById('landing').style.display = 'none';
//   document.getElementById('home').style.display = 'flex';
//   document.getElementById('top-logo').style.display = 'block';
// });

document.getElementById('landing').addEventListener('click', function() {
  const landing = document.getElementById('landing');
  const home = document.getElementById('home');
  const topLogo = document.getElementById('top-logo');

  // Fade out landing page
  landing.style.opacity = 0;

  // Wait for the transition to end before hiding the landing and showing the home page
  setTimeout(() => {
    landing.style.display = 'none';
    home.style.opacity = 1;
    home.style.visibility = 'visible';
    topLogo.style.display = 'block';
  }, 500); // Duration of the transition
});


// document.addEventListener("DOMContentLoaded", function() {
//   const logoVideo = document.getElementById("logo-video");
//   const portfolioContent = document.getElementById("portfolio");
//   const topLogo = document.getElementById("top-logo");

//   const animationPlayed = sessionStorage.getItem("animationPlayed");

//   function startAnimation() {
//     topLogo.style.opacity = "0";

//     // Play the animation
//     logoVideo.play().then(() => {
//       // Video successfully started playing
//       logoVideo.classList.add("logo-fade-out");
//       setTimeout(() => {
//         logoVideo.style.display = "none";
//         portfolioContent.style.opacity = "1"; // Fade in portfolio content
//         topLogo.style.opacity = "1"; // Show top logo
//         document.body.style.pointerEvents = "auto"; // Enable pointer events
//         sessionStorage.setItem("animationPlayed", true); // Store flag
//       }, 1000); // Adjust the duration as needed
//     }).catch(error => {
//       // Autoplay was prevented, handle error
//       console.error("Autoplay was prevented:", error);
//       // You may want to display a message or provide alternative instructions
//     });

//     document.body.style.pointerEvents = "none"; // Disable pointer events during animation
//   }

//   if (!animationPlayed) {
//     // Animation has not played yet
//     startAnimation();
//   } else {
//     // Animation already played
//     logoVideo.style.display = "none"; // Hide the logo video
//     portfolioContent.style.opacity = "1"; // Show portfolio content
//     topLogo.style.opacity = "1"; // Show top logo
//   }

//   const categories = document.querySelectorAll(".category");
//   categories.forEach(category => {
//     category.style.opacity = "1"; // Trigger opacity transition for categories
//   });

//   // Check if the browser is Safari (user-agent detection)
//   const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//   if (isSafari) {
//     // For Safari, 
//     startAnimation();
//   }
// });
