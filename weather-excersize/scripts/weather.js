const currentTempSpan = document.querySelector('#current-temp');
const weatherImage = document.querySelector('#weather-icon');
const figureCap = document.querySelector('figcaption');
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.7497&lon=6.6373&appid=e4aaa1489903c534b7a331381302a6b6&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw await response.text();
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTempSpan.textContent = data.main.temp;
    weatherImage.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherImage.alt = data.weather[0].description
    figureCap.textContent = data.weather[0].main
}

apiFetch();