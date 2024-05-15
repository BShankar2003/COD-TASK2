// API key for OpenWeatherMap
const apiKey = "080f3062eb554c48f2ef4e52182469dc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data from OpenWeatherMap API
async function getWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

// Function to display weather data
function displayWeather(weather) {
    const weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = `
        <h2>${weather.name}</h2>
        <p>Temperature: ${weather.main.temp}°C</p>
        <p>Weather: ${weather.weather[0].description}</p>
        <p>Humidity: ${weather.main.humidity}%</p>
        <p>Wind Speed: ${weather.wind.speed} m/s</p>
    `;
}

// Function to search weather based on user input
function searchWeather() {
    const city = document.getElementById("cityInput").value;
    getWeather(city)
        .then(data => displayWeather(data))
        .catch(error => console.error("Error fetching weather data:", error));
}
