import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

export default function GptSearch() {
    return (
        <div>
            <div className="absolute w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src={BACKGROUND_IMG}
                    alt="netflix-logo"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
}
