import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    console.log('Reducer: ', action.type);
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            const post = action.payload.data;
            return { ...state, [post.id]: post };
        case DELETE_POST: 
            console.log('DELETE_POST reducer');
            const { [action.payload]: omit, ...newState} = state;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}