const familyArr = [
  "АДВОКАТИ З СІМЕЙНОГО ПРАВА ТА РОЗЛУЧЕНЬ У МІСТІ КИЇВ, УКРАЇНА",
  "КОНСУЛЬТАЦІЇ ТА ВІДЕОКОНСУЛЬТАЦІЇ ДОСТУПНІ",
  "СПРЯМОВАНІ НА ДІТЕЙ ТА ВРАХУВАННЯ ІНТЕРЕСІВ СІМ'Ї",
];

const familyArticle = document.querySelector(".heading__text__family");
const discountTag = document.querySelector(".discount__family");
let index = 0;

function toggleText() {
  familyArticle.classList.add("hidden"); // Apply the 'hidden' class to fade out the text

  setTimeout(() => {
    if (index !== 2) {
      index++;
    } else {
      index = 0;
    }

    familyArticle.innerHTML = familyArr[index];
    familyArticle.classList.remove("hidden"); // Remove the 'hidden' class to fade in the new text
  }, 500);
}

setInterval(toggleText, 3000);

/// BURGER LOGIC ///

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".nav__container");
const linkTg = document.querySelector(".link__style__tg");

iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("__lock");
  iconMenu.classList.toggle("__active");
  menuBody.classList.toggle("__active");
  linkTg.classList.toggle("__active");
});

/// CAROUSEL ///

const carouselButtons = document.querySelectorAll(".owl-dot");

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove "active" class from all buttons
    carouselButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add "active" class to the clicked button
    button.classList.add("active");
  });
});

const firstButton = document.getElementById("button-1");
const secondButton = document.getElementById("button-2");
const thirdButton = document.getElementById("button-3");

const sliders = document.querySelectorAll(".owl-slide");

firstButton.addEventListener("click", changeFirstText);
secondButton.addEventListener("click", changeSecondText);
thirdButton.addEventListener("click", changeThirdText);

const firstSlide = document.getElementById("firstSlide");
const secondSlide = document.getElementById("secondSlide");
const thirdSlide = document.getElementById("thirdSlide");

let flag = firstSlide;

function changeFirstText() {
  flag.classList.remove("visible");
  if (!firstSlide.classList.contains("visible")) {
    firstSlide.classList.add("visible");
    flag = firstSlide;
  }
  toggleVisibility(firstSlide);
}

function changeSecondText() {
  flag.classList.remove("visible");
  if (!secondSlide.classList.contains("visible")) {
    secondSlide.classList.add("visible");
    flag = secondSlide;
  }
  toggleVisibility(secondSlide);
}

function changeThirdText() {
  flag.classList.remove("visible");
  if (!thirdSlide.classList.contains("visible")) {
    thirdSlide.classList.add("visible");
    flag = thirdSlide;
  }
  toggleVisibility(thirdSlide);
}

function toggleVisibility(newFlag) {
  flag.classList.remove("visible");
  flag.style.opacity = "0";
  newFlag.classList.add("visible");
  setTimeout(() => {
    newFlag.style.opacity = "1";
  }, 100);
  flag = newFlag;
}

/// CAROUSEL ///

/// NEW CAROUSEL ///

const carouselButtonsDivorce = document.querySelectorAll(".owl-dot-divorce");

carouselButtonsDivorce.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove "active" class from all buttons
    carouselButtonsDivorce.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add "active" class to the clicked button
    button.classList.add("active");
  });
});

const firstButtonDivorce = document.getElementById("button-1-divorce");
const secondButtonDivorce = document.getElementById("button-2-divorce");
const thirdButtonDivorce = document.getElementById("button-3-divorce");

const slidersDivorce = document.querySelectorAll(".owl-slide-divorce");

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
  toggleVisibility(firstSlideDivorce);
}

function changeSecondTextDivorce() {
  flagDivorce.classList.remove("visible");
  if (!secondSlideDivorce.classList.contains("visible")) {
    secondSlideDivorce.classList.add("visible");
    flagDivorce = secondSlideDivorce;
  }
  toggleVisibility(secondSlideDivorce);
}

function changeThirdTextDivorce() {
  flagDivorce.classList.remove("visible");
  if (!thirdSlideDivorce.classList.contains("visible")) {
    thirdSlideDivorce.classList.add("visible");
    flagDivorce = thirdSlideDivorce;
  }
  toggleVisibility(thirdSlideDivorce);
}

function toggleVisibility(newFlagDivorce) {
  flagDivorce.classList.remove("visible");
  flagDivorce.style.opacity = "0";
  newFlagDivorce.classList.add("visible");
  setTimeout(() => {
    newFlagDivorce.style.opacity = "1";
  }, 100);
  flagDivorce = newFlagDivorce;
}

/// NEW CAROUSEL ///

/// HIDE TEXT ///

const buttonHide = document.querySelector(".frm_btn");
const manualHide = document.querySelector(".manual__hide");

buttonHide.addEventListener("click", function hideText() {
  buttonHide.style.display = "none";
  manualHide.style.display = "block";
  setTimeout(() => {
    manualHide.style.opacity = "1";
  }, 100);
});

/// HIDE TEXT  ///
