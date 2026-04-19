# 🌦️ React Weather App

A simple and clean Weather App built using **React + Material UI + OpenWeather API**.
Users can search any city and get real-time weather details like temperature, humidity, and weather conditions.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays temperature, min & max temperature
* 💧 Shows humidity
* ☁️ Weather condition description (clear sky, haze, etc.)
* 🎨 Clean UI using Material UI
* ⚡ Fast and responsive

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* Material UI (MUI)
* OpenWeather API
* CSS

---

## 📂 Project Structure

```
react-weather-widget/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   ├── SearchBox.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ How It Works

1. User enters a city name
2. SearchBox component sends request to OpenWeather API
3. API returns weather data
4. Data is passed to parent (WeatherApp)
5. InfoBox component displays the result

---

## 🔑 API Setup

This project uses **OpenWeather API**

1. Go to: https://openweathermap.org/api
2. Create account & generate API key
3. Replace API key in your code:

```js
const API_KEY = "YOUR_API_KEY";
```

---

## 🖥️ Installation & Run

```bash
# Clone the repo
git clone https://github.com/your-username/react-weather-widget.git

# Go to project folder
cd react-weather-widget

# Install dependencies
npm install

# Run project
npm run dev

---


## 🙌 Author

Narendra Singh Bisht

