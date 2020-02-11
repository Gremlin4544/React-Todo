import React from 'react';
import Todo from './Todo';
// import SearchForm from "./SearchForm";


const TodoList = props => {
    // console.log(props)
    return (
        <div>
        {/* <SearchForm setSearchText={this.props.setSearchText}/> */}
        {props.tasks.map(cv => (
          <Todo key = {cv.id} cv = {cv} toggle = {props.toggle}/>  
        ))}
        </div>
    )
}

export default TodoList