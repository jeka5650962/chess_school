import * as myFunctions from "./modules/functions.js";
import * as myBurger from "./modules/burger.js";
import * as myForm from "./modules/form.js";
import * as myPopup from "./modules/popup.js";
import * as myDropMenu from "./modules/drop-menu.js";

myFunctions.isWebp();
myBurger.onBurger();
myForm.form();
myPopup.popup();
myDropMenu.dropMenu();

// ---------------------------- faqBlock и faqContent ----------------------------

const faqQuestion = document.getElementsByClassName('faq__question');

for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}