// select output elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
// Get the weather data from the API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=dee0f018f2545d071172175fb6f52c2c';

// api.openweathermap.org / data / 2.5 / weather ? q = London, uk& APPID=dee0f018f2545d071172175fb6f52c2c
async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch()
// captialize


function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// function capitalize(string) {
// }
// · ·return·`${string.charAt(0).toUpperCase()}${string.slice(1)}`;
// // display the results
// function displayResults(data) {
//     temperature.textContent = data.main.temp.toFixed(0);
// ·let desc = capitalize(data.weather[0].description); description.textContent = desc;
//     caption.textContent = 'Icon of current weather condition at Logandale which is ${desc}`; weathericon.src =
//     'https://openweathermap.org/img/w/${data.weather[0].icon}.png`; weathericon.alt='Icon of current weather condition at
// Logandale which is ${ desc } `;