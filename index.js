const familyArr = [
  "АДВОКАТИ З СІМЕЙНОГО ПРАВА ТА РОЗЛУЧЕНЬ У МІСТІ КИЇВ, УКРАЇНА",
  "КОНСУЛЬТАЦІЇ ТА ВІДЕОКОНСУЛЬТАЦІЇ ДОСТУПНІ",
  "СПРЯМОВАНІ НА ДІТЕЙ ТА ВРАХУВАННЯ ІНТЕРЕСІВ СІМ'Ї",
];

const familyArticle = document.querySelector(".heading__text__family");
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

setInterval(toggleText, 4000);
