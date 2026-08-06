import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Replace with your actual OpenWeather API key
  const API_KEY = "";

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`;

      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError("City not found.");
        } else if (err.response.status === 401) {
          setError("Invalid API key.");
        } else {
          setError("Failed to fetch weather data.");
        }
      } else {
        setError("Network error. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>🌤 React Weather App</h2>

      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px",
            width: "65%",
            marginRight: "10px",
          }}
        />

        <button type="submit" style={{ padding: "10px 15px" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />

          <h1>{Math.round(weather.main.temp)}°C</h1>

          <p style={{ textTransform: "capitalize" }}>
            {weather.weather[0].description}
          </p>

          <p>
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>

          <p>
            <strong>Wind Speed:</strong> {weather.wind.speed} m/s
          </p>

          <p>
            <strong>Feels Like:</strong> {Math.round(weather.main.feels_like)}°C
          </p>

          <p>
            <strong>Pressure:</strong> {weather.main.pressure} hPa
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
