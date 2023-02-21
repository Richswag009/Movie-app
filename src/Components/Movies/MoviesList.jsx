import React from "react";
import Card from "../../Utils/Card";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const MoviesList = ({ movie, genreList, loading }) => {
  // function to truncate  overview
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + ". . ." : str;
  }

  const { genre_ids } = movie;
  // console.log("id", genre_ids);
  const genereNames = genreList
    ? genre_ids.map((id) => {
        return genreList.find((genre) => genre?.id === id);
      })
    : [];

  return (
    <Card>
      <img
        src={`${baseUrl}${movie?.backdrop_path || movie.poster_path} `}
        alt={movie?.title || movie?.original_title || movie?.original_name}
        className="w-full h-42 transition-all transform hover:scale-95 delay-300 duration-300 ease-in-out"
      />
      <div className="p-3 mb-5  overflow-auto w-full">
        <h1 className="font-bold text-md leading-tight py-1 ">
          {movie?.title || movie?.original_title || movie?.original_name}
        </h1>

        <p className="text-sm font-bold ">
          Genres:
          <em className="font-normal">
            {genereNames &&
              genereNames.map((value, i) => (
                <span key={i}>
                  {i ? ", " : ""}
                  {value?.name}
                </span>
              ))}
          </em>
        </p>

        <p className="text-sm font-bold ">
          Overview :{" "}
          <em className="font-normal">{truncate(movie.overview, 200)}</em>
        </p>
        {/* release date */}
        <p className="font-bold">
          Release Date:{" "}
          <em className="font-normal">
            {movie?.release_date || movie?.first_air_date}
          </em>
        </p>
      </div>
    </Card>
  );
};

export default MoviesList;
