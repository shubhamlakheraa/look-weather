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
        <div className="city-country">
            <img src="/placeholder.png" />
        <p>
          {weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : ""}{" "}
        </p>
        </div>
        
      </div>

      <hr
        style={{
          background: "#D3D3D3",
          color: "#D3D3D3",
          borderColor: "#D3D3D3",
          opacity: "50%",
        }}
      />
      <div className="bottom-details">
        <div className="small-contain">
        <div className="feels-like">
          <img src="/freezing.png" />
          <p style={{
            marginBottom: "0",
          }}>{weatherData ? weatherData.main.feels_like : ""}</p>
        </div>
        <p className="des-freeze">Feels Like</p>
        </div>
        

        <div className="divider"></div>
        <div>
        <div className="humidity">
          <img src="/humidity.png" />
          <p style={{
            marginBottom: "0",
          }}>{weatherData ? `${weatherData.main.humidity}%` : ""}</p>
        </div>
        <p className="des-freeze">Humidity</p>
        </div>
      </div>
    </>
  );
}
