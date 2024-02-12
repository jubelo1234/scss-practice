const carousel = document.querySelector(".carousel__inner");
let currentSlide = 0;
const totalSlides = carousel.children.length;
let slideWidth = carousel.children[0].offsetWidth + 20;

function goToSlide(slideNumber) {
  if (slideNumber < 0) {
    currentSlide = totalSlides - 1;
  } else if (slideNumber >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = slideNumber;
  }

  const offset = -currentSlide * slideWidth;
  console.log(offset);
  console.log(slideWidth);
  carousel.style.transform = `translateX(${offset}px)`;
}
let autoAdvance = setInterval(nextSlide, 10000);

function resetAuto() {
  clearInterval(autoAdvance);
  setTimeout(() => {
    autoAdvance = setInterval(nextSlide, 10000);
  }, 0);
}

function nextSlide() {
  currentSlide++;
  goToSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  goToSlide(currentSlide);
}

const stopAutoAdvance = () => {
  console.log("clicked");
  clearInterval(autoAdvance);
  setTimeout(() => {
    autoAdvance = setInterval(nextSlide, 10000);
  }, 10000);
};

document.querySelectorAll(".txt_rew").forEach(function (el) {
  el.addEventListener("click", stopAutoAdvance);
});

window.addEventListener("resize", () => {
  slideWidth = carousel.children[0].offsetWidth;
  goToSlide(currentSlide);
});