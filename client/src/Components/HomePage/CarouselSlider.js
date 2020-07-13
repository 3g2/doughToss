import React, { Component } from 'react';

import CarouselImgs from './CarouselImgs';
import { Carousel }  from 'react-bootstrap';

class CarouselSlider extends Component {
    render() {
        return(
                <Carousel>
                    <Carousel.Item>
                        <img src={CarouselImgs[0]} alt="First"></img>
                        <Carousel.Caption className="center-caption">
                            <h1>First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={CarouselImgs[1]} alt="Second"></img>
                        <Carousel.Caption className="center-caption">
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={CarouselImgs[2]} alt="Third"></img>
                        <Carousel.Caption className="center-caption">
                            <h3>Third slide label</h3>
                            <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        )
    }
}

export default CarouselSlider;