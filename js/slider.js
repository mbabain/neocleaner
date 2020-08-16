'use strick';
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = document.querySelectorAll('.slider-item').length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `261px`;
});

btnNext.addEventListener('click', () => {
    let itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

    btnPrev.classList.remove('active');

    setPositions();
    checkBtnNext();
});

btnPrev.addEventListener('click', () => {
    checkBtnPrev();
    let itemLeft = Math.abs(position) / itemWidth;

    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

    btnNext.classList.remove('active');

    setPositions();
});

const setPositions = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkBtnNext = () => {
    if (position == -522) {
        btnNext.classList.add('active');
    }
};

const checkBtnPrev = () => {
    if (position == 0) {
        btnPrev.classList.add('active');
    }
};