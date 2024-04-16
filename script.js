// //animation all the time
// // document.addEventListener("DOMContentLoaded", function() {
// //     const logoVideo = document.getElementById("logo-video");
// //     const portfolioContent = document.getElementById("portfolio");
// //     const topLogo = document.getElementById("top-logo");

// //     topLogo.style.opacity = "0";

  
// //     // Automatically fade out the logo after 3 seconds
// //     setTimeout(() => {
// //       logoVideo.classList.add("logo-fade-out"); // Add class to trigger opacity transition
// //       setTimeout(() => {
// //         logoVideo.style.display = "none";
// //         portfolioContent.style.opacity = "1"; // Fade in portfolio content
// //         topLogo.style.opacity = "1"; // Show top logo
// //       }, 5000); // Adjust the duration as needed
// //     }, logoVideo.duration * 2000); // Wait for the video to finish playing
// //   });
  

// //   document.addEventListener("DOMContentLoaded", function() {
// //     const categories = document.querySelectorAll(".category");
    
// //     // Trigger opacity transition for each category
// //     categories.forEach(category => {
// //       setTimeout(() => {
// //         category.style.opacity = "1";
// //       }, 1000); // Adjust the delay as needed
// //     });
// //   });


// //Animation once
// document.addEventListener("DOMContentLoaded", function() {
//   const logoVideo = document.getElementById("logo-video");
//   const portfolioContent = document.getElementById("portfolio");
//   const topLogo = document.getElementById("top-logo");

//   const animationPlayed = sessionStorage.getItem("animationPlayed");

//   if (!animationPlayed) {
//     // Animation has not played yet
//     topLogo.style.opacity = "0";
    
//     // Play the animation
//     logoVideo.play();
//     logoVideo.addEventListener("ended", () => {
//       // Animation ended
//       logoVideo.classList.add("logo-fade-out");
//       setTimeout(() => {
//         logoVideo.style.display = "none";
//         portfolioContent.style.opacity = "1"; // Fade in portfolio content
//         topLogo.style.opacity = "1"; // Show top logo
//         document.body.style.pointerEvents = "auto"; // Enable pointer events
//         sessionStorage.setItem("animationPlayed", true); // Store flag
//       }, 1000); // Adjust the duration as needed
//     });

//     document.body.style.pointerEvents = "none"; // Disable pointer events during animation
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
// });




// document.addEventListener("DOMContentLoaded", function() {
//   const logoVideo = document.getElementById("logo-video");
//   const portfolioContent = document.getElementById("portfolio");
//   const topLogo = document.getElementById("top-logo");

//   const animationPlayed = sessionStorage.getItem("animationPlayed");

//   function startAnimation() {
//     topLogo.style.opacity = "0";

//     // Play the animation
//     logoVideo.play();
//     logoVideo.addEventListener("ended", () => {
//       // Animation ended
//       logoVideo.classList.add("logo-fade-out");
//       setTimeout(() => {
//         logoVideo.style.display = "none";
//         portfolioContent.style.opacity = "1"; // Fade in portfolio content
//         topLogo.style.opacity = "1"; // Show top logo
//         document.body.style.pointerEvents = "auto"; // Enable pointer events
//         sessionStorage.setItem("animationPlayed", true); // Store flag
//       }, 1000); // Adjust the duration as needed
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

//   // Add click event listener to initiate animation (for Safari)
//   document.body.addEventListener("click", startAnimation);
// });




document.addEventListener("DOMContentLoaded", function() {
  const logoVideo = document.getElementById("logo-video");
  const portfolioContent = document.getElementById("portfolio");
  const topLogo = document.getElementById("top-logo");

  const animationPlayed = sessionStorage.getItem("animationPlayed");

  function startAnimation() {
    topLogo.style.opacity = "0";

    // Play the animation
    logoVideo.play().then(() => {
      // Video successfully started playing
      logoVideo.classList.add("logo-fade-out");
      setTimeout(() => {
        logoVideo.style.display = "none";
        portfolioContent.style.opacity = "1"; // Fade in portfolio content
        topLogo.style.opacity = "1"; // Show top logo
        document.body.style.pointerEvents = "auto"; // Enable pointer events
        sessionStorage.setItem("animationPlayed", true); // Store flag
      }, 1000); // Adjust the duration as needed
    }).catch(error => {
      // Autoplay was prevented, handle error
      console.error("Autoplay was prevented:", error);
      // You may want to display a message or provide alternative instructions
    });

    document.body.style.pointerEvents = "none"; // Disable pointer events during animation
  }

  if (!animationPlayed) {
    // Animation has not played yet
    startAnimation();
  } else {
    // Animation already played
    logoVideo.style.display = "none"; // Hide the logo video
    portfolioContent.style.opacity = "1"; // Show portfolio content
    topLogo.style.opacity = "1"; // Show top logo
  }

  const categories = document.querySelectorAll(".category");
  categories.forEach(category => {
    category.style.opacity = "1"; // Trigger opacity transition for categories
  });

  // Check if the browser is Safari (user-agent detection)
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    // For Safari, 
    startAnimation();
  }
});
