const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weathericon');
const captionDesc = document.querySelector('figcaption');
const windchill = document.querySelector('#windchill');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Moapa%20Valley&units=imperial&appid=dee0f018f2545d071172175fb6f52c2c';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    getWindchill(currentTemp.innerHTML, weatherData.wind.speed);
}

function getWindchill(temperature, speed) {

    if (temperature < 50 && speed > 3) {
        wchill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + ((0.4275 * temperature) * (speed ** 0.16));
        console.log(wchill)
        windchill.innerHTML = wchill.toFixed(0);
    }
    else {

    }
}
