$(document).ready(function(){
	alert("Se ha cargado el DOM");

	var boton1 = $("<button>Boton 1</button>");
	boton1.click(function(){
		alert($("head").html());
    });
    $("body").append(boton1);

	var boton2 = $("<button>Boton 2</button>");
	boton2.click(function(){
		alert($("body").text());
    });
    $("body").append(boton2);

    var p1 = $("<p>Parrafo JQuery</p>");
    p1.click(function(){
		alert("Has pulsado en el parrafo JQuery 1");
    });
    $("body").append(p1);

    var p2 = $("<p>Parrafo JQuery 2</p>");
    p2.click(function(){
		$(this).hide();
    });
    $("body").append(p2);

    var lista = $("ul li").prepend("#");
    lista.click(function(){
		$(this).hide();
	});

    var enlace1 = $("<a href='#''>Enlace 1</a>");
    $("body").append(enlace1);

    var enlace2 = $("<a href='#''>Enlace 2</a>");
    $("body").append(enlace2);

    var enlace3 = $("<a href='#''>Enlace 3</a>");
    $("body").append(enlace3);

    var enlaces = $("a").click(function(){
		enlaces.text("Nuevo texto");
    });

    $("#tabla1 tr + tr").click(function(){
		$(this).css("background-color", "red");
    });

    $("#tabla2 tr + tr").click(function(){
		$(this).hide();
    });
});