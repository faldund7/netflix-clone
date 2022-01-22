import React from 'react';
import './HomeScreen.css';
import Nav from './Nav.js';
import Banner from './Banner.js';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <Nav/>
        {/* Banner */}
        <Banner/>
        {/* Rows */}
    </div>
  );
}

export default HomeScreen;
