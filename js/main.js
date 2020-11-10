$(document).ready(function(){
	$('.fa').click(function(e){
		$('.en').toggleClass('show');
    e.preventDefault();
	});
});
$(window).scroll(function(){
  scrollTracking();
});
  
$(document).ready(function(){ 
  scrollTracking();
});

function scrollTracking()
{
  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var et = $('.home').offset().top;
  var eh = $('.home').outerHeight();
  var et1 = $('.about').offset().top;
  var eh1 = $('.about').outerHeight();
  var et2 = $('.skills').offset().top;
  var eh2 = $('.skills').outerHeight();
  var et3 = $('.my_work').offset().top;
  var eh3 = $('.my_work').outerHeight();
  var et4 = $('.contact').offset().top;
  var eh4 = $('.contact').outerHeight();

  var et5 = $('.about-mobile').offset().top;
  var eh5 = $('.about-mobile').outerHeight();

  if ($(window).width() >= '950')
{
  if (wt + wh >= et+eh*0.4 && wt + wh - eh * 2 <= et + (wh - eh*1.3))
  {
    if(!$(".home-link").hasClass("active"))
    {
      $('.home-link').toggleClass('active')

      $(".about-link").removeClass('active');
      $(".skill-link").removeClass('active');
      $(".work-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et1+eh1*0.4 && wt + wh - eh1 * 2 <= et1 + (wh - eh1*1.3))
  {
    if(!$(".about-link").hasClass("active"))
    {
      $('.about-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".skill-link").removeClass('active');
      $(".work-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et2+eh2*0.7 && wt + wh - eh2 * 2 <= et2 + (wh - eh2*1.5))
  {
    if(!$(".skill-link").hasClass("active"))
    {
      $('.skill-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".about-link").removeClass('active');
      $(".work-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et3+eh3*0.3 && wt + wh - eh3 * 2 <= et3 + (wh - eh3*1.9))
  {
    if(!$(".work-link").hasClass("active"))
    {
      $('.work-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".about-link").removeClass('active');
      $(".skill-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else
  {
  if (wt + wh >= et4+eh4*0.3 && wt + wh - eh4 * 2 <= et4 + (wh - eh4*1.3))
  {
    if(!$(".contact-link").hasClass("active"))
    {
      $('.contact-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".about-link").removeClass('active');
      $(".skill-link").removeClass('active');
      $(".work-link").removeClass('active');
    }
  }
  }
  }
  }
  }
}
else
{
  if (wt + wh >= et+eh*0.4 && wt + wh - eh * 2 <= et + (wh - eh*1.3))
  {
    if(!$(".home-link").hasClass("active"))
    {
      $('.home-link').toggleClass('active')

      $(".about-link").removeClass('active');
      $(".skill-link").removeClass('active');
      $(".work-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et5+eh5*0.4 && wt + wh - eh5 * 2 <= et5 + (wh - eh5*0.9))
  {
    if(!$(".about-link").hasClass("active"))
    {
      $('.about-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".skill-link").removeClass('active');
      $(".work-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et2+eh2*0.25 && wt + wh - eh2 * 2 <= et2 + (wh - eh2*1.3))
  {
    if(!$(".skill-link").hasClass("active"))
    {
      $('.skill-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".about-link").removeClass('active');
      $(".work-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et3+eh3*0.3 && wt + wh - eh3 * 2 <= et3 + (wh - eh3*2.35))
  {
    if(!$(".work-link").hasClass("active"))
    {
      $('.work-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".about-link").removeClass('active');
      $(".skill-link").removeClass('active');
      $(".contact-link").removeClass('active');
    }
  }
  else{
  if (wt + wh >= et4+eh4*0.3 && wt + wh - eh4 * 2 <= et4 + (wh - eh4*1.3))
  {
     if(!$(".contact-link").hasClass("active"))
    {
      $('.contact-link').toggleClass('active')

      $('.home-link').removeClass('active')
      $(".about-link").removeClass('active');
      $(".skill-link").removeClass('active');
      $(".work-link").removeClass('active');
    }
  }
}
}
}
}
}

}

$(window).scroll(function(){
  scrollTracking();
});
  
$(document).ready(function(){ 
  scrollTracking();
});
