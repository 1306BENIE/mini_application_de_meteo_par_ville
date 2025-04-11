import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Entrez une ville..." />
      <button>Rechercher</button>
    </div>
  );
};

export default SearchBar;
