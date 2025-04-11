import React from "react";
import { useState } from "react";
import useWeather from "../../hooks/useWeather";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import getWeatherBackground from "../../utils/getWeatherBackground";
import CityInfo from "../CityInfo/CityInfo";

const Home = () => {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const { weather, loading, error } = useWeather(submittedCity);

  const backgroundImage = getWeatherBackground(weather?.weather?.[0]?.main);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setSubmittedCity(city);

    // On récupère l'historique depuis le localStorage
    const storedHistory = JSON.parse(localStorage.getItem("history")) || [];

    // On ajoute la nouvelle ville (évite les doublons)
    if (!storedHistory.includes(city)) {
      const updatedHistory = [city, ...storedHistory];
      localStorage.setItem("history", JSON.stringify(updatedHistory));
    }
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        color: "#fff",
      }}
    >
      <section className="weather-section">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez une ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>

        <WeatherDisplay weather={weather} loading={loading} error={error} />
      </section>

      <section className="city-info-section">
        <CityInfo weather={weather} />
      </section>
    </div>
  );
};

export default Home;
