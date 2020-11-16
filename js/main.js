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
var backgroundcolor = "black"
var change = false;
function scrollTracking() {
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

        $('.home-link').toggleClass('active');
        $(".logo").removeAttr( 'style' );
        $(".logo span").removeAttr( 'style' );
        $('.home-link').removeAttr( 'style' );
        $(".about-link").removeAttr( 'style' );
        $(".skill-link").removeAttr( 'style' );
        $(".work-link").removeAttr( 'style' );
        $(".contact-link").removeAttr( 'style' );

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
        $('.about-link').toggleClass('active');
        $('.logo').css('color','#a5a5a5');
        $(".logo span").css('color','#f26b38');
        $('.home-link').css('color','#a5a5a5');
        $('.about-link').css('color','#f26b38');
        $(".skill-link").css('color','#a5a5a5');
        $(".work-link").css('color','#a5a5a5');
        $(".contact-link").css('color','#a5a5a5');

        $('.home-link').removeClass('active');
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
        $('.skill-link').toggleClass('active');
        
        $('.logo').css('color','#a5a5a5');
        $(".logo span").css('color','#f26b38');
        $('.about-link').css('color','#a5a5a5');
        $('.home-link').css('color','#a5a5a5');
        $(".skill-link").css('color','#f26b38');
        $(".work-link").css('color','#a5a5a5');
        $(".contact-link").css('color','#a5a5a5');

        $('.home-link').removeClass('active');
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
        $('.work-link').toggleClass('active');

        $(".logo").css('color','#a5a5a5');
        $(".logo span").css('color','#f26b38');
        $('.about-link').css('color','#a5a5a5');
        $('.home-link').css('color','#a5a5a5');
        $(".skill-link").css('color','#a5a5a5');
        $(".work-link").css('color','#f26b38');
        $(".contact-link").css('color','#a5a5a5');

        $('.home-link').removeClass('active');
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

        $('.contact-link').toggleClass('active');
        $(".logo").removeAttr( 'style' );
        $(".logo span").removeAttr( 'style' );
        $('.home-link').removeAttr( 'style' );
        $(".about-link").removeAttr( 'style' );
        $(".skill-link").removeAttr( 'style' );
        $(".work-link").removeAttr( 'style' );
        $(".contact-link").removeAttr( 'style' );

        $('.home-link').removeClass('active');
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
        $('.home-link').toggleClass('active');

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
        $('.about-link').toggleClass('active');

        $('.home-link').removeClass('active');
        $(".skill-link").removeClass('active');
        $(".work-link").removeClass('active');
        $(".contact-link").removeClass('active');
      }
    }
    else{
    if (wt + wh >= et2+eh2*0.1 && wt + wh - eh2 * 2 <= et2 + (wh - eh2*1.3))
    {
      if(!$(".skill-link").hasClass("active"))
      {
        $('.skill-link').toggleClass('active');

        $('.home-link').removeClass('active');
        $(".about-link").removeClass('active');
        $(".work-link").removeClass('active');
        $(".contact-link").removeClass('active');
      }
    }
    else{
    if (wt + wh >= et3+eh3*0.3 && wt + wh - eh3 * 2 <= et3 + (wh - eh3*2))
    {
      if(!$(".work-link").hasClass("active"))
      {
        $('.work-link').toggleClass('active');

        $('.home-link').removeClass('active');
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
        $('.contact-link').toggleClass('active');

        $('.home-link').removeClass('active');
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

$(".btn_send").on("click", function(){
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var subj = $("#subj").val().trim();
  var message = $("#message").val().trim();
  var type = false;

  if (email.search('@')==-1){
    type=true;
    if(!$("#email").hasClass("error-border"))
    {
      $('#email').toggleClass('error-border');
    }
  }
  else
  {
    if($("#email").hasClass("error-border"))
    {
      $("#email").removeClass('error-border');
    }
  }
  if (message.length<5){
    type=true;
    if(!$("#message").hasClass("error-border"))
    {
      $('#message').toggleClass('error-border');
    }
  }
  else
  {
    if($("#message").hasClass("error-border"))
    {
      $("#message").removeClass('error-border');
    }
  }
  if(type){
    alertify.error('Пожалуйста, заполните все поля');
  }
  else{
    $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: { 'name':name, 'email':email, 'subj':subj,'message':message },
    dataType: 'html',
    beforeSend: function(){
      $("#sendMail").prop("disabled",true);
    },
    success: function(data){
      if(data==1){
        alertify.notify('Успеншо отправили письмо, в скором времени с вами свяжемся!', 'success', 5, function(){});
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subj').value = '';
        document.getElementById('message').value = '';
      }
      else{
        alertify.error('Не удалось отправить сообщение. Пожалуйста, свяжитесь со мной напрямую example@gmail.com');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subj').value = '';
        document.getElementById('message').value = '';
      }
    },
    error: function(data){
      if(data==1){
        alertify.error('Не удалось отправить сообщение. Пожалуйста, свяжитесь со мной напрямую example@gmail.com');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subj').value = '';
        document.getElementById('message').value = '';
      }
      else{
        alertify.error('Не удалось отправить сообщение. Пожалуйста, свяжитесь со мной напрямую example@gmail.com');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subj').value = '';
        document.getElementById('message').value = '';
        }
    }

  });




  }
});
var header=0
if ($(window).width() >= '950'){
    header=0
}
if ($(window).width() <= '950'){
    header=60
}
if ($(window).width() <= '530'){
    header=120
}

$( ".home-link" ).click(function() {
  if ($(window).width() >= '950'){
    header=0
  }
  if ($(window).width() <= '950'){
    header=60
  }
  if ($(window).width() <= '530'){
    header=120
  }
  $("html, body").animate({
          scrollTop: $('.home').offset().top-header},
          {
          duration: 600,
          easing: "swing"
        });
        return false;
})

$( ".about-link" ).click(function() {
    if ($(window).width() >= '950'){
      header=0
    }
    if ($(window).width() <= '950'){
      header=60
    }
    if ($(window).width() <= '530'){
      header=120
    }
      if($(window).width() >= '950')
      {
        $("html, body").animate({
              scrollTop: $('.about').offset().top-header},
              {
              duration: 600,
              easing: "swing"
            });
            return false;
      }
      else{
        if($(window).width() <= '950')
      {
        $("html, body").animate({
              scrollTop: $('.about-mobile').offset().top-header},
              {
              duration: 600,
              easing: "swing"
            });
            return false;
      }
      }
    });



$( ".skill-link" ).click(function() {
  if ($(window).width() >= '950'){
      header=0
    }
  if ($(window).width() <= '950'){
      header=60
    }
  if ($(window).width() <= '530'){
      header=120
    }
    $("html, body").animate({
          scrollTop: $('.skills').offset().top-header},
          {
          duration: 600,
          easing: "swing"
        });
        return false;
  });


$( ".work-link" ).click(function() {
  if ($(window).width() >= '950'){
      header=0
    }
  if ($(window).width() <= '950'){
      header=60
    }
  if ($(window).width() <= '530'){
      header=120
    }
    $("html, body").animate({
          scrollTop: $('.my_work').offset().top-header},
          {
          duration: 600,
          easing: "swing"
        });
        return false;
});


$( ".contact-link" ).click(function() {
  if ($(window).width() >= '950'){
      header=0
    }
  if ($(window).width() <= '950'){
      header=60
    }
  if ($(window).width() <= '530'){
      header=120
    }
        $("html, body").animate({
          scrollTop: $('.contact').offset().top-header},
          {
          duration: 600,
          easing: "swing"
        });
        return false;
});
