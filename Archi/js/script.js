
var swiperMySwiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".mySwiper5 .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".mySwiper5 .swiper-button-next",
    prevEl: ".mySwiper5 .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});

var swiperAccreditations = new Swiper(".accreditations-swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".accreditations-swiper .swiper-pagination",
    clickable: true,
  },
//   navigation: {
//     nextEl: ".accreditations-swiper .swiper-button-next",
//     prevEl: ".accreditations-swiper .swiper-button-prev",
//   },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: false,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1080: {
      slidesPerView: 6,
      spaceBetween: 30
    }

  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});


var swiper = new Swiper(".Placements-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

var facilitiesSwiper = new Swiper(".facilities-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});


