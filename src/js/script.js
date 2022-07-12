$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: true,
    infinite: true,
    speed: 1200,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
