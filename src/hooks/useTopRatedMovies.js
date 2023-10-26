import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    //fetching the data from TMDB API and putting into our store
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTIONS
        );
        const json = await data.json();

        //console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useTopRatedMovies;
