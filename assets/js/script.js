
//On Click listener for data landmark 
$("button").on("click", function () {
  let landmark = $(this).attr("data-landmark")
  let wikiAPIURL = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${landmark}&limit=1`

  // Performing our Fetch GET request
  fetch(wikiAPIURL)
    // After the data comes back from the API
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Storing an array of results in the results variable
      let results = data.pages[0].excerpt;

      $('#wikiContainer').html(`${results}.... <a href="https://en.wikipedia.org/wiki/${landmark}" target="_blank" rel="noopener noreferrer">Visit the Wikipedia Page</a>  to find out more about this landmark.`);

    })

})

/// Saving user email to local storage //

// let submitButton = $("#submit-button");
// $("button").on("click", function(event) { 
//   event.preventDefault() 
// } )
// Next Step is to store user email address input to local storage //