$(function(){

	$(document).keypress(function(e) {

		if(e.which == 13) {

		    var query = $("#search").val();
			var jsonfile = "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=";
			jsonfile += query;
		//	jsonfile += "&callback=?";
			alert("You wrote: " + query + ". Let's search on: " + jsonfile);

			$.getJSON(jsonfile, function(json){
				console.log(json);
			});
	    };
	});
});
