import React, { useState, useEffect } from 'react'
import '../../cssFiles/homeScreen/HomeScreenNavbar.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const HomeScreenNavbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowNavbar(true)
            } else {
                setShowNavbar(false)
            }

        })
    }, [])
    return (
        <div className="home__screen__navbar">
            <div className={`navbar__contents ${showNavbar && 'navbar__show'}`}>
                <img className='navbar__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix logo" />
                <Link to='/profile'>
                    <img className='navbar__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix avatar" />
                </Link>
            </div>
        </div>
    )
}

export default HomeScreenNavbar