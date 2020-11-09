$(document).ready(function(){
	$('.fa').click(function(){
		$('.en').toggleClass('show');
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
  if (wt + wh >= et+eh*0.4 && wt + wh - eh * 2 <= et + (wh - eh*1.3))
  {
    $('#console').html('Блок home в области видимости');
  }
  if (wt + wh >= et1+eh1*0.4 && wt + wh - eh1 * 2 <= et1 + (wh - eh1*1.3))
  {
    $('#console').html('Блок about в области видимости');
  }
  if (wt + wh >= et2+eh2*0.4 && wt + wh - eh2 * 2 <= et2 + (wh - eh2*1.3))
  {
    $('#console').html('Блок skills в области видимости');
  }
  if (wt + wh >= et3+eh3*0.4 && wt + wh - eh3 * 2 <= et3 + (wh - eh3*1.3))
  {
    $('#console').html('Блок my_work в области видимости');
  }
  if (wt + wh >= et4+eh4*0.3 && wt + wh - eh4 * 2 <= et4 + (wh - eh4*1.3))
  {
    $('#console').html('Блок contact в области видимости');
  }
}

$(window).scroll(function(){
  scrollTracking();
});
  
$(document).ready(function(){ 
  scrollTracking();
});
