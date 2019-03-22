// Small screen toggle menu
$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// // On scroll event
// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   const logo = document.querySelector("nav .logo");
//   if (
//     document.body.scrollTop > 200 ||
//     document.documentElement.scrollTop > 200
//   ) {
//     logo.classList.add("test");
//     // document.getElementById("myP").className = "test";
//   } else if (
//     document.body.scrollTop < 50 ||
//     document.documentElement.scrollTop < 50
//   ) {
//     logo.classList.remove("test");
//     // document.getElementById("myP").className = "";
//   }
// }
