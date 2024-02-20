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
        var fromtopB = $(".b").offset().top;
        var fromtopC = $(".c").offset().top;
        var scroll_height = $(window).scrollTop()+$(window).height();
        console.log(fromtopA);
        if (scroll_height > fromtopA) {
            $(".a").css({
                "transform": "translateX(300px)"
            }, 1000);
        }

        if (scroll_height > fromtopB) {
            $(".b").css({
                "transform": "translateX(600px)"
            }, 1500);
        }

        if (scroll_height > fromtopC) {
            $(".c").css({
                "transform": "translateX(900px)"
            }, 2000);
        }
    });
});