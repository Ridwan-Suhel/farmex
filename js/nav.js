// autohide nav on scroll
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to body (if necessary)
  navbar_height = document.querySelector('.top-header').offsetHeight;
  document.body.style.paddingTop = navbar_height + 0;

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if end

}); 
// autohide nav scroll end



//if u don't want auto hide use this code as a sticky menu

// sticky menu 
// $(window).on('scroll', function () {
//   var scroll = $(window).scrollTop();
//   if (scroll < 250) {
//     $(".header-sticky").removeClass("top-header"); //use 'header-sticky' class on your main header
//   } else {
//     $(".header-sticky").addClass("top-header");
//   }
// });



// toggle bar animation // use this code for creating 'X'
const toggle_bar = document.querySelector('.toggle-bar')
let menuOpen = false

toggle_bar.addEventListener('click', () => {
  if (!menuOpen){
    toggle_bar.classList.add('open');
    menuOpen = true;
  } else {
    toggle_bar.classList.remove('open');
    menuOpen = false;
  }
});



//on click & on scroll navbar hide
let menu = document.querySelector('.toggle-bar');
let main_navbar = document.querySelector('.main-navbar');


//this code will show the disappear navbar. when there will be a 'active' class it will visible/block/clip path by css code
menu.addEventListener('click', () =>{
    main_navbar.classList.toggle('active');
});

window.onscroll = () =>{
    toggle_bar.classList.remove('open'); //toggle_bar is a var that i created above (when worked on toggle bar animation)
    menuOpen = false;
    main_navbar.classList.remove('active');
}



// use jquery here
(function ($) {
"use strict";

//for menu active class
$('.main-navbar ul li').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
});

})(jQuery);


