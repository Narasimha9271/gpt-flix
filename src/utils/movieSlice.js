import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailer: null,
        movieDetail: null,
        castDetail: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        addMovieDetail: (state, action) => {
            state.movieDetail = action.payload;
        },
        addCast: (state, action) => {
            state.castDetail = action.payload;
        },
    },
});
export const {
    addPopularMovies,
    addNowPlayingMovies,
    addTrailerVideo,
    addTopRatedMovies,
    addUpcomingMovies,
    addTrailer,
    addMovieDetail,
    addCast,
} = movieSlice.actions;
export default movieSlice.reducer;
