const https = require('https');
require('process')

const request = https.get("https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU", response => {
    let body = "";
// read data - change buffer to string
    response.on("data", data => {
        body += data.toString();
    });

    function printMessage(explanation) {
        const message = `${explanation}`;
        console.log(message);
      }

response.on("end", () => {
        //parse data - make into object
        const stats = JSON.parse(body);
        //print data
// console.log(stats);
printMessage(stats.explanation);
    });

});