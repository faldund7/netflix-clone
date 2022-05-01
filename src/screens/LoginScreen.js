import React from 'react';
import { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen.js';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen__background'>
                <img className='loginScreen__logo' src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="Netlfix Logo"/>
                <button onClick={() => setSignIn(true)} 
                className='loginScreen__button'>Sign In</button>

                <div className='loginScreen__gradient'></div>
            </div>
             
            <div className='loginScreen__body'>
                {signIn ? (
                    <SignupScreen/>
                ) : (<>
                    <h1>Unlimited films, TV programmes, and more</h1> 
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className='loginScreen__input'>
                        <form>
                            <input type='email'
                            placeholder='Email Address'/>
                            <button 
                            onClick={() => setSignIn(true)}
                            className='loginScreen__getStarted'>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>)}
             </div>
        </div>
    );
}

export default LoginScreen;
