import React, { Component } from 'react';
import Todo from './Todo';
// import TodoForm from './TodoForm';

const TodoList = props => {
    // console.log(props)
    return (
        <div>
        {props.tasks.map(cv => (
          <Todo key = {cv.id} cv = {cv} toggle = {props.toggle}/>  
        ))}
        </div>
    )
}

export default TodoList