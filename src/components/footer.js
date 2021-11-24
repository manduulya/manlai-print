import React from 'react'
import './footer.css'
import fb from '../assets/FB.png'
import insta from '../assets/Insta.png'

function Footer() {
    return (
        <section className='footer-section'>
            <div className='footer-wrap'>
                <div className='address'>
                    <p>Darkhan Soum, 5th bagh, 20-4</p>
                    <p>Darkhan-Uul province, Mongolia</p>
                    <p>+976-99174649</p>
                </div>
                <div className='social-links'>
                    <img src={fb} className='social-link' alt='social-logo'></img>
                    <img src={insta} className='social-link' alt='social-logo'></img>
                </div>
            </div>
        </section>
    )
}

export default Footer;