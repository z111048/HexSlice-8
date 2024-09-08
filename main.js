import './assets/scss/all.scss';

console.log('Hello world!');

const BannerSwiper = new Swiper('.BannerSwiper', {
  initialSlide: 0, // 起始值
  loop: true, // 啟用回到起點模式
  spaceBetween: 40,
  slidesPerView: 1.2,
  centeredSlides: true,

  breakpoints: {
    992: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-n',
    prevEl: '.swiper-button-prev-n',
  },
});

const TopsalesSwiper = new Swiper('.TopsalesSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true, // 啟用回到起點模式

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-n',
    prevEl: '.swiper-button-prev-n',
  },
});

const TeacherSwiper = new Swiper('.TeacherSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true, // 啟用回到起點模式

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

const HotThemeSwiper = new Swiper('.HotThemeSwiper', {
  loop: true, // 啟用回到起點模式
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    430: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next-icon',
    prevEl: '.swiper-button-prev-icon',
  },
});
