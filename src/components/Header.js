
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg" alt='logo'></img>
            <div className='secondflex'>
                <Link to='/movie' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Movies</p>
                </Link>
                <p>TV Shows</p>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default Header;
