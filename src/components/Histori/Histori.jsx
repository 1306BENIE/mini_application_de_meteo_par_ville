import React from "react";
import { useEffect, useState } from "react";

const Histori = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(stored);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return (
    <div className="history-container">
      <h2>Historique des villes recherchées</h2>

      {history.length === 0 ? (
        <p>Aucune ville recherchée pour le moment.</p>
      ) : (
        <ul>
          {history.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <button onClick={clearHistory} className="clear-btn">
          Effacer l'historique
        </button>
      )}
    </div>
  );
};

export default Histori;
