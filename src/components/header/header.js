import React, { useState } from 'react';
import './header.css'
import logo from '../../assets/mps-logo.png'
import { Link } from 'react-router-dom';

function Header() {

    const [active, setActive] = useState();

    function activeHandler() {
        console.log('clicked')
        console.log(window.location.pathname)
        console.log(document.activeElement.href)
        const current = window.location.pathname;

        if (document.activeElement.href.includes(current)) {
            console.log('hi')
        }
    }

    return (
        <section className='nav-section'>
            <nav className='nav-wrapper'>
                <Link to='/'>
                    <img src={logo} alt='mps-logo' className='nav-logo' />
                </Link>
                <ul className='nav-ul'>
                    <Link to='/about'>
                        <li className='nav-li' onClick={activeHandler}>About</li>
                    </Link>
                    <Link to='/services'>
                        <li className='nav-li'>Services</li>
                    </Link>
                    <Link to='/gallery'>
                        <li className='nav-li'>Gallery</li>
                    </Link>
                    <Link to='/contact' >
                        <li className='nav-li'>Contact</li>
                    </Link>
                </ul>
            </nav>
        </section>
    )
}
export default Header;