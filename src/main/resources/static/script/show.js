$(document).ready(function(){
    $(".btn1").click(function(){
        $("#content").show();
        $(".show-button1").hide();
        $(".show-button2").show();
    });
    $(".btn2").click(function(){
        $("#content").hide();
        $(".show-button2").hide();
        $(".show-button1").show();
    });
});