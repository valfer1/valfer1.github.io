$(window).scroll(function(){
  var scroll = $(document).scrollTop();
  var navH = $(".head").height();
   
  if (scroll > navH) {
    $(".head").addClass("show"); 
    
  } else {
    $(".head").removeClass("show");
  }
});

var lang = navigator.language || navigator.userLanguage;

if (lang.indexOf("es") > -1 ) {
  //$(".nom h3").text("Front End Web Development");
  //$("#skill h2").text("SKILLS");
  $(".spa").css("display","inline-block");
} else {
  $(".eng").css("display","inline-block");
}