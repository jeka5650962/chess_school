import * as myFunctions from "./modules/functions.js";
import * as myBurger from "./modules/burger.js";

myFunctions.isWebp();
myBurger.onBurger();

// ---------------------------- faqBlock и faqContent

const faqQuestion = document.getElementsByClassName('faq__question');

for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}