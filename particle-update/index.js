  
const head = document.getElementById("title");
const time = document.getElementById("date");
const card = document.getElementById("card");
const body = document.getElementById("body");

function fetchData(url) {
    return fetch(url)
        .then(res => res.json())
}

fetchData("https://api.nasa.gov/planetary/apod?api_key=AdxcWHpgEafWbnh3UvyHDetm27nHLofe9vRS8DHU")
.then(data => generateContent(data.title, data.date, data.hdurl, data.explanation))

function generateContent(title, date, hdurl, explanation) {
const titleHTML = `
<h1>${title}</h1>
`;
const dateHTML = `
<h6>${date}</h6>
`;
const imageHTML = `
<img src="${hdurl}" alt>
`;
const textHTML = `
    <p>"${explanation}"</p>
    `;
    head.innerHTML = titleHTML;
    time.innerHTML = dateHTML;
    card.innerHTML = imageHTML;
    body.innerHTML = textHTML;
}