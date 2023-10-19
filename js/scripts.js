(function($) {
    jQuery(document).ready(function() {

        // Scroll to Top
        jQuery('.scrolltotop').click(function() {
            jQuery('html').animate({
                'scrollTop': '0px'
            }, 400);
            return false;
        });

        jQuery(window).scroll(function() {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery('.scrolltotop').fadeIn();
            } else {
                jQuery('.scrolltotop').fadeOut();
            }
        });

        //hamburger
        var forEach = function(t, o, r) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else
                for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
        };

        var hamburgers = document.querySelectorAll(".hamburger");
        if (hamburgers.length > 0) {
            forEach(hamburgers, function(hamburger) {
                hamburger.addEventListener("click", function() {
                    this.classList.toggle("is-active");
                }, false);
            });
        };

        jQuery(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dotsEach: true,
        });

        jQuery(".trip-carousel").owlCarousel({
            items: 3,
            loop: true,
            center: true,
            margin: 21,
            responsive: {
                0: {
                    items: 2,
                    margin: 11,
                },
                700: {
                    items: 3,
                    margin: 21,
                },
            }
        });













    });
})(jQuery);