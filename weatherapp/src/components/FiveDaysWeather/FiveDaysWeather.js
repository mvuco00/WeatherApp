import React, { useState, useEffect } from "react";
import axios from "axios";

const FiveDaysWeather = ({ city }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [city]);
  console.log(data);
  return <div>{city}</div>;
};

export default FiveDaysWeather;
