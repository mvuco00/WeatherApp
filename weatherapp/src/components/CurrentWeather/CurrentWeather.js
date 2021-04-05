import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <div>
        <h1>
          {data.data.name}, {data.data.sys.country}
        </h1>
        <h3>{data.data.weather[0].description}</h3>
        <img
          src={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`}
          alt={data.data.weather[0].description}
        />
      </div>
      <div className="temperature">now: {data.data.main.temp}°C</div>
      <div className="temperature-max">max: {data.data.main.temp_max}°C</div>
      <div className="temperature-min">min: {data.data.main.temp_min}°C</div>
    </div>
  );
};

export default CurrentWeather;
