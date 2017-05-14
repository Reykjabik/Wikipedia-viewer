$(function(){

	$(document).keypress(function(e) {

		if(e.which == 13) {

		    var query = $("#search").val();
			var jsonfile = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=";
			jsonfile += query;
			jsonfile += "&callback=?";
			alert("You wrote: " + query + ". Let's search on: " + jsonfile);

/*			$.getJSON(jsonfile, function(json){
				alert(json);
			});*/

			var xhr = new XMLHttpRequest();

			xhr.readystatechange = function(){
				if (xhr.readyState === 4) {}
			}
		}
    });
});
