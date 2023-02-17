import React from "react";
import Card from "../../Utils/Card";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const MoviesList = ({ movie }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + ". . ." : str;
  }
  return (
    <Card>
      <img
        src={`${baseUrl}${movie?.backdrop_path || movie.poster_path} `}
        alt={movie?.title || movie.original_title || movie.original_name}
        className="w-full h-42 transition-all transform hover:scale-95 duration-150 ease-in-out"
      />
      <div className="p-3 mb-5  overflow-auto w-full">
        <h1 className="font-bold text-md ">
          {movie?.title || movie.original_title || movie.original_name}
        </h1>

        {/* Genre */}
        {movie.genre_ids[1] == "28" && (
          <p className="font-bold">
            {" "}
            Genre <em className="font-normal">Action</em>
          </p>
        )}
        {movie.genre_ids[1] == "27" && (
          <p className="font-bold">
            {" "}
            Genre: <em className="font-normal">Horror</em>
          </p>
        )}
        {movie.genre_ids[1] == "12" && (
          <p className="font-bold">
            {" "}
            Genre: <em className="font-normal">Action & Adventure</em>
          </p>
        )}
        {movie.genre_ids[1] == "10765" && (
          <p className="font-bold">
            {" "}
            Genre: <em className="font-normal">Sci-Fi & Fantasy</em>
          </p>
        )}
        {movie.genre_ids[1] == "10749" && (
          <p className="font-bold">
            {" "}
            Genre: <em className="font-normal">Romance</em>
          </p>
        )}
        {movie.genre_ids[1] == "28" && (
          <p className="font-bold">
            {" "}
            Genre: <em className="font-normal">Horror</em>
          </p>
        )}

        {/* overview */}
        <p className="text-sm font-bold my-2">
          Overview :{" "}
          <em className="font-normal">{truncate(movie.overview, 200)}</em>
        </p>
        {/* release date */}
        <p className="font-bold">
          Release Date{" "}
          <em className="font-normal">
            {movie?.release_date || movie?.first_air_date}
          </em>
        </p>
      </div>
    </Card>
  );
};

export default MoviesList;
