import Swiper from 'swiper/bundle';
export default () => {
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    mousewheel: false,
    keyboard: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  const slide = document.querySelector('.swiper-slide');
  slide.removeAttribute("style");
}