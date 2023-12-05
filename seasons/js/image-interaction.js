/*
Changing Seasons Image Opacity
*/

let images = document.querySelectorAll('main > a > img');
// console.log(images);

function changeOpacity() {
  images[0].style.opacity = '0.5'; // change opacity of each image
  images[1].style.opacity = '0.5';
  images[2].style.opacity = '0.5';
  images[3].style.opacity = '0.5';

  this.style.opacity = '1'; // keep current image opaque
  // in event handlers, "this" refers to the HTML element that received the event
  // console.log(this);
}

function resetOpacity() {
  images[0].style.opacity = '1'; // reset opacity of each image
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  images[3].style.opacity = '1';
}

// event listeners for hover on
images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);
images[3].addEventListener('pointerover', changeOpacity);

// event listeners for hover off
images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);
images[3].addEventListener('pointerout', resetOpacity);