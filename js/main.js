$(window).scroll(function(){
    $(".main-nav ul").css("opacity", 2 - $(window).scrollTop() / 300);
  });

  $(window).scroll(function(){
      $(".site-title h1").css("opacity", 2 - $(window).scrollTop() / 300);
    });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/
