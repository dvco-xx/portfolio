//toggle the .open class btw .menu-toggler and .top-nav classes 
//when the menu-toggler is clicked
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});