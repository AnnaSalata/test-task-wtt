import React from 'react';
import {Switch, Route} from 'react-router'
import {Forecast} from "../forecast";
import {HOME_W} from "../../store/connect";

export class Main extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path='/' render={(routeProps) => <HOME_W cities={this.props.cities} {...routeProps} />}/>
                <Route path='/forecast/:id' component={Forecast}/>
            </Switch>
        );
    }
}
