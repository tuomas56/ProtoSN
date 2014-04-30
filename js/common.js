$.fn.preload = function () {
    this.each(function () {
        $('<img/>')[0].src = this;
    });
}

$(function () {
    $('.slidea').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    var _preventDefault = function (evt) {
        evt.preventDefault();
    };
    $("html").bind("dragstart", _preventDefault).bind("selectstart", _preventDefault);
    $("#cs").click(function () {
        $(".b2").removeClass("b2").addClass("b1");
        $(".b3").removeClass("b3").addClass("b1");
    });
    $("#ac").click(function () {
        $(".b1").removeClass("b1").addClass("b2");
        $(".b3").removeClass("b3").addClass("b2");
    });
    $("#cg").click(function () {
        $(".b1").removeClass("b1").addClass("b3");
        $(".b2").removeClass("b2").addClass("b3");
    });
    $(["../images/background.jpg", "../images/background2.jpg", "../images/background3.jpg"]).preload();
});
