// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    setTimeout(f, 1000 / 60)
};

//Page functions
var root = {
    _width: 0,
    _height: 0,
    _header_height: 0,
    setup: function (init) {
        this._width = $(window).width();
        this._height = $(window).height();

        if (init === 1) {
            //Code that should be executed only once goes here
            //Add target blank for external links
            $("a[href^=http]").each(function () {
                if (this.href.indexOf(location.hostname) === -1)
                    $(this).attr('target', "_blank");
            });
            root.move();
            root.innovation();
            root.matchHeight();
        }
        //Code that should execute on window resize goes here
        
    },
    scrollEvent: function (init) {
        requestAnimationFrame(function () {
            //Add layer behind sticky menu
            var st = $(window).scrollTop();
            if (st >= 200) {
                $('html').addClass('has-scrolled');
            } else {
                $('html').removeClass('has-scrolled');
            }
        });
    },
    innovation: function () {
        if ($('.innovation').length) {
            var mySwiper = new Swiper('.innovation.swiper-container', {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 16,
                autoplay:
                {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".innovation .swiper-button-next",
                    prevEl: ".innovation .swiper-button-prev",
                },
                breakpoints: {
                    741: {
                        slidesPerView: 2
                    },
                    1025: {
                        slidesPerView: 3
                    }
                }
            });
        }
    },
    move: function () {
        if ($('.move').length) {
            var mySwiper = new Swiper('.move .swiper-container', {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 16,
                autoplay: 
                {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".move .swiper-button-next",
                    prevEl: ".move .swiper-button-prev",
                },
                breakpoints: {
                    741: {
                        slidesPerView: 2
                    },
                    1025: {
                        slidesPerView: 3
                    }
                }
            });
        }
    },
    matchHeight: function () {
        $('.scroll_image').matchHeight({});
        $('.creation h1').matchHeight({});
    },
};







