"use strict";

// fade in sections
var fadein_class = 'fadeIn';

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
} // fade in on load


window.onload = function () {
  fadein(fadein_class);
}; // fadein on scroll


window.onscroll = function () {
  fadein(fadein_class, 100);
};

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    var target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView();
    target.focus();
    history.pushState(null, null, href);
  });
});