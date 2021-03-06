$(function () {
    slider = $(".slider");
    slider.slick({
        arrows: true,
        dots: true,
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
        slidesToShow: 4,
        slidesToScroll: 2
    });

    // vars
    var slider, btn, tabC, prevIndex, objTab = {};
    btn = $(".btn");
    tabC = $(".tabContent");


    // $('.btn-1').click(function () {
    //     $('.title-test-text-1').addClass('active-title');
    //     $('.title-test-text-2').removeClass('active-title');
    //     $('.title-test-text-3').removeClass('active-title');
    //     $('.title-test-text-4').removeClass('active-title');
    //     $('.title-test-text-5').removeClass('active-title');
    // });
    //
    // $('.btn-2').click(function () {
    //     $('.title-test-text-1').removeClass('active-title');
    //     $('.title-test-text-2').addClass('active-title');
    //     $('.title-test-text-3').removeClass('active-title');
    //     $('.title-test-text-4').removeClass('active-title');
    //     $('.title-test-text-5').removeClass('active-title');
    // });
    //
    // $('.btn-3').click(function () {
    //     $('.title-test-text-1').removeClass('active-title');
    //     $('.title-test-text-2').removeClass('active-title');
    //     $('.title-test-text-3').addClass('active-title');
    //     $('.title-test-text-4').removeClass('active-title');
    //     $('.title-test-text-5').removeClass('active-title');
    // });
    //
    // $('.btn-4').click(function () {
    //     $('.title-test-text-1').removeClass('active-title');
    //     $('.title-test-text-2').removeClass('active-title');
    //     $('.title-test-text-3').removeClass('active-title');
    //     $('.title-test-text-4').addClass('active-title');
    //     $('.title-test-text-5').removeClass('active-title');
    // });
    //
    // $('.btn-5').click(function () {
    //     $('.title-test-text-1').removeClass('active-title');
    //     $('.title-test-text-2').removeClass('active-title');
    //     $('.title-test-text-3').removeClass('active-title');
    //     $('.title-test-text-4').removeClass('active-title');
    //     $('.title-test-text-5').addClass('active-title');
    // });

    $('.star-title-TEST').addClass('active-TEST-tab');
    $('.btn-1').click(function () {
        $('.star-title-TEST').addClass('active-TEST-tab');
        $('.oil-title-TEST').removeClass('active-TEST-tab');
        $('.stocks-title-TEST').removeClass('active-TEST-tab');
        $('.green-title-TEST').removeClass('active-TEST-tab');
        $('.violet-title-TEST').removeClass('active-TEST-tab');
    });

    $('.btn-2').click(function () {
        $('.star-title-TEST').removeClass('active-TEST-tab');
        $('.oil-title-TEST').addClass('active-TEST-tab');
        $('.stocks-title-TEST').removeClass('active-TEST-tab');
        $('.green-title-TEST').removeClass('active-TEST-tab');
        $('.violet-title-TEST').removeClass('active-TEST-tab');
    });

    $('.btn-3').click(function () {
        $('.star-title-TEST').removeClass('active-TEST-tab');
        $('.oil-title-TEST').removeClass('active-TEST-tab');
        $('.stocks-title-TEST').addClass('active-TEST-tab');
        $('.green-title-TEST').removeClass('active-TEST-tab');
        $('.violet-title-TEST').removeClass('active-TEST-tab');
    });

    $('.btn-4').click(function () {
        $('.oil-title-TEST').removeClass('active-TEST-tab');
        $('.star-title-TEST').removeClass('active-TEST-tab');
        $('.stocks-title-TEST').removeClass('active-TEST-tab');
        $('.green-title-TEST').addClass('active-TEST-tab');
        $('.violet-title-TEST').removeClass('active-TEST-tab');
    });

    $('.btn-5').click(function () {
        $('.star-title-TEST').removeClass('active-TEST-tab');
        $('.oil-title-TEST').removeClass('active-TEST-tab');
        $('.stocks-title-TEST').removeClass('active-TEST-tab');
        $('.green-title-TEST').removeClass('active-TEST-tab');
        $('.violet-title-TEST').addClass('active-TEST-tab');
    });


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
            tabC.eq(thIndex).addClass("show");
            prevIndex = thIndex;
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
