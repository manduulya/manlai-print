import React from 'react';
import './display.css';
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
        console.log(this.state.imgs.length)
    }

    // switchImgs = () => {
    //     if (this.state.currentImg === this.state.imgs.length - 1) {
    //         setInterval(this.setState({ currentImg: this.state.currentImg + 1 }), 5000)
    //     } else {
    //         this.setState({ currentImg: this.state.currentImg + 1 })
    //         console.log(this.state.currentImg + 1)
    //     }
    //     console.log(this.state.currentImg)
    //     console.log(this.state.imgs.length - 1)
    // }
    switchImage = () => {
        if (this.state.currentImg < this.state.imgs.length - 1) {
            this.setState({ currentImg: this.state.currentImg + 1 })
        } else {
            this.setState({
                currentImg: 0
            })
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 2000)
    }
    render() {
        return (
            <section className='display-section'>
                {/* <img src={disp1} className='display-box' alt='display' /> */}
                <img src={this.state.imgs[this.state.currentImg]} className='display-box' alt='display-imgs' ></img>
            </section>
        )
    }

}