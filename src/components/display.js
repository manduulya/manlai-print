import React from 'react';
import './display.css';
import disp1 from '../assets/01.jpg';

export default function Display() {
    return (
        <section className='display-section'>
            <img src={disp1} className='display-box' alt='display' />
        </section>
    )
}