
// 🎯 EDIT THIS FILE TO CHANGE SITE CONTENT

const siteContent = {
  name: "Carrigan Nelson",
  tagline: "Singer. Artist. Sunshine in a storm.",
  videoURL: "https://www.youtube.com/embed/0XKdEcrq52E",
  bio: `Carrigan is a singer and artist whose spirit shines through every note and brushstroke.
        This site celebrates her creativity and resilience.`,

  // 🎨 Artwork Gallery
  artwork: [
    {
      title: "Sunflower Sky",
      image: "images/sunflower-sky.jpg"
    },
    {
      title: "Hope in Bloom",
      image: "images/hope-in-bloom.jpg"
    }
  ]
};

// Load content into the HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("carrigan-name").textContent = siteContent.name;
  document.getElementById("tagline").textContent = siteContent.tagline;
  document.getElementById("bio-text").textContent = siteContent.bio;
  document.getElementById("video-frame").src = siteContent.videoURL;

  const artContainer = document.getElementById("artwork-grid");
  if (artContainer && siteContent.artwork) {
    siteContent.artwork.forEach(art => {
      const item = document.createElement("div");
      item.className = "art-item";
      item.innerHTML = `
        <img src="${art.image}" alt="${art.title}" />
        <p>${art.title}</p>
      `;
      artContainer.appendChild(item);
    });
  }
});
