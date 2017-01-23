$(document).ready(function(){
	page = 0;
	maxPage = 0.0;
	isFilm = false;
	$("#search-serie").click(function(){
		$("#list").empty();
		isFilm = false;
		page = 1;
		search();
    });

    $("#search-film").click(function(){
    	$("#list").empty();
    	isFilm = true;
    	page = 1;
		search();
    });

    $(window).scroll(function() {
    	if(page > 0 && page <= maxPage){
    		if($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
				$(".loading img").show();
		   		page++;
		   		search();
		   }
    	}
	});
});

function search(){
	var title = "";
	var type = "";
	if (isFilm) {
		title = $("input#film-name").val();
		type = "movie";
	}else{
		title = $("input#serie-name").val();
		type = "series";
	}
	
	$.getJSON("http://www.omdbapi.com/?s=" + title + "&page=" + page + "&type=" + type, function(result){
        if(result.Search){
			$.each(result.Search, function(i, field){
        	if (field.Poster == "N/A") {
        		$("#list").append($("<div class='col-md-4'><img src='img/not-found.png' "+
        			"width='300px' height='375px'></img><h2>" + field.Title + "</h2></div>"));
        	}else{
        		$("#list").append($("<div class='col-md-4'><img src=" + field.Poster +
			 " width='300px' height='375px'></img><h2>" + field.Title + "</h2></div>"));
        	}
			
        	});
		}if (result.totalResults) {
			maxPage = result.totalResults / 10;
		}
		$(".loading img").hide();
    });
}

