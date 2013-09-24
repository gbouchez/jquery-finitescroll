(function ($) {
    $.fn.finitescroll = function (options) {
        var settings = $.extend({
            url: "?p=__PAGE__"
        }, options);
        return this.each(function () {
            this.hasEnded = false;
            this.loading = false;
            this.page = 2;
            this.offset = $(this).offset().top + $(this).height();
            var object = this;
            $(window).scroll(function () {
                if (object.hasEnded == false
                    && object.loading == false
                    && object.offset - $(window).height() <= $(window).scrollTop()
                    && $(object).is(":visible")) {
                    object.loading = true;

                    $.ajax({
                        url: settings.url.replace("__PAGE__", object.page),
                        type: 'GET',

                        success: function (data) {
                            if (data['status'] == 'continue') {
                                $(object).append(data['content']);
                                object.offset = $(object).offset().top + $(object).height();
                                object.loading = false;
                                object.page++;
                            } else if (data['status'] == 'ended') {
                                object.hasEnded = true;
                            }
                        }
                    });
                }
            });
        });
    };
}(jQuery));
