//點上面修容眉毛腮紅
$.fn.type=function(){
    $.fn.sub(0);
    //點上面type
    $(".type_btn").click(function(){
    
    //獲得類型索引號
    var index=$(this).index();
    //讓下面相應索引號類型形容顯示 其餘隱藏
    $(".one_type").eq(index).show().siblings().hide();
    $.fn.sub(index);
})
}

$.fn.sub = function(index){
    $(".choose_btn").click(function(){
        //獲得索引號
        var index2=index*2+$(this).index();
        //讓下面相應索引號item顯示 其餘隱藏
        $(".step").eq(index2).show().siblings().hide();
    })
}

$.fn.other=function(){
    $(".o1").click(function(){
        var index3=$(this).index()+6;
        $(".one_type").eq(index3).show().siblings().hide();
        $.fn.sub(index3);
    })
}

$.fn.other();
$.fn.sub(0);
$.fn.type();