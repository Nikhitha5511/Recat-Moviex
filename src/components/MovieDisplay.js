import { useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import { useEffect,useState } from "react";
import { getMovies } from "../store/homeSlice";
import {useDispatch} from "react-redux";
import { FetchApi } from "./Fetch";

const MovieDisplay = () => {
    const commonApiParams={
        langauge:"en-us",
        page:1,
    };
    const movies = useSelector((store) => store.home.movies)
    console.log(movies);
    const [number, setNumber] = useState(2);
    const dispatch = useDispatch();

    const handleScroll = async () => {
        try {
          if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight)
            setNumber(prev => prev + 1);
        } catch (err) {
          console.log(err)
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        FetchApi("https://api.themoviedb.org/3/discover/movie", commonApiParams)
        .then((data)=> {
            dispatch(getMovies(data));
        })
        .catch((error)=>console.error(error));
      }, [number])

    return (
        < div className='display'>  
        <div className='sideHeading'>
            <h3>Movies</h3>
            </div>
            <div className="slider-container moivieDisplay">
           
                {movies.map((movie) => (
                    <MovieCard 
                        key={movie.id}
                        {...{
                            image: movie.poster_path,
                            title: movie.title,
                            releaseDate: movie.release_date,
                            id:movie.id,
                            entityType:"popularMovies",
                        }}
                    />
                ))}
           
            </div>
        </div>
    );
}
export default MovieDisplay;



