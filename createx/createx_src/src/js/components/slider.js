import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

const portSlider = document.querySelector('.portfolio-section__items')

const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  centeredSlides: true,
  on: {
    init: function () {

      const activeSlide = portSlider.querySelector('.swiper-slide-active');

      const nextActiveSlide = activeSlide.nextElementSibling;

      const previousActiveSlide = activeSlide.previousElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      previousActiveSlide.classList.add('slider-visible');
    }
  },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
  //ARIA
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
  }
});

// document.querySelector('.portfolio-section__prev').addEventListener('click', () => {

//   const activeSlide = portSlider.querySelector('.swiper-slide-next');

//   document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
//     el.classList.remove('slider-visible');
//   })

//   if (activeSlide.previousElementSibling) {
//     const nextActiveSlide = activeSlide.previousElementSibling;
//     activeSlide.classList.add('slider-visible');
//     nextActiveSlide.classList.add('slider-visible');
//     previousSlide.nextElementSibling.classList.add('slider-visible');
//   }
// });

document.querySelector('.portfolio-section__next').addEventListener('click', () => {

  const activeSlide = portSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const previousActiveSlide = activeSlide.previousElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  })

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  previousActiveSlide.classList.add('slider-visible');
});

document.querySelector('.portfolio-section__prev').addEventListener('click', () => {

  const activeSlide = portSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.previousElementSibling;

  const previousActiveSlide = activeSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  })

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  previousActiveSlide.classList.add('slider-visible');
});

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
  //ARIA
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
  }
});
