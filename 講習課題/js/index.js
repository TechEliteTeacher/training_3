$(function(){
    $('.color_button p').click(function(){
        let id = $(this).attr("id");
        $(".color_box").css("background-color",id);
    });
})
