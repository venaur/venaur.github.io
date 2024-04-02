document.addEventListener("DOMContentLoaded", function() {
    const logoVideo = document.getElementById("logo-video");
    const portfolioContent = document.getElementById("portfolio");
  
    // Automatically fade out the logo after 3 seconds
    setTimeout(() => {
      logoVideo.classList.add("logo-fade-out"); // Add class to trigger opacity transition
      setTimeout(() => {
        logoVideo.style.display = "none";
        portfolioContent.style.opacity = "1"; // Fade in portfolio content
      }, 5000); // Adjust the duration as needed
    }, logoVideo.duration * 2000); // Wait for the video to finish playing
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".category");
    
    // Trigger opacity transition for each category
    categories.forEach(category => {
      setTimeout(() => {
        category.style.opacity = "1";
      }, 1000); // Adjust the delay as needed
    });
  });
  