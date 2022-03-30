import React from "react";

import TodoListItems from './todo-list-items.js'

const TodoList = () => {
    const ListItems = ["Learn React", "Drink Coffee"]
    return (
      <ul>
        <li><TodoListItems item={ListItems[0]} important/></li>
        <li><TodoListItems item={ListItems[1]}/></li>
      </ul>
    )
  };

  export default TodoList;