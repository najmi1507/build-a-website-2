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
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center bg-yellow-100 m-8",
    },
    {
      name: "New York",
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center text-black bg-yellow-100 m-8",
    },
    {
      name: "Tokyo",
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center text-black bg-yellow-100 m-8",
    },
    {
      name: "Doha",
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center text-black bg-yellow-100 m-8",
    },
    {
      name: "Yogyakarta",
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center text-black bg-yellow-100 m-8",
    }, 
    {
      name: "Kuala Lumpur",
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center text-black bg-yellow-100 m-8",
    },
    {
      name: "Sulaymaniyah",
      currentTemp: "0",
      weatherType: "",
      color: "flex flex-col items-center text-black bg-yellow-100 m-8",
    },
  ]);

  useEffect(() => {
    updateAllWeatherData();
  }, []);

   // Fetch the weather data for 1 city
   async function fetchWeatherData(cityName) {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        return weather;
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });

    return res;
  }

  // update the list data
  async function updateAllWeatherData(params) {
    cities.forEach(function (citiesItems, index) {
      let weatherData = {};
      let newCities = [...cities];

      fetchWeatherData(citiesItems.name).then((res) => {
        weatherData = res;

        newCities[index].currentTemp = weatherData.main.temp;
        newCities[index].weatherType = weatherData.weather[0].main;
        setCities(newCities);
      });
    });
  }



  return (
    // Container
    <div className="flex flex-col h-screen bg-green-100 font-serif">
      <div className="flex flex-col items-center text-6xl bg-red-100 text-blue-500 p-6"> Weather App</div>
      <span className="flex flex-wrap justify-center">
      {cities.map((item, index) => (
        <City cityName={item.name} temp={item.currentTemp} color={item.color} />
      ))}
      </span>
     </div>
  );
}

export default Home;
