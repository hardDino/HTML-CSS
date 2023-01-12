import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.coach__slider', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  scrollbar: {
    el: '.coach__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.coach__slider-btn--next',
    prevEl: '.coach__slider-btn--prev',
  },
});
