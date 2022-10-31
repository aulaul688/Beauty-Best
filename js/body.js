$(function(){
    $(".type").click(function(){
        var index=$(this).index()+1;
        $(".onetype").eq(index).show().siblings().hide();
    })
})