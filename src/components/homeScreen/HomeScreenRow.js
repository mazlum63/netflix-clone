import React, { useState, useEffect } from 'react'
import axiosInstance from '../../axios';
import '../../cssFiles/homeScreen/HomeScreenRow.css'

const baseUrl = 'http://image.tmdb.org/t/p/original/'
const HomeScreenRow = ({ isLarge = false, title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axiosInstance.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    return (
        <div className='row'>
            <h1 className='row__title'>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLarge && movie.poster_path) ||
                        (!isLarge && movie.backdrop_path)) && (
                        <img
                            className={`row__poster ${isLarge && 'row__poster__large'}`}
                            src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            key={movie.id}
                        />
                    )
                )
                )}
            </div>
        </div>
    )
}

export default HomeScreenRow
