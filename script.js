$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 90) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});

//navbar
$('.hamburger').click(function(){
    $(this).toggleClass("active")
    $('.navbar__navlist').toggleClass('active')
})