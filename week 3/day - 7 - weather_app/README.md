# 🌦️ Weather App – Day 7 Mini Project

## 📌 Week Overview
This project is the **final mini project of the week**, focused on **asynchronous JavaScript**, **API handling**, and **clean logic flow**.  
The goal is to understand how real-world applications (especially React apps) fetch and display data from external APIs.

---

## 📅 Day 7 – Mini Project

### 🔹 Project Name
**Weather App**

### 🔹 Description
A simple Weather App that:
- Takes a city name as input
- Fetches live weather data using a public API
- Displays temperature and wind speed
- Handles errors gracefully
- Uses modern JavaScript (`async/await`)

UI is kept minimal to focus on **logic and async behavior**.

---

## 🌐 API Usage Explained
### 📍 APIs Used
### 1️⃣ Geocoding API (City → Coordinates)
https://geocoding-api.open-meteo.com/v1/search?name=CITY_NAME


**Purpose:**
- Converts city name into **latitude and longitude**
- Weather APIs require coordinates instead of city names

**Response Includes:**
- City name
- Latitude
- Longitude

---

### 2️⃣ Weather Forecast API
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true


**Purpose:**
- Fetches real-time weather data using coordinates

**Data Used:**
- Temperature (°C)
- Wind Speed (km/h)
---

## ⚙️ JavaScript & Async Logic Explained

### 🔹 Fetch API
- `fetch()` sends HTTP requests to APIs
- Returns a Promise

```js
const response = await fetch(url);
🔹 async / await

Makes asynchronous code easier to read
Avoids callback hell
async function getWeather() {
  const data = await fetch(url);
}

🔹 try / catch (Error Handling)

Prevents app crashes
Displays friendly error messages

try {
  // API logic
} catch (error) {
  console.error(error);
}

🔹 Template Literals
Used to display dynamic data
`Temperature: ${temperature}°C`

🔹 Destructuring
Extracts values from objects cleanly
const { latitude, longitude } = geoData.results[0];
,
---
## ▶️ How to Run the Project
🔹 Method 1: Browser
Open index.html
Enter city name
Click Get Weather
View weather details

🔹 Method 2: Node.js (Logic Testing)
Requires Node.js v18+
node script.js

## ✅ Features Implemented

- City-based weather search
- Live temperature display (°C)
- Wind speed information
- Async data fetching using `async/await`
- Error handling with `try-catch`
- User-friendly error messages
- Clean and readable JavaScript logic
- Uses template literals for dynamic output
- API response handling with destructuring

## What I Learned

How APIs work in real applications
How to chain multiple API calls
Importance of async/await in React
Error handling using try-catch
Clean JavaScript code structure
Real-world async data flow

## Why This Project Matters

React apps heavily depend on API calls
Builds strong foundation for:
API integration
useEffect
State management
Async logic

✅ Concepts Covered

Fetch API
Promises
async / await
Error handling
Template literals
Destructuring
Clean code practices

✨ Final Note
This project focuses on logic and understanding, making it ideal for React preparation, interviews, and real-world development.