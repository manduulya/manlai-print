import React from 'react';
import './header.css'

function Header() {
    return (
        <section className='nav-section'>
            <nav className='nav-wrapper'>
                <img src='' alt='mps-logo' className='nav-logo' />
                <ul className='nav-ul'>
                    <li className='nav-li'>About</li>
                    <li className='nav-li'>Services</li>
                    <li className='nav-li'>Gallery</li>
                    <li className='nav-li'>Contact</li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;