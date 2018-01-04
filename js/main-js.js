$(window).ready(function () {
    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 700)
    }, 700);

    /*dropdown menu*/
    $('.current-value').click(function () {
        $('.custom-select ul').fadeToggle(100);
    });

    $('.custom-select ul li').click(function () {
        var city = $(this).text();
        $(this).parent().siblings('.current-value').text(city);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $(this).parent().siblings('input').val(city);

        $(this).parents('.custom-select').find(' ul').fadeOut(100);
    });

});

/*slick jq slider*/

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
});


/*---------------- Прокрутка цифр ----------------*/

var show = true;
var countbox = ".about-company";
$(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.about-company-item-number').spincrement({
            thousandSeparator: "",
            duration: 3000
        });

        show = false;
    }
});


/*scroll-up*/


$(".fixed-arrow-scrollUp").on("click", function () {
    $('body,html').animate({scrollTop: 0}, 800);
});

/*id scroll*/

$("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    });
});

