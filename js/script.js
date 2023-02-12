$(document).ready(function () {
  $(".slider__content").slick({
    speed: 1000,
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/next-arrow.png" /></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          fade: false,
        },
      },
    ],
  });

  const menu = document.querySelector(".header__menu"),
    menuItem = document.querySelectorAll(".header__menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("header__menu_active");
    });
  });
});
