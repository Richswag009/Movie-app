import React from "react";
import SearchInputs from "../../Utils/SearchInputs";
import FilterInputs from "../../Utils/FilterInputs";
import FilterYearInputs from "../../Utils/FilterYearInputs";
const Header = ({
  searchValue,
  setSearchValue,
  onFilterGenre,
  onSetFilterGenre,
  onFilterYear,
  onSetFilterYear,
}) => {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:justify-between items-center ">
      <h1 className="text-2xl font-bold"> Movies</h1>
      <SearchInputs setSearchValue={setSearchValue} searchValue={searchValue} />
      <FilterInputs
        onFilterGenre={onFilterGenre}
        onSetFilterGenre={onSetFilterGenre}
      />
      <FilterYearInputs
        onFilterYear={onFilterYear}
        onSetFilterYear={onSetFilterYear}
      />
    </header>
  );
};

export default Header;
