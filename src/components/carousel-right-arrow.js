import React, { Component } from 'react';
import '../assets/css/carousel.css';

const RightArrow = (props) => {
    return (
        <div onClick={props.nextSlide} className="next-arrow">
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default RightArrow;