$(document).ready(function(){
    var not1 = $("#noticia1 p").css("font-size","10px");
    var not2 = $("#noticia2 p").css("font-size","20px");
    var not3 = $("#noticia3 p").css("font-size","30px");

    $("#noticia1 h1").click(function(){
        if(not1.is(":visible")){
            not1.hide();
        }else{
            not1.show();
        }
    });

    $("#noticia2 h1").click(function(){
        if(not2.is(":visible")){
            not2.hide();
        }else{
            not2.show();
        }
    });

    $("#noticia3 h1").click(function(){
        if(not3.is(":visible")){
            not3.hide();
        }else{
            not3.show();
        }
    });

    not1.mouseover(function() {
        $(this).css("background-color", "red");
    });
    not2.mouseover(function() {
        $(this).css("background-color", "red");
    });
    not3.mouseover(function() {
        $(this).css("background-color", "red");
    });

    not1.mouseout(function() {
        $(this).css("background-color", "white");
    });
    not2.mouseout(function() {
        $(this).css("background-color", "white");
    });
    not3.mouseout(function() {
        $(this).css("background-color", "white");
    });
});