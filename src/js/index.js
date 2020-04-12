// fade in sections
const fadein_class = 'fadeIn';
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
// fade in on load
window.onload = function () {
  fadein(fadein_class);
};
// fadein on scroll
window.onscroll = function () {
  fadein(fadein_class, 100);
};



document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      target.scrollIntoView();
      target.focus();
      history.pushState(null, null, href);
    });
  });
