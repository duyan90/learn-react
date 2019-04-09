import React, { Component } from 'react'
import TodoItem from './todoItem'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchTodo } from '../action/todoAction.js';
import axios from 'axios';

class Todo extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newProps){
    if(newProps.newPost){
      this.props.posts.unshift(newProps.newPost);
    }
    
  }

  render() {
    console.log('' + this.props.posts);
    return this.props.posts.map((todo) => (
      <TodoItem todo={todo} key={todo.id} />
  ));
  }

  deleteTodo = (id) =>{
    this.props.deleteTodo(id);
  }
}
Todo.propTypes = {
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(
  mapStateToProp,
  { fetchPosts: fetchTodo}
)(Todo);