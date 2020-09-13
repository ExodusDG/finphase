$(document).ready(function() {
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});
$(document).ready(function() {
    $('#list-card').hover(function() {
        $("#list").attr("src", "img/list-white.png");
    }, function() {
        $("#list").attr("src", "img/list-black.png");
    });
    $('#arrow-card').hover(function() {
        $("#arrow").attr("src", "img/arrow-white.png");
    }, function() {
        $("#arrow").attr("src", "img/arrow-black.png");
    });
    $('#phone-card').hover(function() {
        $("#phone").attr("src", "img/phone-white.png");
    }, function() {
        $("#phone").attr("src", "img/phone-black.png");
    });
    $('#gears-card').hover(function() {
        $("#gears").attr("src", "img/gears-white.png");
    }, function() {
        $("#gears").attr("src", "img/gears-black.png");
    });
});
$(document).ready(function() {
    $('.year').hide()
    $('.pricing-mounthly').click(function() {
        $('.pricing-yearly').removeClass('pricing-yearly-active');
        $(this).addClass('pricing-mounthly-active');
        $('.year').hide()
        $('.month').show()

    });
    $('.pricing-yearly').click(function() {
        $('.pricing-mounthly').removeClass('pricing-mounthly-active');
        $(this).addClass('pricing-yearly-active');
        $('.month').hide()
        $('.year').show()
    });
});
$(document).ready(function() {

    var $menu = $("#menu");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    }); //scroll
});

$(document).ready(function() {
    var $navbar = $('.navbar');
    var $button = $('.navbar-button')
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $navbar.addClass('navbar-scroll');
            $button.addClass('navbar-button-scroll');
        } else {
            $navbar.removeClass('navbar-scroll');
            $button.removeClass('navbar-button-scroll');
        }
    });

});

$(document).ready(function() {
    $('.mobile-menu').hide();
    $('#hamb-button').click(function() {
        $('.mobile-menu').toggleClass('mb-active');
    });
});