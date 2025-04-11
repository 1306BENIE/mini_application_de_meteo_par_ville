// Retourne le nom de l’image selon le type de météo
const getWeatherBackground = (main) => {
  switch (main?.toLowerCase()) {
    case "clear":
      return "/assets/clear.jpg";
    case "clouds":
      return "/assets/clouds.jpg";
    case "rain":
      return "/assets/rain.jpg";
    case "snow":
      return "/assets/snow.jpg";
    case "thunderstorm":
      return "/assets/thunderstorm.jpg";
    default:
      return "/assets/default.jpg";
  }
};

export default getWeatherBackground;
