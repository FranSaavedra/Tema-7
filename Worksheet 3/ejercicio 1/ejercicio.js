$(document).ready(function(){
    $("table tr:lt(2)").css("background-color","red");
    $("table tr:gt(2)").css("background-color","blue");
});