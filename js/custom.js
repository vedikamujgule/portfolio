
var words = [
    "Front End Developer",
    "Angular Developer",
    "UI/UX enthusiast",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;


var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});



let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = "HTML " + counter + "%";
  }
}, 30);




(function ($) {
  "use strict";

  // market slide js
  $(".product-main").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // Review slide js
  $(".review-main").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // Blog slide js
  $(".blog-main").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //animation scroll js
  var html_body = $("html, body");
  $(".navbar a , .scroll-down a , .backtotop a").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 75,
          },
          600
        );
        return false;
      }
    }
  });
  // preloader
  $(window).on("load", function () {
    $(".preloader").delay(1000).fadeOut(1000);
  });
  // Closes responsive menu when a scroll link is clicked
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // smooth scroll js
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var stikey = $(".sticky-top");

    if (scrolling >= 100) {
      $(stikey).addClass("nav-bg");
    } else {
      $(stikey).removeClass("nav-bg");
    }
    if (scrolling > 280) {
      $(".backtotop").fadeIn(500);
    } else {
      $(".backtotop").fadeOut(500);
    }
  });
  //scorllspy js
  $("body").scrollspy({
    target: ".navbar",
    offset: 70,
  });
})(jQuery);





let elementsCC = document.querySelectorAll('.origin-center');
 
elementsCC.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
  
  element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');
 
elementsTL.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //top left
  let resultTL = x + 'px ' + y + 'px';
  
  element.style.setProperty("transform-origin", resultTL)
}); // forEach