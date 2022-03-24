import React from 'react'
import '../../cssFiles/homeScreen/HomeScreen.css'
import requests from '../../requests'
import HomeScreenNavbar from './HomeScreenNavbar'
import HomeScreenBanner from './HomeScreenBanner'
import HomeScreenRow from './HomeScreenRow'

const HomeScreen = () => {
    return (
        <div className='home__screen'>
            <HomeScreenNavbar />
            <HomeScreenBanner />
            <HomeScreenRow isLarge={true} title='NETFLIX ORIGINAL' fetchUrl={requests.fetchNetflixOriginals} />
            <HomeScreenRow title='Trending Now' fetchUrl={requests.fetchTrending} />
            <HomeScreenRow title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <HomeScreenRow title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <HomeScreenRow title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <HomeScreenRow title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <HomeScreenRow title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <HomeScreenRow title='Documentaries' fetchUrl={requests.fetchDocumantaries} />
        </div>
    )
}

export default HomeScreen