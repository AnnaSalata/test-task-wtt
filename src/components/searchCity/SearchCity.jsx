import React from 'react';
import './SearchCity.scss';
import {Link} from "react-router-dom";

export class SearchCity extends React.Component {

    render() {
        let className = "search-city__img " + this.props.weather.toLowerCase();

        return <Link to={'/forecast/' + this.props.id}>
            <div className='search-city' id={this.props.id}>
                <div className='search-city__name'>{this.props.cityName}</div>
            <div className='search-city__temp'>{this.props.temperature}&#176;C</div>
            <div className='search-city__weather'>{this.props.weather}</div>
                <div className={className}/>
        </div>
        </Link>
    }
}
