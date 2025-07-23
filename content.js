
// 🎯 EDIT THIS FILE TO CHANGE SITE CONTENT

const siteContent = {
  name: "Carrigan Nelson",
  tagline: "Singer. Artist. Sunshine in a storm.",
  videoURL: "https://www.youtube.com/embed/0XKdEcrq52E",
  bio: `Carrigan is a singer and artist whose spirit shines through every note and brushstroke.
        This site celebrates her creativity and resilience.`
};

// This loads the content into the HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("carrigan-name").textContent = siteContent.name;
  document.getElementById("tagline").textContent = siteContent.tagline;
  document.getElementById("bio-text").textContent = siteContent.bio;
  document.getElementById("video-frame").src = siteContent.videoURL;
});
