const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

city.value = 'Minsk';

async function getWeather() {
    //city.value = city.textContent;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=1b4d525db0575aeefbf01e04e6da29c1&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherWind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    weatherHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    } else {
        weatherDescription.textContent = 'Error. Wrong name of town';
    temperature.textContent = ``;
    weatherWind.textContent = ``;
    weatherHumidity.textContent = ``;
    weatherIcon.className = "weather-icon owf";
    }
  };

  getWeather();

  function setLocalStorage() {
    localStorage.setItem('city', city.value);
  };
  city.addEventListener('change', setLocalStorage);
  city.addEventListener('change', getWeather);

  function getLocalStorage() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  };
  window.addEventListener('load', getLocalStorage)