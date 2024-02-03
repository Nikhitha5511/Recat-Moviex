import { useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UpcomingMovies = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const upcomingMovies = useSelector((store) => store.home.upcomingMovies)
    console.log(upcomingMovies);

    return (
        <div className='secondData'>  
        
            <h3 className='heading'>UpcomingMovies</h3>
            <div className="slider-container">
            <Slider {...settings}>
                {upcomingMovies.map((movie) => (
                    <MovieCard 
                        key={movie.id}
                        {...{
                            image: movie.poster_path,
                            title: movie.title,
                            releaseDate: movie.release_date,
                            id:movie.id,
                            entityType:"upcomingMovies",
                        }}
                    />
                ))}
            </Slider>
            </div>
        </div>
    );
}

export default UpcomingMovies;
