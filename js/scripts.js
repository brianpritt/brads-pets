$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("lightOnDark");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("darkOnLight");
  });
});
