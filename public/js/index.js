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
  const fadeinClass = '.fadeIn';
  fadein(fadeinClass);

  // fadein on scroll
  $(window).scroll(function (){
    fadein(fadeinClass, 100);
  });


  // fade out profile image on scroll
  const targetElm = '#profile-img';
  const triggerElm = '#content-right';
  const triggerInitialTop = 400;
  const maxFade = 10;

  $(targetElm).css('transition', `0.1s`);
  $(window).scroll(function (){
    const elemPos = $(triggerElm).offset().top;
    const scrollTop = $(window).scrollTop();
    const currentTop = elemPos - scrollTop;
    let fade = (triggerInitialTop - currentTop) * maxFade / triggerInitialTop;
    if (fade < 2) { fade = 0; }
    if ( maxFade > fade ) {
      // console.log(fade)
      $(targetElm).css('filter', `blur(${fade}px)`);
    }
  });
});
