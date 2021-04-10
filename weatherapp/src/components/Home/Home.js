import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import FiveDaysWeather from "../FiveDaysWeather/FiveDaysWeather";
import Search from "../Search/Search";
import { GiSunrise, GiSunset } from "react-icons/gi";

const timestamp = (time) => {
  let unix_timestamp = time;
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2) + " h";
};

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Trilj");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (city !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [city]);

  const handleCityChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleCitySubmit = (e) => {
    e.preventDefault();
    setCity(input);
    setInput("");
  };
  console.log(data);

  return (
    <div className="App">
      <Search
        handleCityChange={handleCityChange}
        handleCitySubmit={handleCitySubmit}
        input={input}
      />
      {Object.keys(data).length !== 0 ? <CurrentWeather data={data} /> : null}
      {Object.keys(data).length !== 0 && (
        <div className="sun">
          <div className="sunrise">
            <div className="sun-icon">
              <GiSunrise />
            </div>
            <div>{timestamp(data.data.sys.sunrise)}</div>
          </div>
          <div className="sunset">
            <div className="sun-icon">
              <GiSunset />
            </div>
            <div>{timestamp(data.data.sys.sunset)}</div>
          </div>
        </div>
      )}
      {Object.keys(data).length !== 0 ? <FiveDaysWeather city={city} /> : null}
    </div>
  );
};

export default Home;
