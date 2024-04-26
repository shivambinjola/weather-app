import React, { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
import SearchIcon from "./assets/search.svg";
import TempIcon from "./assets/temp.svg";
import HumidityIcon from "./assets/humidity.svg";
import SpeedIcon from "./assets/wind.svg";

function App() {
  const [city, setCity] = useState("Dehradun");
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84c80a0e151ad60ee951f1ee8567095e`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  console.log(weatherData);

  return (
    <main className="bg-mainbg h-[100vh] font-poppins">
      <div className="flex justify-between px-10 py-5 items-center xs:px-5">
        <h1 className="text-orange-300 text-2xl font-poppins xs:text-xs">
          Weather app
        </h1>
        <div className=" bg-[#444444] rounded-full overflow-hidden pr-5 space-x-2 shadow-md shadow-black flex items-center">
          <input
            className="bg-transparent w-[50vw] h-10 rounded-full outline-none pl-5 text-white xs:w-[40vw]"
            placeholder="Search"
            type="search"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button onClick={fetchWeather}>
            <img className="w-5 h-5" src={SearchIcon} />
          </button>
        </div>
      </div>
      <div className="text-white mt-20 px-10 xs:px-5">
        <div className="flex items-center space-x-5">
          <h2 className="text-6xl font-medium xs:text-2xl">
            {weatherData?.name}
          </h2>
          <div className="xs:text-xs">
            <h5>{weatherData?.weather[0].main}</h5>
            <p>{weatherData?.weather[0].description}</p>
          </div>
        </div>
        <div className="bg-[#444444] shadow-lg p-5 shadow-black rounded-3xl mt-10 space-y-3">
          <p className="text-2xl xs:text-lg font-medium flex items-center gap-2 ">
            <span>
              <img className="w-10 h-10 xs:w-8 xs:h-8" src={TempIcon} />
            </span>
            &nbsp; Temperature:
            <span className="text-orange-500 text-lg xs:text-xs">
              {weatherData?.main.temp}
            </span>
            °C
          </p>
          <p className="text-2xl xs:text-lg font-medium flex items-center gap-2">
            <span>
              <img className="w-10 h-10 xs:w-8 xs:h-8" src={HumidityIcon} />
            </span>
            &nbsp; Humidity:
            <span className="text-orange-500 text-lg xs:text-xs">
              {weatherData?.main.humidity}
            </span>
            %
          </p>
          <p className="text-2xl xs:text-lg font-medium flex items-center gap-2">
            <span>
              <img className="w-10 h-10 xs:w-8 xs:h-8" src={SpeedIcon} />
            </span>
            &nbsp; Wind Speed:
            <span className="text-orange-500 text-lg xs:text-xs">
              {weatherData?.wind.speed}{" "}
            </span>
            m/s
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
