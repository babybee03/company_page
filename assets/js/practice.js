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