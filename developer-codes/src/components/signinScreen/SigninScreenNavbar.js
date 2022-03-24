import React from 'react'
import { Globe } from '../../assets/Icons'
import '../../cssFiles/signinScreen/SigninScreenNavbar.css'

import { useSelector, useDispatch } from 'react-redux'
import { screenOpen, screenClose } from '../../features/loginScreenSclice'


const SigninScreenNavbar = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.loginScreen.screenStatus)
    return (
        <div className="signin__screen__navbar">
            <div onClick={() => dispatch(screenClose())} className="navbar__logo">
                <img className='navbar__logo__image' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            </div>
            {login ? '' : (
                <>
                    <div className="navbar__language">
                        <Globe />
                        <select className="navbar__form__select">
                            <option className='navbar__form__option'>English</option>
                            <option className='navbar__form__option' defaultValue="1">Deutsch</option>
                        </select>
                    </div>
                    <button onClick={() => dispatch(screenOpen(true))} type='button' className='navbar__signin__link' href="#">Sign in</button>
                </>
            )}

        </div >
    )
}

export default SigninScreenNavbar