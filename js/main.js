$(function(){

	var $results = $("#results");

	$(document).keypress(function(e) {

		if(e.which == 13) {					// Check whether the pressed key is ENTER

		    var query = $("#search").val();	// Fetch the value of the search box (the word typed)
//			var jsonfile = "https://en.wikipedia.org/w/api.php?action=query&format=json&titles=";
//			jsonfile += query;
//			jsonfile += "&callback=?";		// The full URL built

			var jsonfile = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=";
			jsonfile += query;

	//		alert("You wrote: " + query + ". Let's search on: " + jsonfile);	// Checking everything is alright

			e.preventDefault();				// Stop the page from refreshing

			$.ajax({
		        url: jsonfile,
		        dataType: "jsonp",
		        type: "GET",
		        success: function(data) {          
		            var myJson = data;
		            for (var i = 0; i < myJson[1].length; i++){
		                $results.append("<li><a href=" + myJson[3][i] + "><h4>" + myJson[1][i] + "</h4><p>" + myJson[2][i] + "</p></a></li>");
		            }
		            clearTimeout(wikiRequestTimeout);   // Cancel the timeout
		        }  
		    });

			/*$.getJSON(jsonfile, function(data){
				var myJson = data;
				alert("hola");
				$results.append("<h1>Hola!</h1>");

				for (var i = 0 - 1; i < myJson.length; i++) {
					$results.append("<li><a href=http://en.wikipedia.org/wiki/" + myJson[i] + ">" + myJson[i] + "</a></li>");
				}
					
				});

			});*/
	    };
	});
});
