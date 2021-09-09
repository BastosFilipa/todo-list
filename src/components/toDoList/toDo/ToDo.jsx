import React from 'react';
import './toDoStyle.css';

const ToDo = ({todo, index, completeTodo, removeTodo}) => {

   

    return (
        <div className="todo">
            <div style={{ textDecoration: todo.complete ? "line-through" : "" }}>
            {todo.task}
            </div>
            <div className="button-todo">
                <button className="complete-button" onClick={() => completeTodo(index)}>Complete</button>
                <button className="remove-button" onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
};

export default ToDo;