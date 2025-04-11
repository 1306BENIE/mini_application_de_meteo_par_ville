import { useState, useEffect } from "react";

// Clé API OpenWeatherMap (remplace avec ta vraie clé)
const API_KEY = "1c884020d0ef3b961ed5b54c367e6d9c";

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`
        );
        if (!res.ok) throw new Error("Ville introuvable");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};

export default useWeather;
