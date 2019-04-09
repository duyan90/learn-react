import {FETCH_TODO, NEW_TODO, DELETE_TODO} from '../action/type'
const initialState = {
    items: [],
    item:{}
}

export default function(state= initialState, action){
    switch(action.type){
        case FETCH_TODO:
            return {
                ...state,
                items: action.payload
            }
        case NEW_TODO:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

