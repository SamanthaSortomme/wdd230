

const currentTemp = document.querySelector('#temperature');
const currentHumidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weathericon');
const captionDesc = document.querySelector('figcaption');
// ====================================TOMORROW==========================
const tomTemp = document.querySelector('#tomTemperature');
const tomHumidity = document.querySelector('#tomHumidity');
const tomWeatherIcon = document.querySelector('#tomWeathericon');
const tomCaptionDesc = document.querySelector('#tomFigcaption');
// =======================================OVERMORROW========================
const overTemp = document.querySelector('#overTemperature');
const overHumidity = document.querySelector('#overHumidity');
const overWeatherIcon = document.querySelector('#overWeathericon');
const overCaptionDesc = document.querySelector('#overFigcaption');

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=dee0f018f2545d071172175fb6f52c2c';
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=dee0f018f2545d071172175fb6f52c2c';

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

    currentTemp.innerHTML = weatherData.list[0].main.temp.toFixed(0);
    currentHumidity.innerHTML = weatherData.list[0].main.humidity.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    // ==============================TOMORROW==================================
    tomTemp.innerHTML = weatherData.list[8].main.temp.toFixed(0);
    tomHumidity.innerHTML = weatherData.list[8].main.humidity.toFixed(0);

    const tomiconsrc = `https://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`;
    const tomDesc = weatherData.list[8].weather[0].description;

    tomWeatherIcon.setAttribute('src', iconsrc);
    tomWeatherIcon.setAttribute('alt', desc);
    tomCaptionDesc.textContent = tomDesc;
    // ===============================OVERMORROW================================
    overTemp.innerHTML = weatherData.list[16].main.temp.toFixed(0);
    overHumidity.innerHTML = weatherData.list[16].main.humidity.toFixed(0);

    const overIconsrc = `https://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png`;
    const overDesc = weatherData.list[16].weather[0].description;

    overWeatherIcon.setAttribute('src', iconsrc);
    overWeatherIcon.setAttribute('alt', desc);
    overCaptionDesc.textContent = overDesc;

}


// ==========================LAST UPDATED============================

function updateDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    const formatted_date = mm + '~' + dd + '~' + yyyy;
    console.log(formatted_date);

    document.querySelector('#lastModified').innerHTML = formatted_date;
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(date);
    let statement = ` Today is ${fulldateUK}`;
    document.querySelector('#lastModified').innerHTML = statement;
}
updateDate();

if (document.lastModified) {
    document.getElementById('lastModified').innerHTML =
        new Date(document.lastModified).toLocaleString();
}

//=======================LOCAL STORAGE========================
drinks = document.getElementById('totalDrinks');
const orderedDrinks = Number(window.localStorage.getItem('total-drinks'));

if (orderedDrinks !== 0) {
    if (orderedDrinks === 1) {
        drinks.innerHTML = `You have ordered ${orderedDrinks} specialty drink since your first visit (or last cache clearing)! WOOHOO!`;
    }
    else {
        drinks.innerHTML = `You have ordered a total of ${orderedDrinks} specialty drinks since your first visit (or last cache clearing).`;
    }
}
else {
    drinks.innerHTML = 'Did you know that you can order specialty fruit drinks online? Head over to the "order online" page to see our selections!';
}