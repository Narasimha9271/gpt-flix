import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    //fetching the data from TMDB API and putting into our store
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();

        //console.log(json.results);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default usePopularMovies;
