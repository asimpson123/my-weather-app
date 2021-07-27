//search engine

let apiKey = "d918d4788f1c70d2f45815d886132c21";
// search button

function showWeatherCondition(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentPlace = response.data.name;
  let currentCountry = response.data.sys.country;
  let currentWeather = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);

  let heading = document.querySelector("h1");
  heading.innerHTML = `${currentPlace}, ${currentCountry}`;
  let weatherDescription = document.querySelector("p.weatherInfo");
  weatherDescription.innerHTML = `Weather: ${currentWeather}`;
  let mainTemp = document.querySelector(".temperature");
  mainTemp.innerHTML = `${temperature}`;
  let humidityData = document.querySelector(".currentHumidity");
  humidityData.innerHTML = `Humidity: ${humidity}%`;
  let windData = document.querySelector(".windSpeed");
  windData.innerHTML = `Wind: ${wind}km/h`;
}

function searchLocation(city) {
  let apiKey = "d918d4788f1c70d2f45815d886132c21";
  let apiUrlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrlSearch).then(showWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchLocation(city);
}

//current button

function showLocation(position) {
  let apiKey = "d918d4788f1c70d2f45815d886132c21";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#button-current");
currentLocationButton.addEventListener("click", getCurrentLocation);

//current day
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let milliseconds = now.getMilliseconds();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let currentDate = now.getDate();
let fullYear = now.getFullYear();
let day = days[now.getDay()];
let month = months[now.getMonth()];

let date = `${day}: ${hours}:${minutes}`;

let p = document.querySelector(".dateInfo");
p.innerHTML = `${day}: ${hours}:${minutes}`;

//change from C to F

//actual code from video
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
