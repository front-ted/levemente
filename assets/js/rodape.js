//---- Troca de cor do footer conforme página ----\\
jQuery("document").ready(function ($) {
  var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  if (pg_number == 1) {
    $("footer").addClass("footer1");
  } else if (pg_number == 2) {
    $("footer").addClass("footer2");
  } else if (pg_number == 3) {
    $("footer").addClass("footer3");
  } else if (pg_number == 4) {
    $("footer").addClass("footer4");
  } else if (pg_number == 5) {
    $("footer").addClass("footer5");
  } else if (pg_number == 6) {
    $("footer").addClass("footer6");
  } else if (pg_number == 7) {
    $("footer").addClass("footer7");
  }
});