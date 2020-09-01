import React, {Component} from 'react';
import './App.scss';
import {Header} from "./components/header/Header"
import {Main} from "./components/main";
import {Footer} from "./components/footer";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Main cities={this.props.cities}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
