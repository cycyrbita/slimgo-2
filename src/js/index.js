
$(document).ready(function () {
    quest();
    Start();

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        items: 1,
        margin: 15
    });

    function Start() {
        var m = 12,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-item:nth-of-type(2) span:first-child').text(m);
            $('.form__time-item:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    };

    function quest() {
        $('.quest__check').click(function() {
            $(this).parent().children('.quest__check').removeClass('active');
            $(this).addClass('active');
            $(this).parent().addClass('ready');
        });

        $('.quest__btn.next').click(function() {
            if($('.quest__item').last().prev().hasClass('visible')) {
                $('.quest__btn.next').removeClass("visible");
                $('.quest__btn.status').addClass("visible");
            }
            $('.quest__item.visible.ready').removeClass('visible').next().addClass('visible');
        });

        $('.quest__btn.prev').click(function() {
            if($('.quest__item').first().hasClass('visible')) {
                
            } else {
                $('.quest__item.visible').removeClass('visible').prev().removeClass('hide').addClass('visible');
            }

            if($('.quest__item').last().prev().hasClass('visible')) {
                $('.quest__btn.next').addClass("visible");
                $('.quest__btn.status').removeClass("visible");
            }
        });

        $('.quest__btn.status').click(function() {
            if($('.quest__item').last().hasClass('ready')) {
                $('.section_quest').hide();

                if($('.quest__check.count-1').hasClass('active')) {
                    $('.section_result').fadeIn();
                    $('.result').hide();
                    $('.result_1').show();
                } else if($('.quest__check.count-2').hasClass('active')) {
                    $('.section_result').fadeIn();
                    $('.result').hide();
                    $('.result_2').show();
                } else if($('.quest__check.count-3').hasClass('active')) {
                    $('.section_result').fadeIn();
                    $('.result').hide();
                    $('.result_3').show();
                } else {
                    $('.section_result').fadeIn();
                    $('.result').hide();
                    $('.result_4').show();
                }
            }
        });
    }
});