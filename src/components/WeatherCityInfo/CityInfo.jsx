import React from "react";
const CityInfo = ({ weather }) => {
  if (!weather) return <p>Aucune information disponible</p>;

  const { name, sys } = weather;

  return (
    <div className="city-info">
      <h2>Informations sur la ville</h2>
      <p>Ville : {name}</p>
      <p>Pays : {sys.country}</p>
    </div>
  );
};

export default CityInfo;
