"use strict";

function fadein(className) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var windowHeight = window.innerHeight;
  var elements = document.getElementsByClassName(className);

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elemPos = element.getBoundingClientRect().top;

    if (0 > elemPos - windowHeight + offset) {
      element.classList.add('scrollIn');
    }
  }
}

var fadein_class = 'fadeIn'; // fade in on load

window.onload = function () {
  fadein(fadein_class);
}; // fadein on scroll


window.onscroll = function () {
  fadein(fadein_class, 100);
};