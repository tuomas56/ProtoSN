$(function () {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    var _preventDefault = function (evt) {
        evt.preventDefault();
    };
    $("html").bind("dragstart", _preventDefault).bind("selectstart", _preventDefault);
});
