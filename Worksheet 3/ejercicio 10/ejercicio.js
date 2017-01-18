$(document).ready(function(){
	var input = $("input");
	var label = $("label");
	input.on("input", function() {
		if ($(this).val().length < 5) {
			label.text("No segura");
		}else if ($(this).val().length < 8) {
			label.text("Medianamente segura");
		}else{
			label.text("Segura");
		}
	});
});