import React from "react";

const WeatherDisplay = ({ weather, loading, error }) => {
  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weather) return <p>Recherchez une ville pour afficher la météo.</p>;

  const { main, weather: weatherInfo } = weather;

  return (
    <div className="weather-display">
      <h2>Météo actuelle</h2>
      <p>{weatherInfo[0].description}</p>
      <p>Température : {main.temp}°C</p>
      <p>Ressenti : {main.feels_like}°C</p>
      <p>Humidité : {main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
