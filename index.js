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

// ADD TRANSITION AFTER THE PAGE IS LOADED

// window.addEventListener("load", function () {
//   const loader01 = document.querySelector(".btn__main__page");
//   const loader02 = document.querySelector(".main__page__services__link");
//   const loader03 = document.querySelector(".button__head");
//   const loader04 = document.getElementById("svg01");
//   const loader05 = document.querySelector(".heading__text__family");

//   setTimeout(function () {
//     loader01.style.transition = "0.5s ease-in-out";
//     loader02.style.transition = "0.5s linear";
//     loader03.style.transition = "0.5s ease-in-out";
//     loader04.style.transition = "0.5s ease-in-out";
//     loader05.style.transition = "opacity 0.5s ease-in-out";
//   }, 1000);
// });
