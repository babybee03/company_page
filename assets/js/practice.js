/*
$(function (){
    var fromtopA = $(".a").offset().top;
    var scroll_height = $(window).scrollTop();
    console.log(fromtopA);
    if(scroll_height > fromtopA) {
        $(".a").animate({
            "transform" : "translateX(300px)"
        }, 1000)
    }
})
*/


$(function () {
    $(window).scroll(function () {
        var fromtopA = $(".a").offset().top;
        var scroll_height = $(window).scrollTop()+$(window).height();
        console.log(fromtopA);
        if (scroll_height > fromtopA) {
            $(".a").animate({
                "transform": "translateX(300px)"
            }, 1000);
        }
    });
});