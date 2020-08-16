const hamburgerButton = document.querySelector(".section-header-hamburger");
const hamburgerBackground = document.querySelector(".hamburger-menu-background");
const navMenu = document.querySelector(".section-header-nav");
const contactMail = document.querySelector(".section-header-mail");
const contactTel = document.querySelector(".section-header-contact");
const navLinks = document.querySelectorAll(".section-header-nav__link");
const habmurgerText = document.querySelector(".section-header-hamburger-text");
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle('active');
    contactMail.classList.toggle('active');
    contactTel.classList.toggle('active');
    document.body.classList.toggle('overflow-y');
    habmurgerText.classList.toggle('active');
    bar1.classList.toggle('active-bar1');
    bar2.classList.toggle('active-bar2');
    bar3.classList.toggle('active-bar3');
    if (navMenu.classList.contains('active') == true ) {
        hamburgerBackground.style.width = "120%";
        hamburgerBackground.style.borderRadius = "0";
    } else {
        hamburgerBackground.style.width = "0%";
        hamburgerBackground.style.borderRadius = "50%";
    }
});