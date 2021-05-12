
$(document).ready(function () {
    Start();

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        stagePadding: 20,
        responsive : {
            320 : {
                items: 1,
                margin: 15,
                stagePadding: 0,
                nav: true
            },

            768 : {
                items: 2,
                nav: false
            },

            1310 : {
                items: 3
            }
        }
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
});