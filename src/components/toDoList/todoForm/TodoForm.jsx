import React, { useState } from 'react';
import './todoFormStyle.css';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) {
            return;
        }
        addTodo(value);
        setValue('');
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input
            className="user-input"
            placeholder="Add Task"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}>
            </input>
        </form>
    );
};

export default TodoForm;