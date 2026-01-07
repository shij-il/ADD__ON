async function fetchWeather() {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current_weather=true";

    const response = await fetch(url);
    const data = await response.json();

    console.log("Weather Data:");
    console.log(`Temperature: ${data.current_weather.temperature}°C`);
    console.log(`Wind Speed: ${data.current_weather.windspeed} km/h`);
  } catch (error) {
    console.log("Error fetching weather data");
  }
}

fetchWeather();