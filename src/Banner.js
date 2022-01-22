import React from 'react';
import './Banner.css';
import { useState, useEffect } from 'react';
import axios from './axios.js';
import requests from './Requests.js';

function Banner() {
    const [movie, setMovie] = useState([]);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    };

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            // good practice
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);
    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
        }}>
        
        <div className='banner__contents'>
            <h1 className='banner__title'>
                Movie Name
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncate(`This is a test description. This is a test description. 
                This is a test description. This is a test description.`,100)}
            </h1>

            {/* -- because modifier */}
            <div className='banner--fadeBottom'></div>
        </div>

        </header>
    );
}

export default Banner;
