import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Search from "../Search/Search";

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
    </div>
  );
};

export default Home;
