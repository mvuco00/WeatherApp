import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
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
  };

  return (
    <div className="App">
      <form onSubmit={handleCitySubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => handleCityChange(e)}
        />
        <button type="submit">SEND</button>
      </form>
      {Object.keys(data).length !== 0 ? <CurrentWeather data={data} /> : null}
    </div>
  );
};

export default Home;
