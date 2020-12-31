import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WeatherImage from "../components/WeatherImage";
import "../App.css";

// TODO
// - implement API
// - add props to details screen
// - style the details screen

function Details() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    /* console.log(process.env.REACT_APP_WEATHER_API_KEY); */
    const apiDotenv = process.env.REACT_APP_WEATHER_API_KEY
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("name");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  return (
    // Container
    <div className="flex flex-col items-center h-screen bg-pink-200">
      <div className="pt-6 text-6xl text-black font-bold">Weather in {city}</div>

      <div className="flex flex-col p-8 m-4 border-2 rounded-md border-black text-black text-2xl items-center">
        <WeatherImage weatherType={weatherType} className="text-xl" />
        <div>{weatherType}</div>
        <div>Current Temperature : {currentTemp}</div>
      </div>

    <div className="text-black text-xl">
      <div>High Temperature : {highTemp}</div>
      <div>Cloudiness : {cloudiness}</div>
      <div>Low Temperature : {lowTemp}</div>
      <div>Humidity : {humidity}</div>
      <div>Wind Speed : {windSpeed}</div>
    </div>
    </div>
  );
}

export default Details;
