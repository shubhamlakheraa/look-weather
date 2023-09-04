import React from "react";
import "../App.css";

export default function Weather({ weatherData }) {
  return (
    <>
      <div className="inner-container">
        <img src={`/${weatherData.weather[0].main}.png`} />
        <h2 className="temp">
          {weatherData ? `${weatherData.main.temp} Celcius` : ""}
        </h2>
        <p className="main-weather">
          {weatherData ? weatherData.weather[0].main : ""}
        </p>
        <p>
          {weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : ""}{" "}
        </p>
      </div>

      <hr
        style={{
          background: "#D3D3D3",
          color: "#D3D3D3",
          borderColor: "#D3D3D3",
          height: "0.5px",
        }}
      />
      <div className="bottom-details">
        <div className="feels-like">
          <img src="/freezing.png" />
          <p>{weatherData ? weatherData.main.feels_like : ""}</p>
        </div>

        <div className="divider"></div>
        <div className="humidity">
          <img src="/humidity.png" />
          <p>{weatherData ? `${weatherData.main.humidity}%` : ""}</p>
        </div>
      </div>
    </>
  );
}
