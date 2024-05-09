// var slider_img = document.querySelector('.scroll-image');
// var images = ['a.png', 'b.png', 'c.png', 'd.png'];
// var i = 0;

// function prev(){
// 	if(i <= 0) i = images.length;	
// 	i--;
// 	return setImg();			 
// }

// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.setAttribute('src', "./images"+images[i]);
	
// }

const currentImage = document.getElementById('currentImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const images = [
    "../images/a.png",
    "../images/b.png",
    "../images/c.png",
    "../images/d.png",
];

let currentIndex = 0; // Index of the currently displayed image

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
currentIndex = images.length - 1;
    }
    currentImage.src = '../images'+images[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
currentIndex = 0;
    }
    currentImage.src = '../images'+images[currentIndex];
});