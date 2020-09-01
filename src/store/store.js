import { createStore } from 'redux';
import {rootReducer} from "./rootReducer";

export const store = createStore(rootReducer,
    {APPID: '3099e6458ebc0fd39d284df99562b969',
        cities: []});
