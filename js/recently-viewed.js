


// UI VARIABLES
const next = document.getElementById("recent-arrow-right");
const prev = document.getElementById("recent-arrow-left");
const slide = document.getElementById("page-slide-recent");
const recentCards = document.querySelectorAll('#page-slide-recent > .page-card')

// METRICS VARIABLES
let recentGap = 20;
let counter = 0;
const cardWidth = recentCards[counter].clientWidth;

// BEGIN SCROLLING FUNCTIONALITY
next.addEventListener('click', () => {
  if (counter >= recentCards.length - 3) { counter = -1 };
  counter++;
  slide.style.transform = 'translateX(' + -((cardWidth * counter) + (recentGap * counter)) + 'px)';
});

prev.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  slide.style.transform = 'translateX(' + -((cardWidth * counter) + (recentGap * counter)) + 'px)';
});



//////////////////////////////////////////////////////////////////////////
// THIS FUNCTION CAN BE CHANGED & USED FOR FUNCIONALITY CHECKS DURING DEV 


// cardDisplay.addEventListener('click', () => {
//   console.log(cardWidth);
// });

