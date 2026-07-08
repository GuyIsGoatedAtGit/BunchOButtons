// Array of image file paths
const images1 = ["images/togswt1.svg", "images/togswt2.svg"];
let currentIndex1 = 0;

function flipImage1() {
  // Move to the next image index
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  // Update the image src
  document.getElementById("togswtimg1").src = images1[currentIndex1];
}
document.getElementById("togswtimg1").onclick = function () {
  flipImage1();
};
const images2 = ["images/togswt1_2.svg", "images/togswt2_2.svg"];
let currentIndex2 = 0;

function flipImage2() {
  // Move to the next image index
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  // Update the image src
  document.getElementById("togswtimg2").src = images2[currentIndex2];
}
document.getElementById("togswtimg2").onclick = function () {
  flipImage2();
};
