//Assignment 6


// prevent form reset
$(document).ready(function(){
	$("form").click(function (event) {
		event.preventDefault();
	});
	console.log("js ready");
});


// create array for city values
var city=["NYC", "SF", "LA", "ATX", "SYD"];

// make dropdown menu
(function (){
	for ( var i = 0 ;  i < city.length ; i ++){
		$("#city-type").append(`<option>${city[i]}</option>`);
	};
})();


// get a value from dropdown menu and change selected a city image

$("#city-type").change(function (){
	var selectCity = $("#city-type").val();
	if (selectCity == "NYC"){
		$("body").attr("class","nyc");
	}else if (selectCity == "SF"){
		$("body").attr("class","sf");
	}else if (selectCity == "LA"){
		$("body").attr("class","la");		
	}else if (selectCity == "ATX"){
		$("body").attr("class","austin");
	}else if (selectCity == "SYD"){
		$("body").attr("class","sydney");
	};
	$("#city-type").prop("selectedIndex",0); // reset default select
});


