export function dropMenu() {
    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
        }
    }

    let bodyElement = document.querySelector('body')

    if (isMobile.any()) {
        bodyElement.classList.add('touch')
        let arrow = document.querySelectorAll('.arrow')
        for (let i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].previousElementSibling
            let subMenu = arrow[i].nextElementSibling
            let thisArrow = arrow[i]
            thisLink.classList.add('parent')
            arrow[i].addEventListener('click', function () {
                subMenu.classList.toggle('open')
                thisArrow.classList.toggle('active')
            })
        }
    } else {
        bodyElement.classList.add('mouse')
    }
}