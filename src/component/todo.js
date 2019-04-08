import React, { Component } from 'react'
import TodoItem from './todoItem'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPosts } from '../action/postAction.js';

class Todo extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return this.props.posts.map((todo) => (
      <TodoItem todo={todo} key={todo.id}/>
  ));
  }
  
}
// Todo.propTypes = {
//   todos: PropTypes.array.isRequired
//   // markComplete: PropTypes.func.isRequired,
//   // deleteTodo: PropTypes.func.isRequired
// }

const mapStateToProp = state => ({
  posts: state.posts.items
})

export default connect(
  mapStateToProp,
  { fetchPosts }
)(Todo);