import {FETCH_POST, NEW_POST} from '../action/type';
import axios from 'axios';
export const fetchPosts = () => dispatch =>  {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response =>{
        dispatch({
            type: FETCH_POST,
            payload: response.data
        });
    });
};