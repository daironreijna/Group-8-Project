// API Key // 
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// let googleAPIURL = "https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters"
// let googleviewAPIKey = config.googleAPIKEY
// "https://aerialview.googleapis.com/v1/videos:lookupVideo?key=YOUR_API_KEY&address=POSTAL_ADDRESS"

// curl -X GET "https://aerialview.googleapis.com/v1/videos:lookupVideo?key=YOUR_API_KEY&address=600%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094111"





$("button").on("click", function () {
  let landmark = $(this).attr("data-landmark")

  // alert($(this).attr("data-landmark"))
  let wikiAPIURL = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${landmark}&limit=1`

  $("#The-cards").hide()

  $("#Home").hide()

  $("#data-landmark").show()

  // window.location.href="index.html";

  // Performing our Fetch GET request
  fetch(wikiAPIURL)
    // After the data comes back from the API
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Storing an array of results in the results variable
      let results = data.pages;

      console.log(results);

      // Creating and storing a div tag
      var landmarkDiv = $("<div>");

      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Landmark: " + results.excerpt);

      // // Creating and storing an image tag
      // var landmarkImage = $("<img>");
      // // Setting the src attribute of the image to a property pulled off the result item
      // landmarkImage.attr("src", results[i].images.fixed_height.url);

      // Appending the paragraph and image tag to the landmarkDiv
      landmarkDiv.append(p);
      // landmarkDiv.append(landmarkImage);

      // Prependng the landmarkDiv to the HTML page in the "#gifs-appear-here" div
      $("#data-landmark").prepend(landmarkDiv);

      for (const page of data.pages) {
        console.log(page.excerpt);
        // window.show(page.excerpt)
    }
      
    })
    
})



// videoId	
// string

// An ID returned from videos.renderVideo.

// address	
// string

// A US postal address.

// https://aerialview.googleapis.com/v1/videos:lookupVideo

// videoId	
// string

// An ID for the video, and the recommended way to retrieve a video.

// captureDate	
// object (Date)

// The date at which the imagery used in the video was captured. This will be at a month-level granularity.

// duration	
// string (Duration format)

// The length of the video.

// A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

// "MP4_MEDIUM": {
//     "landscapeUri": "https://rr1---sn-p5qs7nzy.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZKvJBpnc-LYP8v6T-AM&ip=0.0.0.0&id=5f50000000000001&itag=374&source=aerial_view&mh=dX&mm=31&mn=sn-p5qs7nzy&ms=au&mv=D&mvi=1&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=25879743&dur=40.016&lmt=1683384621721411&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIhANzPUc2SwvlDZ-nyhxNfY8CGVjyitnfpS7MvbXb_f5kSAiAVArz85QjBBAZw-8ugFPIggKCO54IhR6xDg4rfJIh1Tw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgJJyNxWDuqLZ89X5wThN1IsVJyvyZ7Qw1Z4jqhCyahjgCIQD9hOjN3hDvX3CN5LiNkoLm-GGAuriUtv0PhtREc7yTVQ==",
//     "portraitUri": "https://rr5---sn-p5qlsn7s.googlevideo.com/videoplayback?expire=1683655708&ei=KIpaZJiuBo3g-LYPhtaG6AU&ip=0.0.0.0&id=9f50000000000001&itag=374&source=aerial_view&mh=D3&mm=31&mn=sn-p5qlsn7s&ms=au&mv=D&mvi=5&pl=0&susc=av&mime=video/mp4&vprv=1&gir=yes&clen=8228161&dur=40.016&lmt=1683384373331986&mt=1683654760&txp=0011224&sparams=expire,ei,ip,id,itag,source,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgKsfEQB3GbLqYP5tmHwmkMVqVlfcNl7SBiuBqRw748VsCIQDgkwyNF4jOuOjoX5Qw6TgbpdIPhqS-EvCZ2g2JWPYpbw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgHdDEnopIcI2jzLkRLOaKz8Cq1Pwm2yl3nJzaru1dBEsCIQCgor9bkMfAeULTq3EwjzCGjB_RvGBqhGfhJblbBloJpg=="
//   },

// {
//     "videoId": string,
//     "captureDate": {
//       object (Date)
//     },
//     "duration": string
//   }


//   Video not found
// The video hasn't been previously rendered, and therefore is not yet in Google's database.


// {
//   "error": {
//     "code": 404,
//     "message": "Video not found.",
//     "status": "NOT_FOUND"
//   }
// }