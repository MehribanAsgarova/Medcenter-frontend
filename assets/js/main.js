$(document).ready(function() {
    $(".js-filter").on({
        "click": function() {

            $('.cardcontent').hide();
            $(' ' + $(this).attr('data-filter')).show();
        }
    });

})