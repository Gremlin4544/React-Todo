import React from "react"

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            newItemName: ""
        }
    }
    

    handleChanges = e => {
        this.setState({
            newItemName: e.target.value
        })
    }

    
    handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.newItemName)
        this.setState({
            newItemName: ""
        })
    }
        
    render(){
        return (
               <form onSubmit = {this.handleSubmit}>
                <input 
                        type = "text"
                        name = "item"
                        placeholder = "... Add a new task"
                        onChange = {this.handleChanges}
                        value = {this.state.newItemName}
                    />
                    <button className="newTodoItem" type = "submit">ADD</button>
                    <button onClick = {this.props.removeItem} type = "submit">Clear Completed</button>   
                </form>     
        )
    }
}

export default TodoForm
