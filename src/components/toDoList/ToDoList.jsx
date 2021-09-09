import React, { useState } from 'react';
import ToDo from './toDo/ToDo';
import './toDoListStyle.css';
import TodoForm from './todoForm/TodoForm';

const ToDoList = () => {
    const [todos, setTodos] = useState([
        {
          task:'Learn about React',
          complete:false
        },
        {
          task:'Meet a friend for lunch',
          complete:false
        },
        {
          task:'Learn about Hooks',
          complete: false
        },
        {
          task:'Go to the gym',
          complete: false
        }
      ])

      const addTodo = (task) => {
          const newTodos = [...todos, { task }]; // add task property with the others properties
          setTodos(newTodos);
      }

      const completeTodo = (index) => {
          const newTodos = [...todos]; //copy the current list of todos
          newTodos[index].complete = !newTodos[index].complete;
          setTodos(newTodos);
      }

      const removeTodo = (index) => {
          const newTodos = [...todos];
          newTodos.splice(index,1);
          setTodos(newTodos);
      }

      const clearAll = () => {
        const newTodos = [...todos];
        const filteredEmojis = newTodos.filter(emoji =>
          !emoji.complete);
          setTodos(filteredEmojis);
      }

    return (
        <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo,index) => (
              <ToDo 
               key={index}
               index={index}
               todo={todo} //add prop to toDo component
               completeTodo={completeTodo}
               removeTodo={removeTodo}
               /> 
            ))}
            <div className="container-button">
            <button
            className="clear-button"
            onClick={clearAll}>Clear</button>
            </div>
        </div>
    );
};

export default ToDoList;