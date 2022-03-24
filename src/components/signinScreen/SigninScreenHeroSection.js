import React from 'react'
import '../../cssFiles/signinScreen/SigninScreenHeroSection.css'
import SigninScreenReadyToWatch from './SigninScreenReadyToWatch'
import SigninScreenLogin from './SigninScreenLogin'

import { useSelector } from 'react-redux'


const SigninScreenHeroSection = () => {
    const login = useSelector(state => state.loginScreen.screenStatus)
    return (
        <div className='signin__hero__section'>
            <div className="hero__section__bg__gradient" />
            <div className="hero__section__bg">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/153cf88a-03b1-4eea-b34c-ed044b614fa0/DE-en-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix bg" className="hero__section__bg__image" />
            </div>
            {login ? <SigninScreenLogin /> : (
                <>
                    <h1 className='hero__section__title'>Unlimited movies, TV<br />shows, and more.</h1>
                    <h2 className='hero__section__subtitle'>Watch anywhere. Cancel anytime.</h2>
                    <SigninScreenReadyToWatch />
                </>)}

        </div>
    )
}

export default SigninScreenHeroSection