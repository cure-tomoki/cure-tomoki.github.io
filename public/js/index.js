function fadein(className, offset = 0) {
  const windowHeight = $(window).height();
  $(className).each(function(){
    const elemPos = $(this).offset().top;
    const scrollTop = $(window).scrollTop();
    if (scrollTop > elemPos - windowHeight + offset){
      $(this).addClass('scrollIn');
    }
  });
}

$(function(){
  // fade in on load
  const fadein_class = '.fadeIn';
  fadein(fadein_class);

  // fadein on scroll
  $(window).scroll(function (){
    fadein(fadein_class, 100);
  });
});
