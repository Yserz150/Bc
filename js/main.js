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
var block_show = null;
var setting = false
function scrollTracking(){

  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var et = $('.about').offset().top;
  var eh = $('.about').outerHeight();
  if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh))
    {
      if((200-((wt+wh-et)/eh*100)>0)&&(200-(wt+wh-et)/eh*100>100))
        {
        	if ($(window).width() >= '950')
  			{
            $("header").css("background","linear-gradient(to bottom, #1d1d1d "+(100-((wt+wh-et)/eh*100))+"%,#1d1d1d 0%)");
        		}
        		else{
        			$("#nav_bar nav a.active").removeAttr( 'style' );
            	$("#nav_bar nav a").removeAttr( 'style' );
            	$("#nav_bar ul li a:hover").removeAttr( 'style' );
            	$("#nav_bar nav a").removeAttr( 'style' );
            	$("#nav_bar nav a i.icon-prof").removeAttr( 'style' );
            	$(".logo").removeAttr( 'style' );
        		}
            if((100-((wt+wh-et)/eh*100))<38)
            {
            	if ($(window).width() >= '950')
  			      {
            	$("#nav_bar nav a.active").css("color","#000000");
            	$("#nav_bar nav a").css("color","#000000");
            	$("#nav_bar ul li a:hover").css("color","#000000");
            	$("#nav_bar nav a").css("color","#000000");
            	$("#nav_bar nav a i.icon-prof").css("color","#08fdd8");
            	$(".logo").css("color","#000000");
              $(".skill-link").removeClass('active')
            	}
            }
            else
            {
            	$("#nav_bar nav a.active").removeAttr( 'style' );
            	$("#nav_bar nav a").removeAttr( 'style' );
            	$("#nav_bar ul li a:hover").removeAttr( 'style' );
            	$("#nav_bar nav a").removeAttr( 'style' );
            	$("#nav_bar nav a i.icon-prof").removeAttr( 'style' );
              $(".logo").removeAttr( 'style' );
            }
        }
        else
        {
        	if ($(window).width() >= '950')
  		{
          if(((wt+wh-et)/eh*100-100)>95){
            $("header").css("background","linear-gradient(to bottom, white "+100+"%,#1d1d1d 0%)");
            }
            else
            {
              $("header").css("background","linear-gradient(to bottom, white "+((wt+wh-et)/eh*100-100)+"%,#1d1d1d 0%)");
            }
  	      }

        }
      block_show = true;
    }
    else {
    	if ($(window).width() >= '950')
  {
      if (block_show == null || block_show == true) {
        $("header").css("background","linear-gradient(to top, #1d1d1d "+100+"%,white 0%)");
      }
      block_show = false;
    }
  }
  if((100-((wt+wh-et)/eh*100))<=0)
  {
    if((wt+wh-et)/eh*100-100>35)
    {
      /*if ($(window).width() >= '950')
      {
        $("#nav_bar nav a.active").removeAttr( 'style' );
        $("#nav_bar nav a").removeAttr( 'style' );
        $("#nav_bar ul li a:hover").removeAttr( 'style' );
        $("#nav_bar nav a").removeAttr( 'style' );
        $("#nav_bar nav a i.icon-prof").removeAttr( 'style' );
        $(".logo").removeAttr( 'style' );
        
      }*/
      if(setting==false){
       $(".home-link").removeClass('active')
       $(".skill-link").toggleClass('active')
       setting=true
      }
    }
    else
    {
      if ($(window).width() >= '950')
        {
        if(setting==true)
        {
          $(".skill-link").removeClass('active')
          $(".home-link").toggleClass('active')
          setting=false
        }
        /*$("#nav_bar nav a.active").css("color","#000000");
        $("#nav_bar nav a").css("color","#000000");
        $("#nav_bar ul li a:hover").css("color","#000000");
        $("#nav_bar nav a").css("color","#000000");
        $("#nav_bar nav a i.icon-prof").css("color","#08fdd8");
        $(".logo").css("color","#000000");*/
        }
    }
  }
}