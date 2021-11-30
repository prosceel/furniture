import Swiper from 'swiper/bundle';
export default () => {
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    slidesPerView: 3,
    mousewheel: true,
    keyboard: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}