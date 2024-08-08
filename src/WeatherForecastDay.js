import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecastday">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={54} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max-temperature">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-min-temperature">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
