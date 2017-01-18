$(document).ready(function(){
	$("ul li").mouseenter(function(){
		$(this).fadeIn()
		.animate({
			top: "+=30px",	    }, 300)
		.css({ "background-color": "red"});
    });

    $("ul li").mouseleave(function(){
    	$(this).fadeIn()
		.animate({
			top: "-=30px",	    }, 300)
		.css({ "background-color": "white"});
    });
});
