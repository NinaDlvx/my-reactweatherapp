import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import MetricSwitch from "./MetricSwitch";

export default function WeatherInfo(props) {
  return (
    <div className="current-weather-box">
      <h3>Current Weather</h3>
      <div className="row">
        <div className="col-sm-6">
          <h2>
            <strong>{props.data.city}</strong>
          </h2>
          <div className="highlighted-temp-box d-flex">
            <div className="highlighted-icon">
              <WeatherIcon code={props.data.icon} alt={props.data.icon} />
            </div>
            <div>
              <MetricSwitch celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <h2>Feels like {Math.round(props.data.feelsLike)}°</h2>
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
                <li className="text-capitalize">{props.data.condition}</li>
                <li>{Math.round(props.data.humidity)} %</li>
                <li>{Math.round(props.data.wind)} km/h</li>
                <li>{props.data.pressure} hPa</li>
                <br />
                <FormattedDate date={props.data.date} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
