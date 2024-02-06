$(function(){
    $("#header_02").on("mouseover", function(){
        $("header_row_02_all").stop(true).animate({
            height: "200px"
        }, 200);
    })
    $("#header_02").on("mouseout", function(){
        $(".header_row_all").stop(true).animate({
            "height" : "0"
        }, 200);
    })
    $(".header_row_02_all").on("mouseover",function(){
        $(this).stop(true).animate({
            height: "200px"
        }, 200);
    })
    $(".header_row_02_all").on("mouseout", function(){
        $(this).stop(true).animate({
            "height": "0"
        }, 200)
    })
})