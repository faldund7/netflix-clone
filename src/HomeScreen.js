import React from 'react';
import './HomeScreen.css';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js';
import requests from './Requests';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <Nav/>
        {/* Banner */}
        <Banner/>
        {/* Rows */}
        <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default HomeScreen;
