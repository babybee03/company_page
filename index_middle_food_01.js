$(function(){
    $("#food_row_01_left_box_03_mask").on("mouseover", function(){
        $("#food_row_01_left_box_02").stop(true).animate({
            top: "280px"
        }, 100);
    })
    $("#food_row_01_left_box_03_mask").on("mouseout", function(){
        $("#food_row_01_left_box_02").stop(true).animate({
            top:"800px"
        },100)
    })
})