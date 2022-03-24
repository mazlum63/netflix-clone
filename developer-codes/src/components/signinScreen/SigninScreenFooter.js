import React, { useEffect, useState } from 'react'
import '../../cssFiles/signinScreen/SigninScreenFooter.css'

const SigninScreenFooter = () => {
    const [footerLinks, setFooterLinks] = useState([])
    useEffect(() => {
        setFooterLinks([
            'FAQ', 'Help Center', 'Account', 'Media Center', 'Investor Relations', 'Jobs', 'Redeem Gift Cards', 'Buy Gift Cards', 'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Impressum', 'Contact Us', 'Speed Test', 'Legal Notices', 'Only on Netflix'
        ])
    }, [])

    return (
        <div className='signin__screen__footer'>
            <div className="footer__container">
                <p className='footer__phone'>Questions? Call <a href="tel:0800-000-7969">0800-000-7969</a></p>
                <ul className='footer__links'>
                    {footerLinks.map((link, index) => (
                        <li key={index} className="footer__list">
                            <a href="#" className="footer__link">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SigninScreenFooter