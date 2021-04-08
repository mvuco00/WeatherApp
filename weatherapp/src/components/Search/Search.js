import React from "react";

const Search = ({ handleCitySubmit, handleCityChange, input }) => {
  return (
    <form onSubmit={handleCitySubmit} className="form-search">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => handleCityChange(e)}
      />
    </form>
  );
};

export default Search;
