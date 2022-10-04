$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keypress(function(){
        $("span").text(i += 1);
        $(".h1").show().fadeOut();
    });
    $("button").click(function(){
        $(".box").animate({
            width: 'toggle'
        });
    });
});


