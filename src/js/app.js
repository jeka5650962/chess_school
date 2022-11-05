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

// ---------------------------- форма

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)

        function formValidate(form) {
            let error = 0
            let formReq = document.querySelectorAll('._req')

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index]
                formRemoveError(input)

                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input)
                        error++
                    }
                } else {
                    if (input.value === '') {
                        formAddError(input)
                        error++
                    }
                }
            }
        }

        function formAddError(input) {
            input.parentElement.classList.add('_error')
            input.classList.add('_error')
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('_error')
            input.classList.remove('_error')
        }

        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
        }
    }
})