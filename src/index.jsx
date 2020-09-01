import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.scss';
import {store} from "./store/store";
import {APP_W} from "./store/connect";


ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <APP_W/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));
