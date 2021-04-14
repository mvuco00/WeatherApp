import React from "react";
import { WiHumidity } from "react-icons/wi";
import { CgCompressV } from "react-icons/cg";
import { FiWind } from "react-icons/fi";
import { RiTempColdLine, RiMistFill } from "react-icons/ri";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherSnow,
  TiWeatherNight
} from "react-icons/ti";

const CurrentWeather = ({ data }) => {
  const description = data.data.weather[0].description;
  return (
    <div className="weather">
      <div className="weather-info">
        <div className="weather-icon-text">
          <div className="weather-icon">
            {data.data.weather[0].icon[2]==='n'?<TiWeatherNight/>: description.includes("clouds") ? (
              <TiWeatherCloudy />
            ) : description.includes("rain") ? (
              <TiWeatherDownpour />
            ) : description.includes("thunderstorm") ? (
              <TiWeatherStormy />
            ) : description.includes("snow") ? (
              <TiWeatherSnow />
            ) : description.includes("clear") ? (
              <TiWeatherSunny />
            ) : description.includes("mist") ? (
              <RiMistFill />
            ) : (
              <TiWeatherCloudy />
            )}
          </div>
          <h4 className="weather-description">
            {data.data.weather[0].description}
          </h4>
        </div>
        <h1 className="weather-city">
          {data.data.name}, {data.data.sys.country}
        </h1>

        <h1 className="temperature"> {data.data.main.temp}°C</h1>
      </div>
      <div className="weather-details">
        <div className="details-containter">
          <div className="icon-title">
            <WiHumidity className="details-icon" />
            <h5 className="data-title">Humidity</h5>
          </div>
          <div className="data">
            <h4>{data.data.main.humidity}%</h4>
          </div>
        </div>
        <div className="details-containter">
          <div className="icon-title">
            <CgCompressV className="details-icon" />
            <h5 className="data-title">Air pressure</h5>
          </div>
          <div className="data">
            <h4>{data.data.main.pressure} PS</h4>
          </div>
        </div>
        <div className="details-containter">
          <div className="icon-title">
            <FiWind className="details-icon" />
            <h5 className="data-title">Wind speed</h5>
          </div>
          <div className="data">
            <h4>{data.data.wind.speed} km/h</h4>
          </div>
        </div>

        <div className="details-containter">
          <div className="icon-title">
            <RiTempColdLine className="details-icon" />
            <h5 className="data-title">Feels like</h5>
          </div>
          <div className="data">
            <h4>{data.data.main.feels_like} °C</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
