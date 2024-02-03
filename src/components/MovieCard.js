
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return (
        <div className="card">
            <Link to={`/${props.entityType}/${props.id}`}>
                <img src={"https://image.tmdb.org/t/p/original" + props.image} alt={props.title} />
            </Link>
            <div className='details'>
                <h3>{props.title}</h3>
                <p>{props.releaseDate}</p>
            </div>
        </div>
    );
}

export default MovieCard;
