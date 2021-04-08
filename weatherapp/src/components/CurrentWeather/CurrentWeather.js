import React from "react";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { CgCompressV } from "react-icons/cg";
import { FiWind } from "react-icons/fi";
import { RiTempColdLine } from "react-icons/ri";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="weather-info">
        <div className="weather-icon-text">
          <img
            src={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`}
            alt={data.data.weather[0].description}
          />
          <h4 className="weather-description">
            {data.data.weather[0].description}
          </h4>
        </div>

        <h1 className="temperature"> {data.data.main.temp}°C</h1>

        <h1 className="weather-city">
          <MdLocationOn className="pin" />
          {data.data.name}, {data.data.sys.country}
        </h1>
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
