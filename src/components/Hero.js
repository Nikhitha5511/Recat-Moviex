import react from 'react';

const Hero =()=>{
    return(
        <div className='hero'>
            <h1 className='welcome'>Welcome.</h1>
            <p className='textpara'>Millions of movies, TV shows and people to discover. Explore now.</p>
            <input className='sreach' type="text" placeholder="Search for Movie or Tv show..."></input>
        </div>
    )
}

export default Hero;