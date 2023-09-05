import React, { useState } from "react";
import "../App.css";

function Input({
  setCityName,
  setLat,
  setLongi,
  setWeatherData,
}) {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState("")

  const fetchWeatherByCity = async (city) => {
    try {
      const apiKey = "1f871529d0c414d2e5aa04cf8aa5185b";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setErr("Error fetching weather data:");
    }
  };

  const fetchWeatherByLocation = async (lat, lon) => {
    try {
      const apiKey = "1f871529d0c414d2e5aa04cf8aa5185b";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      setLat(position.coords.latitude);
      setLongi(position.coords.longitude);
      fetchWeatherByLocation(
        position.coords.latitude,
        position.coords.longitude
      );

      // console.log(`Latitude: ${lat}, Longitude: ${longi}`);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setCityName(e.target.value);
      fetchWeatherByCity(inputValue);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Enter city name"
          onKeyDown={handleKeyDown}
          className="input"
          onChange={handleInputChange}
          value={inputValue}
        />
        {/* <p>{err ? err : ""}</p> */}
        {err ? <p>{err}</p> :
        ""}

        <div className="text-divider">or</div>

        <button
          onClick={handleGetLocation}
          style={{ backgroundColor: "#0096FF", color: "white" }}
          className="button"
        >
          Get Device Location
        </button>
      </div>
    </>
  );
}

export default Input;
