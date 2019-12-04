//AXIOS CALL
const https = require('https');
const request = require('axios');
const $ = require('jquery');
const jsdom = require('jsdom')
const axios = require('axios');

const pullData = () => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}

///////////////////////////RENDER/////
function render(){
    $(document).ready(function(){
    var content = response.data[0].url;
    var response = response.data[0].explanation;

    $("#myUrl").attr('src', content);
    $("#response").textContent(response);
    });
};

render(pullData);

//   $.ajax(settings).done(function (response) {
//     $(document).ready(function(){
//     var content = response.data[0].url;
//     $("#myUrl").attr('src', content);
//     });
// });

// $.ajax(settings).done(function (response) {
//     $(document).ready(function(){
//     var response = response.data[0].explanation;
//     $("#response").textContent(response);
//     });
// });


