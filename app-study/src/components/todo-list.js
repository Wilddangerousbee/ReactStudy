import React from "react";

import TodoListItems from './todo-list-items.js'

const TodoList = ({ todoData }) => {

  const elements = todoData.map(({id, ...transferItem}) => {
    return (
      <li key={id}><TodoListItems {...transferItem}/></li>
    )
  })

    return (
      <ul>
        {elements}
      </ul>
    )
  };

  export default TodoList;