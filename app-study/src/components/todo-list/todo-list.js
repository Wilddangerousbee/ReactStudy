import React from "react";
import "./todo-list.css";


import TodoListItems from './../todo-list-items/todo-list-items.js'

const TodoList = ({ todoData }) => {

  const elements = todoData.map(({id, ...transferItem}) => {
    return (
      <li className="list-group-item" key={id}><TodoListItems {...transferItem}/></li>
    )
  })

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    )
  };

  export default TodoList;