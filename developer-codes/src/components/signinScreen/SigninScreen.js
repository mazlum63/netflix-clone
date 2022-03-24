import React from 'react'
import SigninScreenNavbar from './SigninScreenNavbar'
import SigninScreenHeroSection from './SigninScreenHeroSection'
import SigninScreenFAQ from './SigninScreenFAQ'
import SigninScreenFooter from './SigninScreenFooter'
import SigninScreenCarts from './SigninScreenCarts'

const SigninScreen = () => {
    return (
        <div className='signin__screen'>
            <SigninScreenNavbar />
            <SigninScreenHeroSection />
            <SigninScreenCarts />
            <SigninScreenFAQ />
            <SigninScreenFooter />
        </div>
    )
}

export default SigninScreen