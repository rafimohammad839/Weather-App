/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("Delhi");
  const [location, setLocation] = useState("");

  const api = {
    key: "404f3c728d0fdf8966d8a53fb9adfcbd",
    baseURL: "https://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    fetch(`${api.baseURL}weather?q=${query}&&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [location]);

  const showTemp = () => {
    setLocation(query);
  };

  return (
    <div className="container">
      <div className={`weather-app ${data?.main?.temp < 20 ? 'cold': ''}`}>
        <div className="search">
          <input
            type="text"
            placeholder="Enter city..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button type="button" onClick={showTemp}>
            Search
          </button>
        </div>
        {data && (
          <div className="weather-data">
            <p>{data.name}, {data.sys.country}</p>
            <p>{data.main.temp} °C </p>
            <p>{data.weather[0].main}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
