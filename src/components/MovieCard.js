import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return;
    return (
        <div className="w-44">
            <img src={IMG_CDN_URL + posterPath} alt="movie-card" />
        </div>
    );
};

export default MovieCard;
