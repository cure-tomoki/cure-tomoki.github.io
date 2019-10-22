"use strict";

function fadein(className) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var windowHeight = $(window).height();
  $(className).each(function () {
    var elemPos = $(this).offset().top;
    var scrollTop = $(window).scrollTop();

    if (scrollTop > elemPos - windowHeight + offset) {
      $(this).addClass('scrollIn');
    }
  });
}

$(function () {
  // fade in on load
  var fadein_class = '.fadeIn';
  fadein(fadein_class); // fadein on scroll

  $(window).scroll(function () {
    fadein(fadein_class, 100);
  });
});