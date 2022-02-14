const slideImages = document.querySelectorAll('.slide-img');
const imageCaption = document.querySelector('#imageCaption');
const slideDelay = 4000;

let captions = [];
captions[0] = 'Precision Tools for high end needs';
captions[1] = 'Precision Tools for high end needs';
captions[2] = 'Solid Carbide End Mills';
captions[3] = 'Tool Dispensing Unit';
captions[4] = 'Inserts';
captions[5] = 'Turning, Grooving, Milling, Boring';
captions[6] = 'Slitting Cutters, Recessing Tools';
captions[7] = 'High Performance Taps';
captions[8] = 'Small Machining Tools';
captions[9] = 'Rotating Tools';


let imageCounter = 0;

// slideImages[imageCounter].style.display= 'block';
slideImages[imageCounter].style.opacity= 1;


setInterval(nextImage, slideDelay);


function nextImage(){
    // slideImages[imageCounter].style.display= 'none';
    imageCaption.style.opacity = 0;

    slideImages[imageCounter].style.opacity= 0;

    imageCounter = (imageCounter +1 ) % slideImages.length;
    // slideImages[imageCounter].style.display= 'block';
    imageCaption.style.opacity = 1;
    slideImages[imageCounter].style.opacity= 1;
    console.log(imageCounter);
    imageCaption.innerHTML = captions[imageCounter];


}