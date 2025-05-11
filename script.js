function showTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");
    document.getElementById(tabName).style.display = "block";
  }
  
  // Sample data for each category
  const completedImages = [
    { file: "art1.jpg", title: "Finished Painting 1" },
    { file: "art2.jpg", title: "Finished Painting 2" }
  ];
  
  const sketchesImages = [
    { file: "sketch1.jpg", title: "Character Sketch" },
    { file: "sketch2.jpg", title: "Background Draft" }
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
  