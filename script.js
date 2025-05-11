function showTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");
    document.getElementById(tabName).style.display = "block";
  }
  
  // Sample data for each category
  const completedImages = [
    { file: "Cliff_Over_The_Sea.png", title: "Cliff Over the Sea" },
  ];
  
  const sketchesImages = [
    { file: "Girl_In_Front_Of_House.png", title: "Girl In Front Of House" },
  ];
  
  // Reusable function to populate a gallery
  function populateGallery(id, images) {
    const gallery = document.getElementById(id);
    images.forEach(imgData => {
      const container = document.createElement("div");
      container.className = "art-piece";
  
      const img = document.createElement("img");
      img.src = `images/${imgData.file}`;
      img.alt = imgData.title;
  
      const caption = document.createElement("p");
      caption.className = "caption";
      caption.textContent = imgData.title;
  
      container.appendChild(img);
      container.appendChild(caption);
      gallery.appendChild(container);
    });
  }
  
  // Populate both tabs
  populateGallery("completed-gallery", completedImages);
  populateGallery("sketches-gallery", sketchesImages);
  