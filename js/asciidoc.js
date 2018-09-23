(function ($, window, document) {

    $(function () {
        $(".imageblock .title").each(function() {
            let title = $(this);

            var lines = title.html().split(' — ');
            var html = lines.join('<br>');
            title.html(html)
        })
    });

}(window.jQuery, window, document));