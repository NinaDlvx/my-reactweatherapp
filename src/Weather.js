import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      wind: response.data.wind.speed,
      condition: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `a20035dd93a6tbea3b9cff448a2b7eeo`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>My ReactWeatherApp</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control w-100"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="current-weather-box">
          <div className="row">
            <div className="col-6">
              <h3>Current Weather</h3>
            </div>
            <div className="col-6">
              <h3 className="metricswitch">°C | °F</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <h2>
                <strong>{weatherData.city}</strong>
              </h2>
              <div className="highlighted-icon">
                <img src={weatherData.iconUrl} alt={weatherData.icon} />
              </div>
            </div>
            <div className="col-3">
              <div>
                <p className="highlighted-temp">
                  {Math.round(weatherData.temperature)}°
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <h2>Feels like {Math.round(weatherData.feelsLike)}°</h2>
              <div className="row">
                <div className="col-3">
                  <ul>
                    <li>Condition</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                    <li>Pressure</li>
                    <br />
                    <li>Date</li>
                  </ul>
                </div>
                <div className="col-9">
                  <ul>
                    <li className="text-capitalize">{weatherData.condition}</li>
                    <li>{Math.round(weatherData.humidity)} %</li>
                    <li>{Math.round(weatherData.wind)} km/h</li>
                    <li>{weatherData.pressure} hPa</li>
                    <br />
                    <FormattedDate date={weatherData.date} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
