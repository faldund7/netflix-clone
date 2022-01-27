import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='loginScreen__background'>
                <img className='loginScreen__logo' src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="Netlfix Logo"/>
                <button className='loginScreen__button'>Sign In</button>
            </div>
        </div>
    );
}

export default LoginScreen;
