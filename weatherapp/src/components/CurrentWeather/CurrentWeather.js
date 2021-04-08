import React from "react";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`}
          alt={data.data.weather[0].description}
        />

        <h1 className="temperature"> {data.data.main.temp}°C</h1>
        <h4 className="weather-description">
          {data.data.weather[0].description}
        </h4>
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
            <h4>Humidity</h4>
            <h4>{data.data.main.humidity}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
