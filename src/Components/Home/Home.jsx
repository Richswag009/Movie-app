import React, { useState, useEffect } from "react";
import {
  FetchDataFromApi,
  filterByYear,
  getGenres,
  getTvGenres,
} from "../../API/FetchMovies";
import Header from "../Header/Header";
import axios from "axios";
import { searchMovies } from "../../API/FetchMovies";
import { filterGenres } from "../../API/FetchMovies";
import MoviesList from "../Movies/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [genre, setGenre] = useState([]);

  // filter by genre function
  const getMovie = async () => {
    setIsLoading(true);

    const response = await axios.get(
      filterGenre ? filterGenres(`${filterGenre}`) : FetchDataFromApi()
    );

    const data = await response.data.results;
    setMovies(data);
    setIsLoading(false);
  };

  // get all genres
  const getAllGenres = async () => {
    setIsLoading(true);
    const response = await axios.get(getGenres());
    const tvResponse = await axios.get(getTvGenres());

    //  setting both request to a state using  spread operators
    setGenre([...response.data.genres, ...tvResponse.data.genres]);
    setIsLoading(false);
  };

  // filter movies by year function
  const filterMoviesByYear = async () => {
    setIsLoading(true);
    const response = await axios.get(
      filterYear ? filterByYear(`${filterYear}`) : FetchDataFromApi()
    );
    const data = await response.data.results;
    setMovies(data);
    setIsLoading(false);
  };

  // fetch all movies
  const getAllMovie = async () => {
    setIsLoading(true);
    const response = await axios.get(
      searchValue ? searchMovies(`${searchValue}`) : FetchDataFromApi()
    );
    // if(!response.)
    const data = await response.data.results;
    setMovies(data);
    setIsLoading(false);
  };

  // using useeffect on page load
  useEffect(() => {
    getMovie();
    getAllMovie();
    filterMoviesByYear();
    getAllGenres();
  }, [filterGenre, filterYear, searchValue]);

  //
  const allMovies = movies.map((movie, i) => {
    return (
      <MoviesList
        movie={movie}
        key={i}
        genreList={genre}
        isLoading={isLoading}
      />
    );
  });

  //
  return (
    <section className="container mx-auto items-center">
      <Header
        searchValue={searchValue}
        onFilterGenre={filterGenre}
        onSetFilterGenre={setFilterGenre}
        setSearchValue={setSearchValue}
        onFilterYear={filterYear}
        onSetFilterYear={setFilterYear}
      />

      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-1 items-center ">
        {!isLoading && allMovies}
        {isLoading && <p className="text-3xl ">Loading......</p>}
        {/* <p>{!isLoading && error & <p>{error}</p>}</p> */}
      </div>
    </section>
  );
};

export default Home;
