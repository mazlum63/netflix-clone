import React from 'react'
import '../../cssFiles/signinScreen/SigninScreenCart.css'

const SigninScreenCart = ({ cartItem: { title, description, image, animation = null, cartClass, isReverse } }) => {
    return (
        <div className={`signin__cart ${cartClass} ${isReverse ? 'order-2' : ''}`}>
            <div className="signin__cart__text">
                <h1 className="cart__text__title">{title}</h1>
                <p className="cart__text__description">{description}</p>
            </div>
            <div className={`signin__cart__image ${isReverse ? 'order-1' : ''}`}>
                <img className='image__bg' src={image} />
                {animation && (<video className="image__video" autoPlay playsInline muted loop>
                    <source src={animation} type="video/mp4" /></video>)}
            </div>
        </div >
    )
}

export default SigninScreenCart