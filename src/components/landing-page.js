import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Carousel from './carousel-container';
import '../assets/css/landingpage.css';
import football from '../assets/images/football.png';
import soccer from '../assets/images/soccer.png';
import basketball from '../assets/images/basketball.jpg';
import Employees from './employee-profiles';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Header />
                <Carousel />
                <p className="blurb">Locally owned and operated radio station proudly serving our community in Bend, Oregon. Check out some community events, stream from our live site, or advertise with us. We'd love to meet you.</p>
                <div className="imgcont">
                    <img src={football} className="landing-icon" />
                    <img src={soccer} className="landing-icon" />
                    <img src={basketball} className="landing-icon" />
                </div>
                <Employees />
                <Footer />
            </div>
        )
    };
};

export default LandingPage;