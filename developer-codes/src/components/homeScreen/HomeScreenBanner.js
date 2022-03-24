import React, { useState, useEffect } from 'react'
import '../../cssFiles/homeScreen/HomeScreenBanner.css'
import axiosInstance from '../../axios'
import requests from '../../requests'

const HomeScreenBanner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axiosInstance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request
        }
        fetchData();
    }, [])
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }
    return (
        <div
            style={{
                backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
            }}
            className='banner'>
            <div className="banner__content">
                <h2 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h2>
                <div className="banner__buttons">
                    <button className='banner__button' type='button'>Play</button>
                    <button className='banner__button' type='button'>My List</button>
                </div>
                <p className="banner__description">
                    {truncate(movie?.overview, 150)}
                </p>
            </div>
            <div className="banner__gradient" />
        </div>
    )
}

export default HomeScreenBanner