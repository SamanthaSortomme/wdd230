const temperature = 40;
const speed = 5;
// const temperature = document.querySelector('#temperature');
// const speed = 5;
// const windchill = document.querySelector('#windchill');

function getWindchill(temperature, speed) {
    console.log("in the windchill function")

    if (temperature < 50 && speed > 3) {
        wchill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + ((0.4275 * temperature) * (speed ** 0.16));
        console.log(wchill)
        windchill.innerHTML = wchill.toFixed(0);
    }
    else {

    }
}

getWindchill(temperature, speed);