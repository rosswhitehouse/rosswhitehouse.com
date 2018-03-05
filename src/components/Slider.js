import React, { Component } from 'react';

export default class Slider extends Component {
    // renderSlides() {
    //     return <div></div>;
    //     this.props.slides.map((slide) => {
    //         return <div></div>;
    //     })
    // }



    render() {
        const slides = this.props.slides;
        slides[3] = slides[0];

        const renderSlides = slides.slice(0).reverse().map((slide, key) => {
            return <div className="slide" key={key}>{slide}</div>;
        });

        return (
            <span className="slider">
                <div className="slider__inner">
                    {renderSlides}
                </div>
            </span>
        )
    }
}
