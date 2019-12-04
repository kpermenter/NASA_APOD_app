const https = require('https');
require('process')

const request = https.get("https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU", response => {
    let body = "";

    response.on("data", data => {
        body += data.toString();
    });

    function printMessage(explanation) {
        const message = `${explanation}`;
        console.log(message);
      }

response.on("end", () => {
        const stats = JSON.parse(body);
        
printMessage(stats.explanation);
    });

});


////////////////clear


// $(document).ready(function() {
//     $.get("https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU",
//         {
//            data: JSON
//         },
//         function(response) {
//             console.log(response);
//             console.log(response.Data[0].body)
        
//             var content = document.getElementById("content")
           
//              var items = response.Data
//              var asteriodDiv = items.map((item)=>{
//                  return (
//                      `
//                      <div id="news-wrapper">
//                      <div id="news-body">
//                      <a href="${item.url}">
//                      <h3 id="news-header">${item.title}</h3>
//                      </a>
//                      <p id="news">${item.body}</p>
//                      </div>
//                      </div>`
//                  )
//                  console.log(item.title)
//              })
//              content.innerHTML = asteriodDiv

//       });

// });