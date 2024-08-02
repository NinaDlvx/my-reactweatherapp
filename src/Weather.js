import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>My ReactWeatherApp</h1>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="current-weather-box">
        <div className="row">
          <div className="col-6">
            <h3>Current Weather</h3>
          </div>
          <div className="col-6">°C | °F</div>
        </div>
        <div className="row">
          <div className="col-3">
            <h2>Brussels</h2>
            <img src="#" alt="icon of current weather" />
          </div>
          <div className="col-3">
            <div>
              <p>24°</p>
            </div>
          </div>
          <div className="col-6">
            <h2>Feels like 24°</h2>
            <div className="row">
              <div className="col-2">
                <ul>
                  <li>Minima</li>
                  <li>Maxima</li>
                  <li>Humidity</li>
                  <li>Wind</li>
                </ul>
              </div>
              <div className="col-10">
                <ul>
                  <li>10°</li>
                  <li>26°</li>
                  <li>73%</li>
                  <li>18 km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}