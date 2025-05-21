$(function () {
  const swiper = new Swiper(".categoryswiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      767: {
        slidesPerView: 2, //브라우저가 768보다 클 때
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});

$(function () {
  var swiper = new Swiper(".collectionwiper", {
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      767: {
        slidesPerView: 2, //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 3, //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
      1700: {
        slidesPerView: 4, //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
    },
  });
});

$(function () {
  var swiper = new Swiper(".newsSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1700: {
        slidesPerView: 2, //브라우저가 1024보다 클 때
        spaceBetween: 1000,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(document).ready(function () {
  function initFullpage() {
    if ($(window).width() >= 1024) {
      $("#fullpage").fullpage({
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        autoScrolling: true,
        scrollHorizontally: true,
        scrollOverflow: false,
        scrollOverflowReset: true,
      });
    } else {
      fullpage_api.destroy("all");
    }
  }
  initFullpage();

  $(window).resize(function () {
    initFullpage();
  });
});

$(function () {
  $(window).resize(function () {
    var wTh = window.innerWidth;
    if (wTh < 1024) {
      $(".men,.women,.bag,.cap").show();
    }
  });
});

$(function () {
  $(window).resize(function () {
    var wTh = $(window).width();
    var aBlock = $(".popup_men").css("display") === "block";
    if (wTh > 1023 && aBlock) {
      $(".women, .bag, .cap").css({
        display: "none", // 요소를 숨김
      });
    }
  });
});
//
$(function () {
  $(window).resize(function () {
    var wTh = $(window).width();
    var aBlock = $(".popup_women").css("display") === "block";
    if (wTh > 1023 && aBlock) {
      $(".men, .bag, .cap").css({
        display: "none", // 요소를 숨김
      });
    }
  });
});
//
$(function () {
  $(window).resize(function () {
    var wTh = $(window).width();
    var aBlock = $(".popup_bag").css("display") === "block";
    if (wTh > 1023 && aBlock) {
      $(".men, .women, .cap").css({
        display: "none", // 요소를 숨김
      });
    }
  });
});
//
$(function () {
  $(window).resize(function () {
    var wTh = $(window).width();
    var aBlock = $(".popup_cap").css("display") === "block";
    if (wTh > 1023 && aBlock) {
      $(".men, .bag, .women").css({
        display: "none", // 요소를 숨김
      });
    }
  });
});
//

$(function () {
  var slidMen = 0;
  $(".men").click(function () {
    if ((slidMen === 0, window.innerWidth > 1024)) {
      $(".women,.bag,.cap").animate(
        {
          right: "-75%",
        },
        300
      );
      slidMen = 1;
    } else {
      $(".women,.bag,.cap").animate(
        {
          right: "0%",
        },
        100
      );
      slidMen = 0;
    }
  });
});
//
$(function () {
  var slidWen = 0;
  $(".women").click(function () {
    if ((slidWen === 0, window.innerWidth > 1024)) {
      $(".men,.bag,.cap").animate(
        {
          right: "-75%",
        },
        300
      );
      $(".women").animate({
        left: "0%",
      });
      slidWen = 1;
    } else {
      $(".men,.bag,.cap").animate(
        {
          right: "0%",
        },
        100
      );
      slidWen = 1;
    }
  });
});
//
$(function () {
  var slidCen = 0;
  $(".cap").click(function () {
    if ((slidCen === 0, window.innerWidth > 1024)) {
      $(".men,.bag,.women").animate(
        {
          right: "-75%",
        },
        300
      );
      $(".cap").animate({
        left: "0%",
      });
      slidWen = 1;
    } else {
      $(".men,.bag,.women").animate(
        {
          right: "0%",
        },
        100
      );
      slidCen = 1;
    }
  });
});
//
$(function () {
  var slidBen = 0;
  $(".bag").click(function () {
    if ((slidBen === 0, window.innerWidth > 1024)) {
      $(".men,.cap,.women").animate(
        {
          right: "-75%",
        },
        300
      );
      $(".bag").animate({
        left: "0%",
      });
      slidWen = 1;
    } else {
      $(".men,.cap,.women").animate(
        {
          right: "0%",
        },
        100
      );
      slidBen = 1;
    }
  });
});

$(function () {
  $(".men").click(function () {
    if (window.innerWidth > 1024) {
      $(this).siblings(".popup_men").fadeToggle(200);
      // $(this).siblings('.women,.bag,.cap').toggle()
      if ($(".women,.bag,.cap").css("display") == "block") {
        $(".women,.bag,.cap").hide();
      } else {
        $(".women,.bag,.cap").show(500).css({
          "transition-duration": "0.5 s",
        });
      }
    } else {
      $(this).siblings(".popup_men").stop().slideToggle();
    }
  });
});

$(function () {
  $(".women").click(function () {
    if (window.innerWidth > 1024) {
      $(this).siblings(".popup_women").fadeToggle(200);
      // $(this).siblings('.women,.bag,.cap').toggle()
      if ($(".men,.bag,.cap").css("display") == "block") {
        $(".men,.bag,.cap").hide();
      } else {
        $(".men,.bag,.cap").show(500).css({
          "transition-duration": "0.5 s",
        });
      }
    } else {
      $(this).siblings(".popup_women").stop().slideToggle();
    }
  });
});

$(function () {
  $(".cap").click(function () {
    if (window.innerWidth > 1024) {
      $(this).siblings(".popup_cap").fadeToggle(200);
      // $(this).siblings('.women,.bag,.cap').toggle()
      if ($(".men,.bag,.women").css("display") == "block") {
        $(".men,.bag,.women").hide();
      } else {
        $(".men,.bag,.women").show(500).css({
          "transition-duration": "0.5 s",
        });
      }
    } else {
      $(this).siblings(".popup_cap").stop().slideToggle();
    }
  });
});

$(function () {
  $(".bag").click(function () {
    if (window.innerWidth > 1024) {
      $(this).siblings(".popup_bag").fadeToggle(200);
      // $(this).siblings('.women,.bag,.cap').toggle()
      if ($(".men,.cap,.women").css("display") == "block") {
        $(".men,.cap,.women").hide();
      } else {
        $(".men,.cap,.women").show(500).css({
          "transition-duration": "0.5 s",
        });
      }
    } else {
      $(this).siblings(".popup_bag").stop().slideToggle();
    }
  });
});

$(function () {
  $("header").on("mouseenter", function () {
    if (window.innerWidth > 1024) {
      $(".gnb>li>ul").stop().slideDown(0);
      $(".headercover").stop().slideDown(0);
    }
  });

  $("header").on("mouseleave", function () {
    if (window.innerWidth > 1024) {
      $(".gnb>li>ul").stop().slideUp(0);
      $(".headercover").stop().slideUp(0);
    }
  });
});

$(function () {
  $(".gnb>li").click(function () {
    if (window.innerWidth < 1024) {
      $(this).children("ul").stop().slideToggle();
    }
  });
});

$(function () {
  var navAni = 0;
  $(".m_btn").on("click", function () {
    if (navAni === 0) {
      $("nav").animate(
        {
          right: "0%",
        },
        300
      );
      navAni = 1;
    }
  });
  $(".close_btn").on("click", function () {
    if (navAni === 1) {
      $("nav").animate(
        {
          right: "-58.333%",
        },
        300
      );
      navAni = 0;
    }
  });
  $(window).on("resize", function () {
    var windowWidth = $(window).width();
    if (navAni === 1 && windowWidth >= 1024) {
      $("nav").animate({ right: "-58.333%" }, 300);
      navAni = 0;
    }
  });
});
