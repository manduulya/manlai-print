import React from 'react'
import Service from './Service'
import './Services.css'

export default function Services() {
    return (
        <section className='services-page'>
            <h1 className='services-header'>Lorem Ipsum</h1>
            <div className='services-wrapper'>
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
            </div>
        </section>
    )
} 