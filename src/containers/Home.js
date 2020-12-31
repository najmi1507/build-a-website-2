import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

function Home() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");

  const [cities, setCities] = useState([
    {
      name: "Jakarta",
      currentTemp: "",
      color: "text-black pt-5 pb-5 pl-14",
    },
    {
      name: "New York",
      currentTemp: "",
      color: "text-black bg-black bg-opacity-25 pt-5 pb-5 pl-14",
    },
    {
      name: "Tokyo",
      currentTemp: "",
      color: "text-black pt-5 pb-5 pl-14",
    },
    {
      name: "Qatar",
      currentTemp: "",
      color: "text-black bg-black bg-opacity-25 pt-5 pb-5 pl-14",
    },
    {
      name: "Dubai",
      currentTemp: "",
      color: "text-black pt-5 pb-5 pl-14",
    },
    {
      name: "Kuala Lumpur",
      currentTemp: "",
      color: "text-black bg-black bg-opacity-25 pt-5 pb-5 pl-14",
    },
    {
      name: "Sulaymaniyah",
      currentTemp: "",
      color: "text-black pt-5 pb-5 pl-14",
    },
  ]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Succesful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice in coding is to not use console.log
        console.warn(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);

  console.log("weatherData", weatherData);
  console.log("currentTemp", currentTemp);

  return (
    // Container
    <div className="flex flex-col h-screen bg-gray-50 font-serif">
      <div className="flex flex-col items-center pt-6 pb-5 text-6xl bg-black bg-opacity-75 text-white"> Weather App</div>
      {cities.map((item, index) => (
        <City cityName={item.name} temp={item.currentTemp} color={item.color} />
      ))}
    </div>
  );
}

export default Home;
