// check if touch device
function isTouchDevice() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function mq(query) {
        return window.matchMedia(query).matches;
    };
    if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

if (isTouchDevice()) {
    $('body').addClass('touch-device');
}

// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrap = header.find('.js-header-wrap'),
        bg = header.find('.js-header-bg'),
        items = header.find('.js-header-item'),
        search = header.find('.js-header-search'),
        open = header.find('.js-header-open');

    // header search
    open.on('click', function () {
        search.toggleClass('active');
    });

    // header menu mobile
    burger.on('click', function () {
        burger.toggleClass('active');
        wrap.toggleClass('visible');
        bg.toggleClass('show');
    });
    bg.on('click', function () {
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
    });

    // header dropdown
    if (isTouchDevice()) {
        items.each(function () {
            var item = $(this),
                head = item.find('.js-header-head'),
                body = item.find('.js-header-body');
            if (window.matchMedia("(min-width: 768px)").matches) {
                head.on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!item.hasClass('active')) {
                        items.removeClass('active');
                        item.addClass('active');
                    } else {
                        items.removeClass('active');
                    }
                });

                body.on('click', function (e) {
                    e.stopPropagation();
                });
            }
        });

        $('body').on('click', function () {
            items.removeClass('active');
        });
    }
})();

// footer
(function () {
    var footer = $('.js-footer'),
        items = footer.find('.js-footer-col');
    items.each(function () {
        var item = $(this),
            category = item.find('.js-footer-category'),
            menu = item.find('.js-footer-menu');

        category.on('click', function () {
            if (!category.hasClass('active')) {
                items.removeClass('active');
                items.find('.js-footer-menu').slideUp();
                item.addClass('active');
                menu.slideDown();
            } else {
                items.removeClass('active');
                items.find('.js-footer-menu').slideUp();
            }
        });
    });
})();