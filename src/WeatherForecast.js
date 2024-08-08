import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <h3>Extended Forecast</h3>
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code={"few-clouds-day"} size={54} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max-temperature">10°</span>
            <span className="WeatherForecast-min-temperature">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
