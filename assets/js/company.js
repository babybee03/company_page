$(window).scroll(function(){
    var topCompanyBox = $(".company_box_1").offset().top;
    var scroll_height = $(window).scrollTop() + $(window).height();
    if (scroll_height > topCompanyBox) {
        $(".company_box_1").css({
            "transform" : "translateX(300px)"
        })
    }
})