$(window).scroll(function(){
    var topCompanyBoxA = $(".a").offset().top;
    var topCompanyBoxB = $(".b").offset().top;
    var topCompanyBoxC = $(".c").offset().top;
    var scroll_height = $(window).scrollTop() + $(window).height();
    if (scroll_height > topCompanyBoxA) {
        $(".a").css({
            "margin": "0 auto",
            "transform" : "translateX(0)",
            "opacity" : "1"
        })
    }
    if (scroll_height > topCompanyBoxB) {
        $(".b").css({
            "margin": "0 auto",
            "transform" : "translateX(0)",
            "opacity" : "1"
        })
    }
    if (scroll_height > topCompanyBoxC) {
        $(".c").css({
            "margin": "0 auto",
            "transform" : "translateX(0)",
            "opacity" : "1"
        })
    }
})