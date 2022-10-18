const strip = document.querySelector(".strip");
const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
burgerIcon.addEventListener("click", burgerMenuClick)


function burgerMenuClick() {
    rotateMainStrips();
    rotateStrips();
    burgerMenu.classList.toggle('burger-menu-show');
}

function rotateMainStrips() {
    strip.classList.toggle('strip-rotate-45');
}

function rotateStrips() {

    let valueAfter = strip.style.getPropertyValue('--after');
    let valueAfterTop = strip.style.getPropertyValue('--aftertop');
    let valueBeforeTop = strip.style.getPropertyValue('--beforetop');

    valueAfter = valueAfter === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
    valueBeforeTop = valueBeforeTop === '0px' ? '-8px' : '0px';
    valueAfterTop = valueAfterTop === '0px' ? '8px' : '0px';

    strip.style.setProperty('--after', valueAfter);
    strip.style.setProperty('--beforetop', valueBeforeTop);
    strip.style.setProperty('--aftertop', valueAfterTop);
}