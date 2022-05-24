
$(document).ready(function(){
/*~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~ */


// ~~~~~~~~~~~~navbar
$(".bars_").click(function(){
  $("nav").toggle("500");
  $("body").addClass("over_");
});
$(".close_").click(function(){
  $("nav").toggle("500");
  $("body").removeClass("over_");
});
$(".li_hover").click(function(){
  $(this).children().next().slideToggle("500");
});

// ~~~~~~~~~~~~search_mobile
$(".btn_search_open").click(function(){
  $(".fixed_search").toggle("500");
  $("body").addClass("over_");
});
$(".close_search").click(function(){
  $(".fixed_search").toggle("500");
  $("body").removeClass("over_");

});
/*~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~ */
$('.slider .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
/*~~~~~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start Bestseller~~~~~~~~~~~~~~~~~~~~ */

$('.Bestseller .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  stagePadding: 1,
  autoplay:true,
  margin:30,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
/*~~~~~~~~~~~~~~~~~~end Bestseller~~~~~~~~~~~~~~~~~~~~ */

// back_top
var btn = $('.back_top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

$(window).on('scroll', function() {
  if($(window).scrollTop() > 150) {
        $("nav").addClass("fixed");
  } else {
      $("nav").removeClass("fixed");
  };
});

});

new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.8s');

// ~~~~~~~~~~~~fixsed header

var fixedBar = document.querySelector("nav"),
  prevScrollpos = $(window).scrollTop();

window.onscroll = function() {
  var o = $(window).scrollTop();
  prevScrollpos < o && prevScrollpos > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), prevScrollpos = o
}, document.documentElement.style.setProperty("--animate-duration", ".5s");

