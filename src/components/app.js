import React from 'react';
import '../assets/css/app.css';
import LandingPage from './landing-page';
import Header from './header';
import Footer from './footer';
import Scoreboard from './scoreboard';
import { Route } from 'react-router-dom';
import About from './about';
import Employees from './employee-profiles';
import Advertise from './advertise';
import Contact from './contact';
import Employment from './employment';
import ListenLive from './listen-live';
import WinFreeStuff from './winfreestuff';

const App = () => {
    return (
        <div className="app">
            <Scoreboard />
            <Header />
            <ListenLive show="listen-on-app" />
            <Route exact path="/" component={LandingPage} />
            <Route path='/on-air-shows' component={Employees} />
            <Route path='/win-free-stuff' component={WinFreeStuff} />
            <Route path='/advertise' component={Advertise} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/employment' component={Employment} />
            <Route path='/listen-live' component={ListenLive} />
            <Footer />
        </div>
    )
};

export default App;
