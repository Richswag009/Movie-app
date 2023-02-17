import React, { useState, useEffect } from "react";
import { FetchDataFromApi, filterByYear } from "../../API/FetchMovies";
import Header from "../Header/Header";
import axios from "axios";
import { searchMovies } from "../../API/FetchMovies";
import { filterGenres } from "../../API/FetchMovies";
import MoviesList from "../Movies/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterYear, setFilterYear] = useState("");

  useEffect(() => {
    // filter by genre function
    const getMovie = async () => {
      setLoading(true);
      const response = await axios.get(
        filterGenre ? filterGenres(`${filterGenre}`) : FetchDataFromApi()
      );
      const data = await response.data.results;
      setMovies(data);
      console.log(response.data.results);
    };

    // filter movies by year function
    const filterMoviesByYear = async () => {
      setLoading(true);
      const response = await axios.get(
        filterYear ? filterByYear(`${filterYear}`) : FetchDataFromApi()
      );
      const data = await response.data.results;
      setMovies(data);
      console.log(response.data.results);
    };

    // fetch all movies
    const getAllMovie = async () => {
      setLoading(true);
      const response = await axios.get(
        searchValue ? searchMovies(`${searchValue}`) : FetchDataFromApi()
      );
      console.log(response.data.results);
      const data = await response.data.results;
      setMovies(data);
    };

    getMovie();
    getAllMovie();
    filterMoviesByYear();
    setLoading(false);
  }, [filterGenre, filterYear, searchValue]);

  const allMovies = movies.map((movie, i) => {
    return <MoviesList movie={movie} key={i} />;
  });
  return (
    <div>
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
        <section className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          {allMovies}
        </section>
      )}
    </div>
  );
};

export default Home;
