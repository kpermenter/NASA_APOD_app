// Problem: look at user badge count and points
// Solution: get treehouse API for profile information

//request module
const https = require('https');
require('process')

//print message to console
function printMessage(username, badgeCount, points) {
const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
console.log(message)
}

function getProfile(username){
  try {
// connect to API URL(https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
// read data - change buffer to string
    response.on("data", data => {
        body += data.toString();
    });

response.on("end", () => {
        //parse data - make into object
        const profile = JSON.parse(body);
        //print data
printMessage(username, profile.badges.length, profile.points.javascript);
    });

});
//handle errors
request.on("error", error => console.error(`Problem with request: ${error.message}`));
} catch(error) {
    console.error(error.message);
}
}


const users = process.argv.slice(2);

users.forEach(getProfile);
