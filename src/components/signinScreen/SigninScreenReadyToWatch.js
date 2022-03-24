import React from 'react'
import { ArrowRight } from '../../assets/Icons'
import '../../cssFiles/signinScreen/SigninScreenReadyToWatch.css'

const SigninScreenReadyToWatch = () => {
    return (
        <div style={{ zIndex: '2' }}>
            <p className="hero__section__description">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='hero__section__form'>
                <div className="form__group">
                    <input className='hero__section__input' type="email" name="hero-section-input" placeholder='Email Adress' />
                    <button className='hero__section__button' type="text" name="hero-section-input" ><span>Get Started</span> <ArrowRight /></button>
                </div>
            </form>
        </div>
    )
}

export default SigninScreenReadyToWatch