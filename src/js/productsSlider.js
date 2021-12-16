import Swiper from 'swiper/bundle';
import debounce from 'lodash/debounce';

const enableDisableSlider = (swiperInitiator) => {
  const swiperNode = document.querySelector('.categories-products');
  const isSwiperInitiated = swiperNode.classList.contains('swiper-initialized');

  if (window.innerWidth > 767 && isSwiperInitiated) {
    swiperNode.swiper.destroy();

    return;
  }

  if (window.innerWidth < 768 && !isSwiperInitiated) {
    swiperInitiator();

    return;
  }
};

export default () => {
  const swiperInitiator = () => {
    return new Swiper('.categories-products', {
      slidesPerView: 1,
      spaceBetween: 15,
      direction: 'horizontal',
      loop: false,
      mousewheel: false,
      keyboard: true,
      slideClass: 'categories-products__item',
      wrapperClass: 'categories-products__wrapper',

      pagination: {
        el: '.categories-products__pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });
  };

  enableDisableSlider(swiperInitiator);

  window.addEventListener(
    'resize',
    debounce(() => {
      enableDisableSlider(swiperInitiator);
    }, 50)
  );
};
