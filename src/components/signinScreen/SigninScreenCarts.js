import React, { useState, useEffect } from 'react'
import SigninScreenCart from './SigninScreenCart'

const SigninScreenCarts = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        setCartItems([
            {
                id: 1,
                title: 'Enjoy on your TV.',
                description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
                image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
                animation: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v',
                cartClass: 'watch-on-tv',
                isReverse: false
            },
            {
                id: 2,
                title: 'Download your shows to watch offline.',
                description: 'Save your favorites easily and always have something to watch.',
                image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
                cartClass: 'download',
                isReverse: true
            },
            {
                id: 3,
                title: 'Watch everywhere.',
                description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
                image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
                animation: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v',
                cartClass: 'watch-everywhere',
                isReverse: false
            },
            {
                id: 4,
                title: 'Create profiles for kids.',
                description: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
                image: 'https://occ-0-149-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd',
                cartClass: 'kids-profile',
                isReverse: true
            },
        ])
    }, [])
    return (
        <div>
            {cartItems.map(cartItem => (
                <SigninScreenCart cartItem={cartItem} key={cartItem.id} />
            ))}
        </div>
    )
}

export default SigninScreenCarts