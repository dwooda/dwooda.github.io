$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
});

const mainNav = $('#navBarNav');
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$(window).scroll(function() {
  if ($(this).scrollTop() > vh) {
    mainNav.addClass('fixed-top');
  }
  else {
    mainNav.removeClass('fixed-top');
  }
});

const jumpUp = $('#jumpUp');
jumpUp.hide();

$(window).scroll(function() {
  if ($(this).scrollTop() > vh + 80) {
    jumpUp.show("slow");
  }
  else {
    jumpUp.hide("slow");
  }
});
