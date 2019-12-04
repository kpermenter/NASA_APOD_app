const select = document.getElementById("select");
const card = document.getElementById("card");

fetch("https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU")
.then(response => response.json()) 
.then(data => generateImage(data.hdurl, data.explanation))
// .then(data => generateText(data.hdurl))
// .then(data => console.log(data.explanation))


//RENDER FUNCTIONS
function generateImage(hdurl, explanation) {
const imageHTML = `
<img src="${hdurl}" alt>
`;
card.innerHTML = imageHTML;

const textHTML = `
    <p>"${explanation}"</p>
    `;
    select.innerHTML = textHTML;
}

// function generateText(textData) {
//     const textHTML = `
//     <p>"${textData}"</p>
//     `;
//     select.innerHTML = textHTML;
//     }


// const select = document.getElementById("select");
// const card = document.getElementById("card");

// fetch("https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU")
// .then(response => response.json()) 
// // .then(data => console.log(data.hdurl))
// .then(data => generateImage(data.hdurl))

// //HELPER FUNCTIONS
// function generateImage(data) {
// const html = `
// <img src="${data}" alt>
// <p>text</p>
// `;
// card.innerHTML = html;
// }