const resultDiv = document.getElementById("result");

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        resultDiv.innerText = "❌ Please enter a city name";
        return;
    }
    try {
        const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const geoResponse = await fetch(geoURL);
        const geoData = await geoResponse.json();

        if (!geoData.results) {
            resultDiv.innerText = "❌ City not found";
            return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        const temperature = weatherData.current_weather.temperature;
        const windSpeed = weatherData.current_weather.windspeed;

        resultDiv.innerHTML = `
            <p>📍 <strong>${name}</strong></p>
            <p>🌡️ Temperature: ${temperature}°C</p>
            <p>💨 Wind Speed: ${windSpeed} km/h</p>
        `;
    } catch (error) {
        resultDiv.innerText = "⚠️ Error fetching weather data";
        console.error(error);
    }
}