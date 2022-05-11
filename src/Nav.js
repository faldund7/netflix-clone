import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        // It is a good practice to clean-up, but not necessary
        return (
            () => window.removeEventListener('scroll', transitionNavBar)
        );
    }, [])

    return ( 
            <div className={`nav ${show && 'nav__black'}`}>
                <div className='nav__contents'>
                    <img 
                        onClick={() => navigate('/')}
                        className='nav__logo'
                        src='https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png' 
                        alt='Netlfix Logo'
                    />

                    <img 
                        onClick={() => navigate('/profile')}
                        className='nav__avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                        alt='Netlfix Avatar'
                    />
                </div>
                
            </div>
        );
}

export default Nav;
