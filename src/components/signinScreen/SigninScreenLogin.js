import React, { useRef } from 'react'
import '../../cssFiles/signinScreen/SigninScreenLogin.css'
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../features/userSlice';
import { register } from '../../features/registrationSlice';

const SigninScreenLogin = () => {
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    const registeredUsers = useSelector(state => state.registration.registeredUsers)
    return (
        <div className='signin__screen__login'>
            <h1 className="login__header">Sign In</h1>
            <div className="login__form">
                <input ref={emailRef} className='form__input' type="email" name="logInEmail" placeholder='Email Adress' required />
                <input ref={passwordRef} className='form__input' type="password" name="logInPassword" placeholder='Password' required />
                <button onClick={() => dispatch(signin([registeredUsers, { email: emailRef.current.value, pass: passwordRef.current.value }]))} className='form__button'>Sign In</button>
            </div>
            <div className="login__help">
                New to Netflix?
                <button onClick={() => dispatch(register({ email: emailRef.current.value, pass: passwordRef.current.value }))} className='login__help__link'>Sign up now.</button>
            </div>
        </div>
    )
}

export default SigninScreenLogin