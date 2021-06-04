
function recommendedSlider() {

  // UI VARIABLES
  const recomNext = document.getElementById("recom-arrow-right");
  const recomPrev = document.getElementById("recom-arrow-left");
  const recomSlide = document.getElementById("page-slide-recom");
  const recomCards = document.querySelectorAll('#page-slide-recom > .page-card')

  // METRICS VARIABLES
  let recomGap = 20;
  let counter = 0;
  const cardWidth = recomCards[counter].clientWidth;

  // BEGIN SCROLLING FUNCTIONALITY
  recomNext.addEventListener('click', () => {
    if (counter >= recomCards.length - 3) { counter = -1 };
    counter++;
    recomSlide.style.transform = 'translateX(' + -((cardWidth * counter) + (recomGap * counter)) + 'px)';
  });

  recomPrev.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    recomSlide.style.transform = 'translateX(' + -((cardWidth * counter) + (recomGap * counter)) + 'px)';
  });
}

recommendedSlider();
