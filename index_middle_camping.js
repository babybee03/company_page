$(function(){
    $(".camping_row_01_all").on("mouseover", function(){
        $("#camping_row_01_right_img").stop(true).animate({
            left: "0"
        }, 100)
        $("#camping_row_01_right_img > img" ).stop(true).animate({
            opacity: "1"
        }, 100);
        $("#camp_text_03_01").css({
            color: "#000"
        });
        $("#camp_text_03_01").stop(true).animate({
            left: "90px",
            backgroundColor : "#f90"
        }, 100)
    })

    $(".camping_row_01_all").on("mouseout", function(){
        $("#camping_row_01_right_img").stop(true).animate({
            left: "800px"
        }, 100);
        $("#camping_row_01_right_img > img").stop(true).animate({
            opacity: "1"
        });
        $("#camp_text_03_01").css({
            color: "#333"
        });
        $("#camp_text_03_01").stop(true).animate({
            left: "150px",
            backgroundColor: "#f4f4f4"
        },100)
    })
})

$(function(){
    $(".camping_row_02_all").on("mouseover", function(){
        $("#camping_row_02_right_img").stop(true).animate({
            left: "0"
        }, 100)
        $("#camping_row_02_right_img > img" ).stop(true).animate({
            opacity: "1"
        }, 100);
        $("#camp_text_04_01").css({
            color: "#000"
        });
        $("#camp_text_04_01").stop(true).animate({
            left: "90px",
            backgroundColor : "#f90"
        }, 100)
    })
    $(".camping_row_02_all").on("mouseout", function(){
        $("#camping_row_02_right_img").stop(true).animate({
            left: "800px"
        }, 100);
        $("#camping_row_02_right_img > img").stop(true).animate({
            opacity: "1"
        });
        $("#camp_text_04_01").css({
            color: "#333"
        });
        $("#camp_text_04_01").stop(true).animate({
            left: "150px",
            backgroundColor: "#f4f4f4"
        },100)
    })
})