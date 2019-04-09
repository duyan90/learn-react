import {combineReducers} from 'redux';
import PostReducer from './todoReducer';

export default combineReducers   ({
    posts: PostReducer
});