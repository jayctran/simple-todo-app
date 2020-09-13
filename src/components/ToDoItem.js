import React, { Component } from "react"

class ToDoItem extends Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "d35e0f",
            opacity: 0.4,
            textDecoration: "line-through"
        }

        const { completed, id, title } = this.props.todo

        return (
            <li className="todo-item">
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}
                />
                <button onClick={() => this.props.deleteTodoProps(id)}>
                    Delete
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                
            </li>
        );
    }
}

// function ToDoItem(props) {
//     return <li><input type="checkbox" checked={props.todo.completed}/>{props.todo.title}</li>
// }

export default ToDoItem