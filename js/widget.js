(function ($) {
    $(function () {


        $(document).on('click', '#block-booking-calendar-booking-calendar-widget tbody td', function (event) {

            var year = $('#controls .prev').attr('data-year');
            var month = $('#controls .prev').attr('data-month');
            var day = $(this).text();
            var widget = true;


            console.log($(this));

            ajaxWidgetCalendar(year, month, day, widget);

        });
    });
})(jQuery);

function ajaxWidgetCalendar(year, month, day, widget) {

    var $ = jQuery;

    var postString = 'day=' + day + '&month_number=' + month + '&year=' + year + '&widget=' + widget;

    var ajaxPath = '/booking/calendar/ajax'; // This is the AjAX URL set by the custom Module.
    $.ajax({
        url: ajaxPath,
        method: "POST",
        data: postString,
        success: function (data) {
            console.log(data['hours_table']);
        }
    });
}