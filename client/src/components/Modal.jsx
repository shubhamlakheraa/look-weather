import React, { useState, useEffect } from "react";
import "../App.css";
import Input from "./Input";
import Weather from "./Weather";

function Modal() {
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState();
  const [longi, setLongi] = useState();

  const [weatherData, setWeatherData] = useState("");

  return (
    <>
      <div className="container">
        <h3 className="title">Weather App</h3>
        <hr
          style={{
            background: "#D3D3D3",
            color: "#D3D3D3",
            borderColor: "#D3D3D3",
            height: "0.5px",
          }}
        />

        {weatherData ? (
          <Weather
            cityName={cityName}
            lat={lat}
            longi={longi}
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
        ) : (
          <Input
            cityName={cityName}
            setCityName={setCityName}
            lat={lat}
            setLat={setLat}
            longi={longi}
            setLongi={setLongi}
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
        )}
      </div>
    </>
  );
}

export default Modal;
