import React, { useState, useEffect } from 'react'
import '../../cssFiles/profileScreen/ProfileScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../features/userSlice'
import { Link } from 'react-router-dom'
import { setPlan } from '../../features/userPlanSlice'


const ProfileScreen = () => {
    const logedUser = useSelector(state => state.user.user.email)
    const userPlan = useSelector(state => state.userPlan.plan)
    const [currentUser, setCurrentUser] = useState('')
    const [currentPlan, setCurrentPlan] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        setCurrentUser(logedUser)
        setCurrentPlan(userPlan)
    })
    return (
        <div className='profile__screen'>
            <div className="profile__navbar">
                <img
                    className='navbar__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="netflix logo"
                />
                <Link to='/'>
                    <img
                        className='navbar__avatar'
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="netflix profile"
                    />
                </Link>
            </div>
            <div className="profile__edit">
                <div className="profile__container">
                    <h1 className="profile__header">Edit Profile</h1>
                    <div className="profile__info">
                        <img
                            className='profile__avatar'
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt="profile avatar"
                        />
                        <div className="info__container">
                            <div className="profile__email">{currentUser}</div>
                            <div className="current__plan">Plans(Current Plan: {currentPlan})</div>
                            <h2 className='renewal__date'>Renewal Date: 14/03/2022</h2>
                            <div className="netflix__plans">
                                <div className="plan__container">
                                    <p className='plan__name'>Netflix Basic<br /><span>480p</span></p>
                                    <button onClick={() => dispatch(setPlan('Basic'))} className={`plan__subscribe ${currentPlan === 'Basic' && 'btn__disabled'}`}>Subscribe</button>
                                </div>
                                <div className="plan__container">
                                    <p className='plan__name'>Netflix Standart<br /><span>1080p</span></p>
                                    <button onClick={() => dispatch(setPlan('Standart'))} className={`plan__subscribe ${currentPlan === 'Standart' && 'btn__disabled'}`}>Subscribe</button>
                                </div>
                                <div className="plan__container">
                                    <p className='plan__name'>Netflix Premium<br /><span>4K+HRD</span></p>
                                    <button onClick={() => dispatch(setPlan('Premium'))} className={`plan__subscribe ${currentPlan === 'Premium' && 'btn__disabled'}`}>Subscribe</button>
                                </div>
                            </div>
                            <button onClick={() => dispatch(signout())} className='profile__signout'>Sign Out</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileScreen