const sliderLine = document.querySelector(".text__wrapper");
const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");
let position = 0;
let slideInterval;

const theNextSlide = () => {
  clearInterval(slideInterval);
  if (position < 80) {
    position += 20;
  } else {
    position = 0;
  }
  sliderLine.style.transform = `translateX(-${position}%)`;
  slideInterval = setInterval(theNextSlide, 3800);
};

const thePrevSlide = () => {
  clearInterval(slideInterval);
  if (position > 0) {
    position -= 20;
  } else {
    position = 80;
  }
  sliderLine.style.transform = `translateX(-${position}%)`;
  slideInterval = setInterval(theNextSlide, 3800);
};

slideInterval = setInterval(theNextSlide, 3800);

nextButton.addEventListener("click", theNextSlide);
prevButton.addEventListener("click", thePrevSlide);
