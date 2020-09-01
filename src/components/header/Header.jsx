import React from 'react';
import './Header.scss';
import logo from '../../assets/images/weather-logo.png';
import {Link} from "react-router-dom";

export class Header extends React.Component {

    render() {
        return <nav className="global-nav">
            <div className="global-nav__controls controls">
                <Link to='/'>
                    <div className="controls__logo">Weather App
                        <img className="controls__img" src={logo} alt=""/>
                    </div>
                </Link>
            </div>
        </nav>
    }
}
