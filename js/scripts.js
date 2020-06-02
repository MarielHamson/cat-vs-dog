$(document).ready(function() {
  $("img#click-cat").click(function() {
    $("ul#meow").prepend("<li>Meow</li>");
    $("body").removeClass();
    $("body").addClass("grey-background");
  });
  $("img#click-dog").click(function(){
    $("ul#ruff").prepend("<li>Ruff</li>");
    $("body").removeClass();
    $("body").addClass("blue-background");
  });  
});