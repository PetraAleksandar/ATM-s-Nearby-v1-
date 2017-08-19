$(".btn").click(function(){
  $(".prf").animate({fontSize: "22px"}, 150);
  $(".btn").animate({backgroundColor: "#94C3DE"}, 150);
  $(".btn").animate({backgroundColor: "#0277bd"}, 150);
  $(".prf").animate({fontSize: "20px"}, 150);
  $(".btn").prop('disabled', true);
});
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200);
  }
  else {
    $('#return-to-top').fadeOut(200);
  }
});
$('#return-to-top').click(function() {
  $('body,html').animate({
    scrollTop : 0}, 500);
});
