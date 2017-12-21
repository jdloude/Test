// on click event that loads in text of clicked link from array to push to the api
function liftStatus() {

	$('.resorts').empty();

	let resort = "breck";

	let queryURL = "https://liftie.info/?resorts=" + resort;


	$.ajax({

        url: queryURL,

        method: "GET"

        // when done loading the inforamtion call this function
        }).done(function (response) {

        	console.log(response);
        });

}

liftStatus();