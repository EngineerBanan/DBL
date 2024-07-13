const myImg = document.getElementById("personnage");
const myButton = document.getElementById("toggleImage");

let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    banniere.src = "images/banniere_vegeta.webp";
    personnage.src = "images/changement_tag_active.webp";
    fusion.src = "images/fusion_off.webp";
    updateText();
  } else if (!isFirstImage) {
    banniere.src = "images/banniere_goku.webp";
    personnage.src = "images/changement_tag.webp";
    fusion.src = "images/fusion_off.webp";
    updateText();
  }
  isFirstImage = !isFirstImage;
});

const myImg2 = document.getElementById("fusion");
const myButton2 = document.getElementById("transfo");

let isGogeta = false;

myButton2.addEventListener("click", function() {
  if (isGogeta) {
    banniere.src = "images/banniere_goku.webp";
    fusion.src = "images/fusion_off.webp";
  } else {
    banniere.src = "images/banniere_gogeta.webp";
    fusion.src = "images/fusion_on.webp";
    personnage.src = "images/changement_tag.webp";

  }
  isGogeta = !isGogeta;
  updateText();
});

function updateText() {
  const banniereSrc = banniere.src;
  if (banniereSrc == "images/banniere_goku.webp") {
    document.getElementById("principal").innerHTML =
    "<p class="/light/">"+
    "Cède la place à « Vegeta » via une substitution."+
    "<br>"+
    "Si vous avez 3 cartes ou moins, tire 1 carte au hasard."+
    "<br>"+
    "Regénère le ki de 50."+
    "<br>"+
    "Regénère 50% de la jauge de téléportation (se déclenche 2 fois)."+
    "<br>"+
    "Octroie un bonus d'état annulant les actions spéciales qui s'activent"+
    "<br>"+
    "lors d'une mise à couvert de l'adversaire pendant 5 secondes (se déclenche 2 fois)."+
    "<br>"+
    "Annule les malus de stats."+
    "<br>"+
    "<br>"+
    "</p>"+
    "<p>"+
    "Condition d'utilisation : jauge de substitution pleine."+
    "</p>";
  } else if (banniereSrc == "images/banniere_vegeta.webp") {
    document.getElementById("principal").innerHTML =
    "<p class="/light/">"+
    "Cède la place à « Son Goku » via une substitution."+
    "<br>"+
    "Si vous avez 3 cartes ou moins, tire 1 carte au hasard."+
    "<br>"+
    "Regénère le ki de 50."+
    "<br>"+
    "Regénère 50% de la jauge de téléportation (se déclenche 2 fois)."+
    "<br>"+
    "Octroie un bonus d'état annulant les actions spéciales qui s'activent"+
    "<br>"+
    "lors d'une mise à couvert de l'adversaire pendant 5 secondes (se déclenche 2 fois)."+
    "<br>"+
    "Annule les malus de stats."+
    "<br>"+
    "<br>"+
    "</p>"+
    "<p>"+
    "Condition d'utilisation : jauge de substitution pleine."+
    "</p>";
  } else if (banniereSrc == "images/banniere_gogeta.webp") {
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
}

myButton.addEventListener("click", updateText);
