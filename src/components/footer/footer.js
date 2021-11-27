import React from 'react'
import './footer.css'
import fb from '../../assets/FB.png'
import insta from '../../assets/Insta.png'

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
                    <a href='https://www.facebook.com/manlai.print.studio'><img src={fb} className='social-link' alt='social-logo' target='_blank' rel="noopener noreferrer"></img>
                    </a>
                    <a href='https://www.instagram.com/m_photo_studio/' target='_blank' rel="noopener noreferrer">
                        <img src={insta} className='social-link' alt='social-logo'></img>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;