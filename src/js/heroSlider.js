import Swiper from 'swiper/bundle';
export default () => {
new Swiper('.hero-slider', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    mousewheel: false,
    keyboard: true,
    slideClass: 'hero-slider__slide',
    wrapperClass: 'hero-slider__wrapper',
  
    navigation: {
      nextEl: '.hero-slider-description-buttons__item--is-next',
      prevEl: '.hero-slider-description-buttons__item--is-previous',
    },
    
    pagination: {
      el: ".hero-slider-description__pagination",
      type: "fraction",
    },
  });
}