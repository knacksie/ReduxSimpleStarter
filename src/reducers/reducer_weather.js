import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    console.log("Action received", action);

    switch (action.type) {
        case FETCH_WEATHER:
            if (action.payload.status == 200) {
                return [action.payload.data, ...state];
            } else {
                console.log("Error getting city", action);
                return state;
            }

    }

    return state;
};