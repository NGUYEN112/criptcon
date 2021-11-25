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

//slide 
$(window).ready(function () {
    var id = $('.slide.active').attr('id')
    $('#'+id+'.controls').addClass('active')
})
$('.controls').click(function() {
    $('.controls.active').removeClass('active')
    $(this).addClass('active')
    $('.slide.active').removeClass('active')
    var id = $(this).attr('id')
    $('#'+id+'.slide').addClass('active')
})