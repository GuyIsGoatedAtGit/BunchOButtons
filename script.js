// Array of image file paths
const images = ["images/togswt1.svg", "images/togswt2.svg"];
let currentIndex = 0;

function flipImage() {
  // Move to the next image index
  currentIndex = (currentIndex + 1) % images.length;
  // Update the image src
  document.getElementById("togswtimg1").src = images[currentIndex];
}
