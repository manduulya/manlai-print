import React from 'react';
import './About.css';
import Hero from '../../assets/hero.jpg'

export default function About() {
    return (
        <section className='about-page'>
            <h2 className='about-header'>Brief history of Manlai Print Studio and its founder.</h2>
            <div className='image'>
                <img src={Hero} alt='founder' className='hero-img' />
            </div>
            <div className='about-text-wrapper'>
                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque ante in eleifend cursus. Mauris faucibus urna mauris, vel tempor dolor viverra eget. Quisque at sodales lorem. Fusce finibus malesuada nibh, nec placerat lorem luctus in. Donec erat felis, efficitur non ligula vitae, rutrum mattis erat. Donec ullamcorper ornare nisi quis ullamcorper. Donec pretium id nunc et congue. Maecenas suscipit varius diam, ut tincidunt odio pretium nec. Cras at tincidunt risus. Quisque auctor enim nisi, at tempor sem tincidunt id. Praesent egestas, nunc ac finibus interdum, odio leo lobortis lectus, id interdum sapien massa vel lacus.

                    Donec vel nulla at purus lacinia consectetur eu dignissim tortor. Vestibulum ut lectus in nisl tempus dapibus quis a ipsum. Aenean rutrum, est vel tincidunt auctor, libero magna ultrices dolor, vehicula vestibulum purus sapien non nisi. Morbi porttitor libero quis tempor placerat. Mauris sagittis vestibulum mauris, sit amet sagittis neque commodo non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer luctus pellentesque dui vitae ultricies. Vivamus eleifend at ex id feugiat.

                    Nulla non orci nec justo accumsan tristique. Pellentesque sit amet rutrum lacus, quis gravida odio. Praesent quis urna viverra, rhoncus ligula a, vehicula odio. Cras ac tincidunt magna. Proin et odio at purus pharetra condimentum eget et nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur cursus nulla at rutrum fermentum. Sed ac dictum enim. Donec vestibulum ligula quis sollicitudin sagittis. Nullam venenatis tellus et sagittis eleifend. Fusce non justo a leo semper eleifend vitae vitae dui. In consequat tempus sapien a mollis. Sed luctus commodo sapien vitae hendrerit. Mauris bibendum semper erat vel faucibus. Donec vulputate tellus vitae leo eleifend rutrum.</p>
            </div>

        </section>
    )
}