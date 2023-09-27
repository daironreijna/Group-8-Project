// API Key // 
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// let googleAPIURL = "https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters"
// let googleviewAPIKey = config.googleAPIKEY
// "https://aerialview.googleapis.com/v1/videos:lookupVideo?key=YOUR_API_KEY&address=POSTAL_ADDRESS"

// curl -X GET "https://aerialview.googleapis.com/v1/videos:lookupVideo?key=YOUR_API_KEY&address=600%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094111"


/** ================================ 
** Modal
** The autofocus HTML attribute has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
** https://getbootstrap.com/docs/5.2/components/modal/
*/

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// });

//TODO Change from any button click to specific buttons
$("button").on("click", function () {
  let landmark = $(this).attr("data-landmark")

  // alert($(this).attr("data-landmark"))
  let wikiAPIURL = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${landmark}&limit=1`

  $("#The-cards").hide()

  $("#Home").hide()

  // window.location.href="index.html";

  // Performing our Fetch GET request
  fetch(wikiAPIURL)
    // After the data comes back from the API
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // Storing an array of results in the results variable
      let results = data.pages[0].excerpt;

      $('#wikiContainer').html(`${results}.... <a href="https://en.wikipedia.org/wiki/${landmark}" target="_blank" rel="noopener noreferrer">Visit Wikipedia Page</a>  to find out more about this landmark.`);

    })

})

//TODO! use the below ids as needed.
  id = "videoContainer" 
  id="wikiContainer"
  id = "modalTitle"
  id="closeModal"
  