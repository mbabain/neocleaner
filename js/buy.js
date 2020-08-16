const buyButton = document.querySelector('.section-product-descripton-info__button');
const modal = document.querySelector('.modal');
const formCloseButton = document.querySelector('.form__button-close');

buyButton.addEventListener('click', () => {
    modal.classList.toggle('active--modal');
});

formCloseButton.addEventListener('click', () => {
    modal.classList.remove('active--modal');
});