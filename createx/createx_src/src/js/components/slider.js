import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

const portSlider = document.querySelector('.portfolio-section__items')
const servPortSlider = document.querySelector('.services-portfolio__items')

if (servPortSlider) {
  const portfolioSlider = new Swiper(servPortSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    centeredSlides: true,
    on: {
      init: function () {

        const activeSlide = servPortSlider.querySelector('.swiper-slide-active');

        const nextActiveSlide = activeSlide.nextElementSibling;

        const previousActiveSlide = activeSlide.previousElementSibling;

        activeSlide.classList.add('slider-visible');
        nextActiveSlide.classList.add('slider-visible');
        previousActiveSlide.classList.add('slider-visible');
      }
    },
    navigation: {
      nextEl: '.services-portfolio__next',
      prevEl: '.services-portfolio__prev',
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

  // document.querySelector('.services-portfolio__prev').addEventListener('click', () => {

  //   const activeSlide = portSlider.querySelector('.swiper-slide-next');

  //   document.querySelectorAll('.services-portfolio__items .swiper-slide').forEach(el => {
  //     el.classList.remove('slider-visible');
  //   })

  //   if (activeSlide.previousElementSibling) {
  //     const nextActiveSlide = activeSlide.previousElementSibling;
  //     activeSlide.classList.add('slider-visible');
  //     nextActiveSlide.classList.add('slider-visible');
  //     previousSlide.nextElementSibling.classList.add('slider-visible');
  //   }
  // });

  document.querySelector('.services-portfolio__next').addEventListener('click', () => {

    const activeSlide = servPortSlider.querySelector('.swiper-slide-active');

    const nextActiveSlide = activeSlide.nextElementSibling;

    const previousActiveSlide = activeSlide.previousElementSibling;

    document.querySelectorAll('.services-portfolio__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    })

    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    previousActiveSlide.classList.add('slider-visible');
  });

  document.querySelector('.services-portfolio__prev').addEventListener('click', () => {

    const activeSlide = servPortSlider.querySelector('.swiper-slide-active');

    const nextActiveSlide = activeSlide.previousElementSibling;

    const previousActiveSlide = activeSlide.nextElementSibling;

    document.querySelectorAll('.services-portfolio__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    })

    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    previousActiveSlide.classList.add('slider-visible');
  });
}

if (portSlider) {
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
}



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

// const portInnerSlider = document.querySelector('.portfolio-inner-slider');

// if (portInnerSlider) {
//     const portfolioInnerSlider = new Swiper('.portfolio-inner-nav', {
//       spaceBetween: 20,
//       slidesPerView: 10,
//       freeMode: true,
//       watchSlidesProgress: true,
//     });
//     const portfolioInnerNav = new Swiper(portInnerSlider, {
//       spaceBetween: 20,
//       slidesPerView: 1,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       thumbs: {
//         swiper: portfolioInnerSlider,
//       },
//     });
// }
const portInnerSlider = document.querySelector('.portfolio-inner-slider');

if (portInnerSlider) {
    const portfolioInnerSlider = new Swiper(portInnerSlider, {
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".portfolio-inner__next",
        prevEl: ".portfolio-inner__prev",
      },
    });
}

const historySlider = document.querySelector('.history-slider');

if (historySlider) {
  const aboutSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".about-history__next",
      prevEl: ".about-history__prev",
    },
  });

  aboutSlider.on('slideChange', function () {
    console.log(aboutSlider.realIndex);

    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active')
    })

    document.querySelector(`.history-nav__btn[data-index="${aboutSlider.realIndex}"]`).classList.add('history-nav__btn--active')
  });

  const historyBtns = document.querySelectorAll('.history-nav__btn');

  historyBtns.forEach((el, idx)  => {
    el.setAttribute('data-index', idx);

    el.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active')
      })

      e.currentTarget.classList.add('history-nav__btn--active')

      aboutSlider.slideTo(index);
    });
  });
}
