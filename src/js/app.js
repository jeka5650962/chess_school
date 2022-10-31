import * as myFunctions from "./modules/functions.js";
import * as myBurger from "./modules/burger.js";

myFunctions.isWebp();
myBurger.onBurger();

const faqBlock = document.getElementsByClassName('faq__question');

for (let i = 0; i < faqBlock.length; i++) {
    faqBlock[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}