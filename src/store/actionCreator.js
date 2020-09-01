import {ADD_CITY} from "./actions";

export function add_city(value) {
    return {
        type: ADD_CITY,
        city: value
    };
}
