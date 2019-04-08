import {FETCH_POST, NEW_POST} from '../action/type'
const initialState = {
    items: [],
    item:{}
}

export default function(state= initialState, action){
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

