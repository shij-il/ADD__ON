const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current_weather=true";

async function fetchWeatherData() {
  const response = await fetch(WEATHER_URL);
  return response.json();
}

async function showWeather() {
  try {
    const data = await fetchWeatherData();
    const { temperature, windspeed } = data.current_weather;

    console.log("Weather Data:");
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Wind Speed: ${windspeed} km/h`);
  } catch (error) {
    console.log("Error fetching weather data");
  }
}
showWeather();