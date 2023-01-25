// select output elements
const temperature = document.querySelector('#temperature'); const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon'); const caption = document.querySelector('figcaption');
// Get the weather data from the API
const apiURL =

    api.openweathermap.org / data / 2.5 / weather ? q = London, uk& APPID=dee0f018f2545d071172175fb6f52c2c
async function apiFetch() {
    try {
....const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
        }
        console.log('Response not OK ${await response.text()}`);
} catch (error) {
        console.log('Error: ${error.message}');
    }
}
api Fetch()
// captialize


function capitalize(string) {
}
· ·return·`${string.charAt(0).toUpperCase()}${string.slice(1)}`;
// display the results
function displayResults(data) {
    temperature.textContent = data.main.temp.toFixed(0);
·let desc = capitalize(data.weather[0].description); description.textContent = desc;
    caption.textContent = 'Icon of current weather condition at Logandale which is ${desc}`; weathericon.src =
    'https://openweathermap.org/img/w/${data.weather[0].icon}.png`; weathericon.alt='Icon of current weather condition at
Logandale which is ${ desc } `;