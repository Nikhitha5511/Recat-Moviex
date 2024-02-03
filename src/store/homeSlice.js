import { createSlice, } from "@reduxjs/toolkit";

const initialState={
    trendingMovies: [],
    popularMovies: [],
    upcomingMovies: [],
    movies:[],
};

const homeSlice=createSlice({
    name:"home",
    initialState:initialState,
    reducers:{
      getPopularMovies:(state,action)=>{
        console.log(state,action);
        state.popularMovies=action.payload.results;
      },
      getTrendingMovies:(state,action)=>{
        console.log(state,action);
        state.trendingMovies=action.payload.results;
      },

      getUpcomingMovies:(state,action)=>{
        console.log(state,action);
        state.upcomingMovies=action.payload.results;
      },
      getMovies:(state,action)=>{
        console.log(state,action);
        state.movies=action.payload.results;
      },
    }

})

export const{ getPopularMovies,getTrendingMovies,getUpcomingMovies,getMovies} = homeSlice.actions;

export default homeSlice.reducer;
