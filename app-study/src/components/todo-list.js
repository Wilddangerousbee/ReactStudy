import React from "react";

import TodoListItems from './todo-list-items.js'

const TodoList = ({ todoData }) => {

  const elements = todoData.map((item) => {
    return (
      <li><TodoListItems {...item}/></li>
    )
  })

    return (
      <ul>
        {elements}
      </ul>
    )
  };

  export default TodoList;