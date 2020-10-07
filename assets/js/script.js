$(document).ready(function() {
    $("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
    $(".logo").slideToggle();
    });

});
