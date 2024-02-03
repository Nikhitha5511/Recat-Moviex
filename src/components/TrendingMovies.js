import { useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingMovies = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const trendingMovies = useSelector((store) => store.home.trendingMovies)
    console.log(trendingMovies);

    return (
        <div className='secondData'>  
        
            <h3 className='heading'>TrendingMovies</h3>
            <div className="slider-container">
            <Slider {...settings}>
                {trendingMovies.map((movie) => (
                    <MovieCard 
                        key={movie.id}
                        {...{
                            image: movie.poster_path,
                            title: movie.title,
                            releaseDate: movie.release_date,
                            id:movie.id,
                            entityType:"trendingMovies",
                        }}
                    />
                ))}
            </Slider>
            </div>
        </div>
    );
}

export default TrendingMovies;
