import React from 'react';
import './header.css'
import logo from '../../assets/mps-logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className='nav-section'>
            <nav className='nav-wrapper'>
                <Link to='/'>
                    <img src={logo} alt='mps-logo' className='nav-logo' />
                </Link>
                <ul className='nav-ul'>
                    <Link to='/about'>
                        <li className='nav-li'>About</li>
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