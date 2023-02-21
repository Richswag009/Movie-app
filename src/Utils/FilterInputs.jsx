import React from "react";

const FilterInputs = ({ onFilterGenre, onSetFilterGenre }) => {
  return (
    <select
      type="text"
      className="form-select w-full"
      value={onFilterGenre}
      placeholder="type to search"
      onChange={(e) => onSetFilterGenre(e.target.value)}
    >
      <option className="bg-red" value="">
        Filter By Genre
      </option>
      <option value="28">Action & Adventure</option>
      <option value="12">Adventure</option>
      <option value="16">Animation</option>
      <option value="35">Comedy</option>
      <option value="18">Drama</option>
      <option value="99">Documentaries</option>
      <option value="10751">Family</option>
      <option value="27">Horror</option>
      <option value="10749">Romance</option>
      <option value="10765">Sci-Fi & Fantasy</option>
    </select>
  );
};

export default FilterInputs;
