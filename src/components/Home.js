import { useEffect } from "react";
import { FetchApi } from "./Fetch";
import { useDispatch} from "react-redux";
import { getPopularMovies,getTrendingMovies,getUpcomingMovies,getMovies} from "../store/homeSlice";
import PopularMovies from "./PopularMovies";
import TrendingMovies from "./TrendingMovies";
import UpcomingMovies from "./UpcomingMovies";
import Hero from "./Hero";
import Header from "./Header";

const Home=()=>{
    const dispatch=useDispatch();
    const commonApiParams={
        langauge:"en-us",
        page:1,
    };
    useEffect(()=>{
        FetchApi("https://api.themoviedb.org/3/movie/popular", commonApiParams)
        .then((data)=> {
            dispatch(getPopularMovies(data));
        })
        .catch((error)=>console.error(error));

        FetchApi("https://api.themoviedb.org/3/trending/all/day", commonApiParams)
        .then((data)=> {
            dispatch(getTrendingMovies(data));
        })
        .catch((error)=>console.error(error));

        FetchApi("https://api.themoviedb.org/3/movie/upcoming", commonApiParams)
        .then((data)=> {
            dispatch(getUpcomingMovies(data));
        })
        .catch((error)=>console.error(error));

        FetchApi("https://api.themoviedb.org/3/discover/movie", commonApiParams)
        .then((data)=> {
            dispatch(getMovies(data));
        })
        .catch((error)=>console.error(error));
        
    },[]);
    return (
        <div>
           <Header/>
            <Hero/>
           <UpcomingMovies/>
           <TrendingMovies/>
           <PopularMovies/> 
        </div>
    );
};

export default Home;


