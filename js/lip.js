//點上面修容眉毛腮紅
$.fn.type=function(){
    $.fn.sub(0);
    //點上面type
    $(".type_btn").click(function(){
    
    //獲得類型索引號
    var index=$(this).index();
    //讓下面相應索引號類型形容顯示 其餘隱藏
    $(".one_type").eq(index).show().siblings().hide();
    $(".other").css("top","550px");
    $(".footer").css("top","600px")
    $.fn.sub(index);
})
}

$.fn.sub = function(index){
    $(".choose_btn").click(function(){
        //獲得索引號
        console.log(index);
        var index2=index*3+$(this).index();
        console.log(index2);
    
        //讓下面相應索引號item顯示 其餘隱藏
        $(".step").eq(index2).show().siblings().hide();
    })
}

$.fn.step = function(index){
    $(".pic_btn").click(function(){
        //獲得索引號
        console.log(index);
        var index=index+$(this).index();
        console.log(index);
        //讓下面相應索引號item顯示 其餘隱藏
        $(".step2").eq(index).show().siblings().hide();
        $(".other").css("top","500px");
        $(".footer").css("top","500px");
    })
}
$.fn.sub(0);
$.fn.step(0);
$.fn.type();