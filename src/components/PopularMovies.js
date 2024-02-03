import { useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PopularMovies = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const popularMovies = useSelector((store) => store.home.popularMovies)
    console.log(popularMovies);

    return (
        <>  <div className='sideHeading'>
            <h3>PopularMovies</h3>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
                {popularMovies.map((movie) => (
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
            </Slider>
            </div>
        </>
    );
}

export default PopularMovies;
