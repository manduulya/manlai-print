import React from 'react';
import './display.css';
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import disp1 from '../assets/01.jpg';
import disp2 from '../assets/02.jpg';
import disp3 from '../assets/03.jpg';
import disp4 from '../assets/04.jpg';
import disp5 from '../assets/05.jpg';

export default class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImg: 0,
            imgs: [
                disp1,
                disp2,
                disp3,
                disp4,
                disp5
            ]
        }
    }


    // switchImage = () => {
    //     if (this.state.currentImg < this.state.imgs.length - 1) {
    //         this.setState({ currentImg: this.state.currentImg + 1 })
    //     } else {
    //         this.setState({
    //             currentImg: 0
    //         })
    //     }
    //     return this.currentImage;
    // }

    // componentDidMount() {
    //     setInterval(this.switchImage, 2000)
    // }
    render() {
        const { imgs } = this.state;
        console.log(imgs)
        return (
            <section className='display-section'>
                <div className='slide-container'>
                    <Fade>
                        {imgs.map((img, index) => (
                            <div className='each-fade' key={index}>
                                <div className='image-container'>
                                    <img src={img} className='display-box' alt='display-imgs' />
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </section>
        )
    }

}