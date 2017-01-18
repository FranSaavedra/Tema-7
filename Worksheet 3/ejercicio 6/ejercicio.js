$(document).ready(function(){
	$("p").click(function(){
		var tam = $(this).css("font-size");
		if (tam == "16px") {
			$(this).css("font-size","32px");
        }else if (tam == "32px") {
        	$(this).css("font-size","64px");
        }else if (tam == "64px") {
        	$(this).css("font-size","16px");
        }
    });
});