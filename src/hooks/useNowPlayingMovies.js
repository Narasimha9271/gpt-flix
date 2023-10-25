import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    //fetching the data from TMDB API and putting into our store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();

        //console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useNowPlayingMovies;
