import React from "react";

const FilterYearInputs = ({ onFilterYear, onSetFilterYear }) => {
  const year = [];
  for (let i = 2023; i >= 2010; i--) {
    year.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <select
      type="text"
      className="form-select w-full"
      value={onFilterYear}
      placeholder="type to search"
      onChange={(e) => onSetFilterYear(e.target.value)}
    >
      <option className="bg-red" value="">
        Filter By Year
      </option>
      {year}
    </select>
  );
};

export default FilterYearInputs;
