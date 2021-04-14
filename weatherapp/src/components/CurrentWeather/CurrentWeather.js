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
} from "react-icons/ti";

const CurrentWeather = ({ data }) => {
  const description = data.data.weather[0].description;
  return (
    <div className="weather">
      <div className="weather-info">
        <div className="weather-icon-text">
          <div className="weather-icon">
            {description.includes("clouds") ? (
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
          <div className="icon">
            <WiHumidity />
          </div>
          <div className="data">
            <h4 className="data-title">Humidity</h4>
            <h4>{data.data.main.humidity}%</h4>
          </div>
        </div>
        <div className="details-containter">
          <div className="icon">
            <CgCompressV />
          </div>
          <div className="data">
            <h4 className="data-title">Air pressure</h4>
            <h4>{data.data.main.pressure} PS</h4>
          </div>
        </div>
        <div className="details-containter">
          <div className="icon">
            <FiWind />
          </div>
          <div className="data">
            <h4 className="data-title">Wind speed</h4>
            <h4>{data.data.wind.speed} km/h</h4>
          </div>
        </div>
        <div className="details-containter">
          <div className="icon">
            <RiTempColdLine />
          </div>
          <div className="data">
            <h4 className="data-title">Feels like</h4>
            <h4>{data.data.main.feels_like} °C</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
