//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
        $(".slicknav_btn")[0].click();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -80)
                }, 1500);
                return false;
            }
        }
    });

});