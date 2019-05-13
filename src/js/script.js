$(function () {
    slider = $(".slider");

    slider.slick({
        // infinite: true,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots',
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        // <i class="fas fa-chevron-right"></i>
        prevArrow: '<i class="fa fa-chevron-left"></i>',
        // <i class="fas fa-chevron-left"></i>

        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        // arrowsClass: 'slick-prev, slick-next',
        // dotsClass: 'my-dots'
        // arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2
    });
    // vars
    var slider, btn, tabC, prevIndex, objTab = {};

    btn = $(".btn");
    tabC = $(".tabContent");

    prevIndex = 0;

    btn.on("click", function () {

        var th, thIndex;

        th = $(this);
        thIndex = th.index();

        if (!th.hasClass("active")) {
            if (prevIndex !== thIndex && prevIndex !== 'undefined') {
                btn.eq(prevIndex).removeClass("active");
                tabC.eq(prevIndex).removeClass("show");
            }
            btn.eq(thIndex).addClass("active");
            // btn.eq(thIndex).addClass("colored");
            tabC.eq(thIndex).addClass("show");
            prevIndex = thIndex;

            //slick position filter
            //if you have problem with slick in tabs, use next option
            //magic option
            tabC.eq(thIndex).find(".slider").slick('setPosition');


        }
    });
});
$.get(
    {
        "id": "2643743", //London, GB
        "appid": "d74f35da617974e2c8453a4e52d3aa81"
    },
    function (data) {
        let temp = '', humi = '', pressure = '', temp_min = '', temp_max = '';
        temp += 'Temp: <b>' + Math.round(data.main.temp - 273) + ' C &#176;</b><br>';
        humi += 'Humidity: <b>' + data.main.humidity + '%</b>';
        pressure += 'Pressure: <b>' + data.main.pressure + '</b>';
        temp_max += 'T max:<b>' + Math.round(data.main.temp_max - 273) + ' С &#176;</b>';
        temp_min += 'T min:<b>' + Math.round(data.main.temp_min - 273) + ' С &#176;</b>';
        $('.temp-show').html(temp);
        $('.humi-show').html(humi);
        $('.pressure-show').html(pressure);
        $('.temp_min-show').html(temp_min);
        $('.temp_max-show').html(temp_max);
    }
);
