$(".a").hover(function(){
    $(".b").css({
        "display":"block"
    })
    $(".b").slideDown();
});
$(".main").on("click", function(){
    $(".b").slideUp();
})