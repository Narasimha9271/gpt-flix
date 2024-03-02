import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-5 ">
            <h1 className="py-4 text-lg font-semibold md:text-3xl text-white ">
                {title}
            </h1>

            <div className="flex overflow-x-hidden hover:overflow-x-scroll scrollbar-hide">
                <div className="flex flex-row gap-2">
                    {movies?.map((movie) => (
                        <Link key={movie.id} to={"/watch?v=" + movie.id}>
                            <MovieCard posterPath={movie.poster_path} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
