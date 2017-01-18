$(document).ready(function(){
	var changeTooltipPosition = function(event) {
	  var tooltipX = event.pageX - 8;
	  var tooltipY = event.pageY + 8;
	  $("div.tooltip").css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	  $("div.tooltip").remove();
	  $("<div class='tooltip'>Esto es un tooltip</div>").appendTo("body");
	  changeTooltipPosition(event);
	};

	var hideTooltip = function() {
	   $("div.tooltip").remove();
	};

	$("#div").bind({
	   mousemove : changeTooltipPosition,
	   mouseenter : showTooltip,
	   mouseleave: hideTooltip
	});
});
