import "scroll-behavior-polyfill";

const nextButton = document.querySelector('.slider__button--is-next');
const previousButton = document.querySelector('.slider__button--is-previous');
const scrollItem = document.querySelector('.slider__item');
const sliderContent = document.querySelector('.content');
const style = getComputedStyle(scrollItem);
const marginRight = parseInt(style.marginRight);
const offsetWidth = scrollItem.offsetWidth;
const width = +offsetWidth + +marginRight;

console.log(width);

const scrolllLeft = () => {
    sliderContent.scrollLeft += width;
}

const scrollRight = () => {
    sliderContent.scrollLeft -= width;
}

nextButton.addEventListener('click', scrolllLeft);

previousButton.addEventListener('click', scrollRight);

