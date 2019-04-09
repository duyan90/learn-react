import {FETCH_TODO, NEW_TODO, DELETE_TODO} from './type';
import axios from 'axios';
export const fetchTodo = () => dispatch =>  {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response =>{
        dispatch({
            type: FETCH_TODO,
            payload: response.data
        });
    });
};

export const addNewTodo = (title) => dispatch =>{
    if(!title){
        return null;
    }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
    }).then((response) => {
        dispatch({
            type: NEW_TODO,
            payload: response.data
        });
    })
};

// export const deleteTodo= (id) => dispatch =>{
//     console.log('id '+ id);
//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response =>{
//         dispatch({
//             type: DELETE_TODO,
//             payload: response.data
//         });
//     });  
// };
