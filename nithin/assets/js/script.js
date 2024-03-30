$(function () {
    /** ALL CLICKS **/

    /** ONE TIME INIT **/
    root.setup(1);

    $(window).resize(function () {
        root.setup(0);
    });

    $(window).scroll(root.scrollEvent);
});

$(window).on('load', function () {
    root.scrollEvent();
});