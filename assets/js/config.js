var config = {
    googleAPIKEY: "SECRET_KEY_GOES_HERE"
    //wikipediaAPIKEY = "SECRET_KEY_GOES_HERE"

}

let googleviewAPIKey = config.googleAPIKEY

// video look up meta data
// "https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata?key=AIzaSyAY2m_uEw1dDg2RtZbiQP9rBQ1c7ZMeO44&address=600%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094111"

// video look up 
// https://aerialview.googleapis.com/v1/videos:lookupVideo?key=AIzaSyAY2m_uEw1dDg2RtZbiQP9rBQ1c7ZMeO44&videoId=Ul1naoFmqo69U1zUVrQRkc"

// render video if it does not exist
/*$ curl -X POST -d '{                                                                                                                                                          "address": "JW88+PJ5, AlUla 43562, Saudi Arabia"
}' -H 'Content-Type: application/json' "https://aerialview.googleapis.com/v1/videos:renderVideo?key=AIzaSyAY2m_uEw1dDg2RtZbiQP9rBQ1c7ZMeO44"
*/



//TODO Change from any button click to specific buttons
//TODO create an event listener on 'close' modal click event, only if still hiding elements.
$("button").on("click", function () {
    let videoID = $(this).attr("data-video")

    // alert($(this).attr("data-landmark"))
    let googleAPIURL = `https://aerialview.googleapis.com/v1/videos:lookupVideo?key=${googleviewAPIKey}&videoId=${videoID}`;

    // Performing our Fetch GET request
    fetch(googleAPIURL)
        // After the data comes back from the API
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            // Storing an array of results in the results variable
            let output = data.uris.MP4_HIGH.landscapeUri;

            // To create video elements
            const videoElement = $('<video>');
            videoElement.attr('src', output);
            videoElement.attr('controls', true);
            $('#videoContainer').append(videoElement);

        })
})
