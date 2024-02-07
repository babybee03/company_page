$(function(){
    $("#food_row_01_right_box_01").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            "top":"0",
            "left":"0",
            "width":"800px",
            "height":"800px"
        },100);
        $("#food_row_01_right_box_01 > img").stop(true).animate({
            top:"0",
            left: "0",
            width: "800px",
            height: "800px"
        }, 100);
    })
    $("#food_row_01_right_box_01").on("mouseout", function(){
        $(this).css({
            "z-index":"1"
        });
        $(this).stop(true).animate({
            "top": "0",
            "left": "0",
            "width": "400px",
            "height":"400px"
        }, 100);
        $("#food_row_01_right_box_01 > img").stop(true).animate({
            "top":"0",
            "left": "0",
            "width": "400px",
            "height":"400px"
        }, 100);
    })
    $("#food_row_01_right_box_02").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            "top": "0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
        $("#food_row_01_right_box_02 > img").stop(true).animate({
            "top":"0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
    })
    $("#food_row_01_right_box_02").on("mouseout", function(){
        $(this).css({
            "z-index":"1"
        });
        $(this).stop(true).animate({
            "top": "0",
            "left": "400px",
            "width": "400px",
            "height":"400px"
        }, 100);
        $("#food_row_01_right_box_02 > img").stop(true).animate({
            "top":"0",
            "left": "400px",
            "width": "400px",
            "height":"400px"
        }, 100);
    })

    $("#food_row_01_right_box_03").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            "top": "0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
        $("#food_row_01_right_box_03 > img").stop(true).animate({
            "top":"0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
    })

    $("#food_row_01_right_box_03").on("mouseout", function(){
        $(this).css({
            "z-index":"1"
        });
        $(this).stop(true).animate({
            "top": "400px",
            "left": "0",
            "width": "400px",
            "height":"400px"
        }, 100);
        $("#food_row_01_right_box_03 > img").stop(true).animate({
            "top":"400px",
            "left": "0",
            "width": "400px",
            "height":"400px"
        }, 100);
    })

    $("#food_row_01_right_box_04").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            "top": "0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
        $("#food_row_01_right_box_04 > img").stop(true).animate({
            "top":"0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
    })
    $("#food_row_01_right_box_04").on("mouseout", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            "top": "0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
        $("#food_row_01_right_box_03 > img").stop(true).animate({
            "top":"0",
            "left": "0",
            "width": "800px",
            "height":"800px"
        }, 100);
    })
    
})