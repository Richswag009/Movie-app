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
  const [searchValue, setSearchValue] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    // filter by genre function
    const getMovie = async () => {
      setIsLoading(true);
      const response = await axios.get(
        filterGenre ? filterGenres(`${filterGenre}`) : FetchDataFromApi()
      );
      const data = await response.data.results;
      setMovies(data);
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
      const data = await response.data.results;
      setMovies(data);
      setIsLoading(false);
    };

    getMovie();
    getAllMovie();
    filterMoviesByYear();
    getAllGenres();
    setIsLoading(false);
  }, [filterGenre, filterYear, searchValue]);

  const allMovies = movies.map((movie, i) => {
    return (
      <MoviesList movie={movie} key={i} genreList={genre} loading={loading} />
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
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center ">
          {!isLoading && allMovies}
          {isLoading && <p>loading......</p>}
        </div>
      )}
    </section>
  );
};

export default Home;
