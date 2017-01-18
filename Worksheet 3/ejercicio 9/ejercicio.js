$(document).ready(function(){
	var div = $("div");
	$("#activar").click(function(){
		div.fadeIn()
		.animate({
			left: "200px",	    }, 500)
	    .queue(function(){
	    	$(this).css("backgroundColor","blue")
	    	.dequeue();
		})
		.animate({
			top: "-=100px",
	    	opacity: 0
	    },1000);
    });
    $("#desactivar").click(function(){
        div.clearQueue()
        .stop();
    });
});
