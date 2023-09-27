var config = {
    googleAPIKEY: "AIzaSyAY2m_uEw1dDg2RtZbiQP9rBQ1c7ZMeO44"
    //wikipediaAPIKEY = "SECRET_KEY_GOES_HERE"

}

let googleviewAPIKey = config.googleAPIKEY

// video look up meta data
// "https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata?key=${googleviewAPIKey}&address=${address}"

// video look up 
// https://aerialview.googleapis.com/v1/videos:lookupVideo?key=${googleviewAPIKey}&videoId=${videoID}"

// render video if it does not exist
/*$ curl -X POST -d '{ "address": "JW88+PJ5, AlUla 43562, Saudi Arabia"
}' -H 'Content-Type: application/json' "https://aerialview.googleapis.com/v1/videos:renderVideo?key=${googleviewAPIKey}"
*/



//TODO Change from any button click to specific buttons
//TODO create an event listener on 'close' modal click event, only if still hiding elements.
// $("button").on("click", function () {
//     let videoID = $(this).attr("data-video")

//     // alert($(this).attr("data-landmark"))
//     let googleAPIURL = `https://aerialview.googleapis.com/v1/videos:lookupVideo?key=${googleviewAPIKey}&videoId=${videoID}`;

//     // Performing our Fetch GET request
//     fetch(googleAPIURL)
//     // After the data comes back from the API
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
        
//         // Storing an array of results in the results variable
//         let output = data.uris.MP4_HIGH.landscapeUri;

//         const modalContainer = $('#videoContainer')
//         modalContainer.empty()

//         // To create video elements
//         const videoElement = $('<video>');
//         videoElement.attr('src', output);
//         videoElement.attr('controls', true);
//         modalContainer.append(videoElement);

//     })
// })
