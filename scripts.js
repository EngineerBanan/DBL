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


// function changement_tag()
//     {
//         if (document.getElementById('banniere-goku').src='images/banniere_goku.webp')
//     {
//         document.getElementById('banniere-goku').id='banniere-vegeta';
//         document.getElementById('banniere-vegeta').href='images/banniere_vegeta.webp';
//         document.getElementById('goku').id='vegeta';
//         document.getElementById('toggleImage').src='images/changement_tag_active.webp';
//     }
//         else if (document.getElementById('banniere-vegeta').src='images/banniere_vegeta.webp')
//     {
//         document.getElementById('banniere-vegeta').id='banniere-goku';
//         document.getElementById('baniere-goku').href="images/banniere_goku.webp";
//         document.getElementById('vegeta').id="goku";
//         document.getElementById('toggleImage').src='images/changement_tag.webp';
//     }
//     }
            
//     function changement_perso()
//         { 
//             var image = document.getElementById('transfo').src;
//             if (image == 'images/fusion_off.webp')
//         {
//             document.getElementById('toggleImage').id = 'changedImage';
//             document.getElementById('transfo').src = 'images/fusion_on.webp';
//             document.getElementById('banniere').href = 'images/banniere_gogeta';
//             document.getElementById('goku').id = 'gogeta';
//             document.getElementById('titre').title = 'Gogeta SSGSS';
//         }
//             else if (image == 'images/fusion_on.webp')
//         {
//             document.getElementById('transfo').src = 'images/fusion_off.webp';
//             document.getElementById('banniere').href = 'images/banniere_goku';
//             document.getElementById('gogeta').id = 'goku';
//             document.getElementById('titre').title = 'Goku & Vegeta SSGSS';
//             document.getElementById('changedImage').id = 'toggleImage';
//         }
//         }