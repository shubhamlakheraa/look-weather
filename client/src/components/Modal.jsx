import React, { useState, useEffect } from "react";
import "../App.css";
import Input from "./Input";
import Weather from "./Weather";

function Modal() {
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState();
  const [longi, setLongi] = useState();

  const [weatherData, setWeatherData] = useState("");

  const handleArrowClick = () => {
    setWeatherData("")
  }

  return (
    <>
      <div className="container">
        <div className="title-container">
            {weatherData ? <button onClick={handleArrowClick} style={{
                background: "none",
                border: "none",
                cursor: "pointer",
            }}><img src="/arrow.png" /></button> : 
            ""}
            
        <h3 className="title">Weather App</h3>
        </div>
        
        <hr
          style={{
            background: "#D3D3D3",
            color: "#D3D3D3",
            borderColor: "#D3D3D3",
            
            opacity: "50%"
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
