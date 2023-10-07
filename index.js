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

// CAROUSEL //

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

const headerChange = document.querySelector(".header-change");
const headerChangeBot = document.querySelector(".header-change-bot");
const midChange = document.querySelector(".carousel-container-text");
const footerChange = document.querySelector(".footer-change");

function changeFirstText() {
  headerChange.innerHTML = "Я ПРОСТО ХОТІЛА ПОДЯКУВАТИ ВАМ";
  headerChangeBot.innerHTML =
    "за роботу, яку ви зробили, і за вашу терпимість.";
  midChange.innerHTML =
    "Я просто хотіла подякувати вам за роботу, яку ви зробили, і за вашу терпимість. З самого початку ви розуміли, що потрібно зробити з точки зору закону. У вас було велике серце. Ви також розуміли підхід до мене...";
  footerChange.innerHTML = "ГАННА";
}

function changeSecondText() {
  headerChange.innerHTML = "ДУЖЕ РЕКОМЕНДУЮ";
  headerChangeBot.innerHTML =
    "дуже рекомендую їх всім, у кого є питання сімейного права.";
  midChange.innerHTML =
    'Я найняла АБ "Каленський та партнери" ще в жовтні через те, що мій колишній чоловік не виплачував аліменти. Після цього аліменти начали приходити на мене і моїх дітей...';
  footerChange.innerHTML = "ЛІЗА";
}

function changeThirdText() {
  headerChange.innerHTML = "МИ ВІДЧУВАЄМО, ЩО ПРО НАС ТУРБУЮТЬСЯ";
  headerChangeBot.innerHTML = "те, що насправді краще для моїх дітей.";
  midChange.innerHTML =
    'Нам порекомендували АБ "Каленський та партнери", зокрема Каленського Владислава, другом після виснажливої трьохрічної битви за дітей. Нарешті я можу бути разом в моїми дітьми...';
  footerChange.innerHTML = "МАРІЯ";
}

firstButton.addEventListener("click", changeFirstText);
secondButton.addEventListener("click", changeSecondText);
thirdButton.addEventListener("click", changeThirdText);
// CAROUSEL //
