const hamburgerButton = document.querySelector(".section-header-hamburger");
const hamburgerBackground = document.querySelector(".hamburger-menu-background");
const navMenu = document.querySelector(".section-header-nav");
const contactMail = document.querySelector(".section-header-mail");
const contactTel = document.querySelector(".section-header-contact");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle('active');
    contactMail.classList.toggle('active');
    contactTel.classList.toggle('active');
    if (navMenu.classList.contains('active') == true ) {
        hamburgerBackground.style.width = "100%";
    } else {
        hamburgerBackground.style.width = "0%";
    }
})