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
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      1210: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },

  
    navigation: {
      nextEl: '.benefits-slider__button--is-next',
      prevEl: '.benefits-slider__button-is-prev',
    },
})
}