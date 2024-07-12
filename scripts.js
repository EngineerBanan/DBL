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

myButton.addEventListener("click", function() {
  if (myImg = "images/banniere_goku"){
    document.getElementById('principal').innerHTML =
    '<p>'+
    'Cède la place à « Vegeta » via une substitution.'+
    '<br>'+
    'Si vous avez 3 cartes ou moins, tire 1 carte au hasard.'+
    '<br>'+
    'Regénère le ki de 50.'+
    '<br>'+
    'Regénère 50% de la jauge de téléportation (se déclenche 2 fois).'+
    '<br>'+
    'Octroie un bonus d\'état annulant les actions spéciales qui s\'activent'+
    '<br>'+
    'lors d\'une mise à couvert de l\'adversaire pendant 5 secondes (se déclenche 2 fois).'+
    '<br>'+
    'Annule les malus de stats.'+
    '<br>'+
    '<br>'+
    'Condition d\'utilisation : jauge de substitution pleine.'+
    '</p>';
  } else if (myImg = "images/banniere_vegeta") {
    document.getElementById("principal").innerHTML =
    '<p>'+
    'Cède la place à « Goku » via une substitution.'+
    '<br>'+
    'Si vous avez 3 cartes ou moins, tire 1 carte au hasard.'+
    '<br>'+
    'Regénère le ki de 50.'+
    '<br>'+
    'Regénère 50% de la jauge de téléportation (se déclenche 2 fois).'+
    '<br>'+
    'Octroie un bonus d\'état annulant les actions spéciales qui s\'activent'+
    '<br>'+
    'lors d\'une mise à couvert de l\'adversaire pendant 5 secondes (se déclenche 2 fois).'+
    '<br>'+
    'Annule les malus de stats.'+
    '<br>'+
    '<br>'+
    'Condition d\'utilisation : jauge de substitution pleine.'+
    '</p>';
  } else if(myImg = "images/banniere_gogeta") {
    document.getElementById("principal").innerHTML =
    '<p>'+
    'Tire une carte d\'art spécial au tour suivant.'+
    '<br>'+
    'Regénère la force de 20% et le ki de 50.'+
    '<br>'+
    'Augmente la jauge unique de 100%.'+
    '<br>'+
    'Regénère 100% de la jauge de téléportation.'+
    '<br>'+
    'Détruit l\'ensemble des cartes de l\'adversaire.'+
    '</p>'+
    '<br>'+
    '<p>'+
    'Condition d\'utilisation : après 15 secondes.'+
    '</p>';
  }
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