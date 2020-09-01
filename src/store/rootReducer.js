import {ADD_CITY} from "./actions";

export function rootReducer(state, action) {
    switch(action.type) {
        case ADD_CITY:
            if(state.cities.some(city=> city.id === action.city.id)){
                return {...state};
            }else {
                const newCites = state.cities;
                if(newCites.length === 5){
                    newCites.pop();
                }
                newCites.unshift(action.city);
                return {...state, cities: newCites};
            }

        default: return state;
    }
}
