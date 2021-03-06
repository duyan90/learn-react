import React, { Component } from 'react';
import './App.css';
import Header from './component/layout/header';
import AddTodo from './component/addTodo';
import Todo from './component/todo';
import About from './component/pages/about';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './component/store';
class App extends Component {
  // state = {
  //   todos: [],
  //   loading: false
  // }



  // markComplete = (id)=>{
  //     this.setState({todos: this.state.todos.map(todo =>{
  //       if(todo.id === id){
  //         todo.completed = ! todo.completed;
  //       }
  //       return todo;
  //     })
  //     });   
  // };

  // deleteTodo = (id) =>{
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/{$id}`).then(response =>{
  //     this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  //   });  
  // }
  
  render() {
      return ( 
        <Provider store={store}>
          <Router>
              <div className="App" >
                <Header />
                <Route exact path='/' render= { () =>(
                  <React.Fragment>
                    <AddTodo/>
                    <Todo />
                  </React.Fragment>
                )}/>
                <Route path='/about' component= {About}/>  
              </div>
          </Router>
        </Provider>
      );
    }
}

export default App;
