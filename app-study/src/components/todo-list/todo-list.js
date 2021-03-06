import React from "react";

import "./todo-list.css";

import TodoListItems from './../todo-list-items'

const TodoList = ({ onImportantButton, onLable, todoData, onDeleted}) => {

  const elements = todoData.map(({id, ...transferItem}) => {
    return (
      <li 
        className="list-group-item" 
        key={id}>
          <TodoListItems 
            {...transferItem} 
            onDeleted={() => onDeleted(id)}
            onImportantButton={() => onImportantButton(id)}
            onLable ={() => onLable(id)}
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