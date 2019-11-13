function fadein(className, offset = 0) {
  const windowHeight = window.innerHeight;
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const elemPos = element.getBoundingClientRect().top;
    if (0 > elemPos - windowHeight + offset) {
      element.classList.add('scrollIn');
    }
  }
}

const fadein_class = 'fadeIn';

// fade in on load
window.onload = function () {
  fadein(fadein_class);
};

// fadein on scroll
window.onscroll = function () {
  fadein(fadein_class, 100);
};
