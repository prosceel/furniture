import Swiper from 'swiper/bundle';
export default () => {
new Swiper ('.benefits-slider', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    slidesPerView: 3,
    mousewheel: false,
    keyboard: true,
    slideClass: 'benefits-slider__slide',
    wrapperClass: 'benefits-slider__wrapper',

  
    navigation: {
      nextEl: '.benefits-slider__button--is-next',
      prevEl: '.benefits-slider__button-is-prev',
    },
})
}