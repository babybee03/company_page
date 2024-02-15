$(".wrap").hover(function(){
    $(".b").css({
        "display" : "block"
    })
    $(".b").slideDown();

});

$(".b").hover(function(){
    $(this).slideUp();
});
