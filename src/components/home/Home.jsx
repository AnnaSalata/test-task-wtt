import React from 'react';
import './Home.scss';
import {SearchForm} from "../searchForm/SearchForm";
import {SearchCity} from "../searchCity/SearchCity";

export class Home extends React.Component {

    state = {
        searchValue: '',
    };

    search = (searchValue) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${this.props.APPID}`;
        fetch(url)
            .then(response => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        return false
                    }
                }
            )
            .then(response => {
                if (response) {
                    this.props.add_city({name: response.name,
                        id: response.id,
                        temp: response.main.temp,
                        weather: response.weather[0].main});
                    this.setState(state => {
                        return {...state, searchValue}
                    })
                }
            })
            .catch((e) => console.log(e));
    };

    render() {

        const searchCities = this.props.cities.map(searchCity => {
            return <SearchCity key={searchCity.id} id={searchCity.id} cityName={searchCity.name}
                               temperature={searchCity.temp}
                               weather={searchCity.weather}/>
        });

        return (
            <div className='cities-page'>
                <SearchForm onSubmit={this.search}/>
                <div className='cities-page__list'>
                    {searchCities}
                </div>
            </div>
        );
    }
}
