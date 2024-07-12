const myImg = document.getElementById("personnage");
const myButton = document.getElementById("toggleImage");

let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    banniere.src = "images/banniere_vegeta.webp";
  } else {
    banniere.src = "images/banniere_goku.webp";
  }
  isFirstImage = !isFirstImage;
});

const myImg2 = document.getElementById("fusion");
const myButton2 = document.getElementById("transfo");

let isGogeta = false;

myButton2.addEventListener("click", function() {
  if (isGogeta) {
    banniere.src = "images/banniere_goku.webp";
  } else {
    banniere.src = "images/banniere_gogeta.webp";
  }
  isGogeta = !isGogeta;
});