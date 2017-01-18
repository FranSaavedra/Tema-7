$(document).ready(function(){
	$("#activar").click(function(){
		bucleAnimacion();
    });
    $("#desactivar").click(function(){
        $("div").clearQueue();
    });
});

function bucleAnimacion(){
    var div = $('div');
    div
    .animate({
           width: "25%"
    }, { duration: 500})
    .animate({
       width: "50%"
    }, { duration: 500})
    .animate({
       width: "75%"
    }, { duration: 500})
    .animate({
       width: "100%"
    }, 500, bucleAnimacion);
}