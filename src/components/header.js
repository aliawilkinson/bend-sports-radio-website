import React, { Component } from 'react';
import '../assets/css/header.css';
import logo from '../assets/images/foxlogo-fp.png';
import BurgerMenu from './burger-menu';
import Menu from './menu';
import { Link } from 'react-router-dom';
import ListenLive from './listen-live';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuShow: false,
            menuSize: 'expanded-menu-hide',
            menuBackground: 'hide'
        };
    }

    showExpandedMenu() {
        if (this.state.menuShow) {
            this.setState({
                menuShow: false,
                menuSize: 'expanded-menu-hide',
                menuBackground: 'hide'
            });
        } else {
            this.setState({
                menuShow: true,
                menuSize: 'expanded-menu-show',
                menuBackground: 'show'
            });
        }
    }

    componentWillReceiveProps() {
        this.showExpandedMenu();
        return <BurgerMenu open={this.state.menuShow} onClick={this.showExpandedMenu.bind(this)} />
    }

    render() {
        const { menuSize, menuBackground, menuShow } = this.state;
        return (
            <div className="header-container">
                <ListenLive show="listen-on-header" />
                <ul>
                    <div className="link-cont">
                        <Link to="./on-air-shows">
                            <li className="long-word">
                                <span>On Air Shows</span> <i className="fas fa-music"></i>
                            </li>
                        </Link>
                    </div>
                    <div className="link-cont">
                        <Link to="win-free-stuff">
                            <li className="long-word">
                                <span>Win Free Stuff</span> <i className="fas fa-trophy"></i>
                            </li>
                        </Link>
                    </div>
                    <div className="link-cont">
                        <Link to="./advertise">
                            <li>
                                <span>Advertise</span> <i className="fas fa-bolt"></i>
                            </li>
                        </Link>
                    </div>
                    <div className="link-cont">
                        <Link to="/about">
                            <li>
                                <span>About Us</span> <i className="fas fa-users"></i>
                            </li>
                        </Link>
                    </div>
                    <div className="link-cont">
                        <Link to="/">
                            <li>
                                <span>Home</span> <i className="fas fa-home"></i>
                            </li>
                        </Link>
                    </div>
                </ul>
                <Link to="/">
                    <div className="header-logo">
                        <img src={logo} />
                    </div>
                </Link>
                <Menu size={menuSize} background={menuBackground} />
                <BurgerMenu open={menuShow} onClick={this.showExpandedMenu.bind(this)} />
            </div>
        )
    }
}

export default Header;