const buyButton = document.querySelector('.section-product-descripton-info__button');
const modal = document.querySelector('.modal');
const formCloseButton = document.querySelector('.form__button-close');
const modalBackground = document.querySelector('.modal-background');

buyButton.addEventListener('click', () => {
    modal.classList.toggle('active--modal');
    modalBackground.classList.toggle('active-modal--bg');
});

formCloseButton.addEventListener('click', () => {
    modal.classList.remove('active--modal');
    modalBackground.classList.remove('active-modal--bg');
});