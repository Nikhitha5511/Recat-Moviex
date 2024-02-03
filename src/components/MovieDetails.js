import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import PopularMovies from "./PopularMovies";
import TrendingMovies from "./TrendingMovies";
import UpcomingMovies from "./UpcomingMovies";


const MovieDetails=()=>{
    const params = useParams();
    
    const entityList = useSelector((store)=>store.home[params.entityType]);
    const entityDetails = entityList.find((entity)=>entity.id== params.id);
    console.log(entityDetails);
    return(
        < div className='details'>
        <h1>Movie Details</h1>
        <div className='movieDetails'>
        
        <img style={{width:"400px",height:"400px"}}src={"https://image.tmdb.org/t/p/original"+entityDetails.poster_path}/>
        <div className='data'>
        <h2>{entityDetails.title}</h2>
        <p>{entityDetails.overview}</p>
        </div>
        </div>
        {params.entityType === "popularMovies" && <PopularMovies/>}
        {params.entityType === "trendingMovies" && <TrendingMovies/>}
        {params.entityType === "upcomingMovies" && <UpcomingMovies/>}


        </div>
    )
}

export default MovieDetails;