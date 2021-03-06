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
    // console.log(slidesLength)
    // const sliderMain = $('.slider-main');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const dotItems = $('.controls');
    let index = 0;
    let positionX = 0;
    $('.controls').click(function () {
        $('.controls').removeClass('active');
        $(this).addClass('active')
        const sliderIndex = parseInt($(this).data('index'));
        let screenWidth = $(window).width();
        if(sliderIndex != (index + 1)) {
            if (screenWidth <= 768 || sliderIndex <= slidesLength -2){
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

//tab 
$(window).ready(function(){
    let tabId = $('.tab-link.active').attr('id');
    $('#'+tabId + '.tab-item').addClass('active');
    $('.tab-link').click(function(){
        $('.tab-link').removeClass('active');
        $(this).addClass('active')
        $('.tab-item.active').removeClass('active');
        var Id = $(this).attr('id');
        $('#'+Id + '.tab-item').addClass('active');
    })
    
})


const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    // labels: [
    // //   'Red',
    // //   'Blue',
    // //   'Yellow'
    // ],
    datasets: [{
      label: 'My First Dataset',
      data: [12, 32, 38,55,73],
      backgroundColor: [
        '#f8c04e',
        '#ac56f7',
        '#61f89f',
        '#5ad6f8',
        '#f85d77'
      ],
    borderColor: '#470fac',
    borderWidth: 4,
    rotation: -12
    }]
  };

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
    }
});
