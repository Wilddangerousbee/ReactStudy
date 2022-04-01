import React from "react";

import "./todo-list.css";

import TodoListItems from './../todo-list-items'

const TodoList = ({ todoData, onDeleted}) => {

  const elements = todoData.map(({id, ...transferItem}) => {
    return (
      <li 
        className="list-group-item" 
        key={id}>
          <TodoListItems 
            {...transferItem} 
            onDeleted={() => onDeleted(id)}
          />      
      </li>
    )
  })

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    )
  };

  export default TodoList;