/********************************* */
// # 1- Preloading Access  //
/******************************** */
var $constrom_window = $(window);
$constrom_window.on('load', function () {
    $('#loader').fadeOut(100, function () {
        $(this).remove();
    });
});
/********************************* */
// # 2- slider Access  //
/******************************** */
$(".dot2").click(function(){
    $(".slider2").slideDown(200);
    $(".slider1").slideUp(200);
    $(".slider3").slideUp(200);
    $(this).css("background","#ed1c24");
    $(".dot1").css("background","#fff");
    $(".dot3").css("background","#fff");
})
$(".dot1").click(function(){
    $(".slider1").slideDown(200);
    $(".slider2").slideUp(200);
    $(".slider3").slideUp(200);
    $(this).css("background","#ed1c24");
    $(".dot2").css("background","#fff");
    $(".dot3").css("background","#fff");
})
$(".dot3").click(function(){
    $(".slider3").slideDown(200);
    $(".slider1").slideUp(200);
    $(".slider2").slideUp(200);
    $(this).css("background","#ed1c24");
    $(".dot1").css("background","#fff");
    $(".dot2").css("background","#fff");
})