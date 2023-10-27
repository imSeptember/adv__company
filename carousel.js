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

//////////////////////////////////////

const firstButtonDivorce = document.getElementById("button-1-divorce");
const secondButtonDivorce = document.getElementById("button-2-divorce");
const thirdButtonDivorce = document.getElementById("button-3-divorce");

firstButtonDivorce.addEventListener("click", changeFirstTextDivorce);
secondButtonDivorce.addEventListener("click", changeSecondTextDivorce);
thirdButtonDivorce.addEventListener("click", changeThirdTextDivorce);

const firstSlideDivorce = document.getElementById("firstSlide-divorce");
const secondSlideDivorce = document.getElementById("secondSlide-divorce");
const thirdSlideDivorce = document.getElementById("thirdSlide-divorce");

let flagDivorce = firstSlideDivorce;

function changeFirstTextDivorce() {
  flagDivorce.classList.remove("visible");
  if (!firstSlideDivorce.classList.contains("visible")) {
    firstSlideDivorce.classList.add("visible");
    flagDivorce = firstSlideDivorce;
  }
  toggleVisibilityDivorce(firstSlideDivorce);
}

function changeSecondTextDivorce() {
  flagDivorce.classList.remove("visible");
  if (!secondSlideDivorce.classList.contains("visible")) {
    secondSlideDivorce.classList.add("visible");
    flagDivorce = secondSlideDivorce;
  }
  toggleVisibilityDivorce(secondSlideDivorce);
}

function changeThirdTextDivorce() {
  flagDivorce.classList.remove("visible");
  if (!thirdSlideDivorce.classList.contains("visible")) {
    thirdSlideDivorce.classList.add("visible");
    flagDivorce = thirdSlideDivorce;
  }
  toggleVisibilityDivorce(thirdSlideDivorce);
}

function toggleVisibilityDivorce(newFlagDivorce) {
  flagDivorce.classList.remove("visible");
  flagDivorce.style.opacity = "0";
  newFlagDivorce.classList.add("visible");
  setTimeout(() => {
    newFlagDivorce.style.opacity = "1";
  }, 100);
  flagDivorce = newFlagDivorce;
}
