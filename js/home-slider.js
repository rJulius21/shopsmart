

// UI VARIABLES
const carouselSlide = document.querySelector('.slider__slide');
const carouselImages = document.querySelectorAll('.slider__card');
const prevBtn = document.querySelector('#home-slider__arrow--left');
const nextBtn = document.querySelector('#home-slider__arrow--right');

// VARIABLES FOR METRICS
let counter = 1;
const sliderImgSize = carouselImages[counter].clientWidth;

// LOAD IMAGE WIDTH AFTER IMAGE IS FULLY RENDERED
imagesLoaded(document.body, function () {
  return sliderImgSize;
})

// TEST - IF IMAGE WIDTH IS LOADING CORRECTLY
// console.log(sliderImgSize);

// HIDE FIRST CAROUSSEL CLONE IMAGE TO THE LEFT SIDE OF DISPLAY
carouselSlide.style.transform = 'translateX(' + (-sliderImgSize * counter) + 'px)';

// BUTTON LISTENERS
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-sliderImgSize * counter) + 'px)';
})
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-sliderImgSize * counter) + 'px)';
})

// REMOVES TRANSITION TO LOOP IMAGES SMOOTHLY USING CLONES ON START AND END
carouselSlide.addEventListener('transitionend', () => {
  console.log(carouselImages[counter].id);
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-sliderImgSize * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-sliderImgSize * counter) + 'px)';
  }
});
