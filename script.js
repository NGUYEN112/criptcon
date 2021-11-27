$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 90) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});

//navbar
$('.hamburger').click(function () {
    $(this).toggleClass("active")
    $('.navbar__navlist').toggleClass('active')
})

//slide 
$(window).ready(function () {
    const sliderItems = $('.slider-item');
    const slidesLength = sliderItems.length;
    console.log(slidesLength)
    // const sliderMain = $('.slider-main');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const dotItems = $('.controls');
    let index = 0;
    let positionX = 0;
    $('.controls').click(function () {
        $('.controls').removeClass('active');
        $(this).addClass('active')
        const sliderIndex = parseInt($(this).data('index'));
        if(sliderIndex != (index + 1)) {
            if (sliderIndex <= slidesLength -2){
                index = sliderIndex -1;
                positionX = -1 * index * (sliderItemWidth + 30)
                $('.slider-main').css("transform", `translateX(${positionX}px)`);
            }
            
        }
       

        
    })

    function handleChangeSlide(dir) {
        if (dir === 1) {
            if (index >= slidesLength - 1) {
                index = slidesLength - 1;
                return
            }
        }

    }
})