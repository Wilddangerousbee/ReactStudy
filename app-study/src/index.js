import React from 'react';
import reactDOM from 'react-dom';

import TodoList from './components/todo-list/todo-list.js';
import SearchPanel from './components/search-panel/search-panel.js';
import ArticlesList from './components/article-list/article-list.js';

import "./index.css";

const App = () => {

  const todoData = [{lable: "Learn React", important: true, id: 1},
  {lable: "Drink Coffee", important: false, id: 2}, 
  {lable: "Smoke Crack", important: false, id: 3}];
  
  return (
    <div className='todo-app'>
      <ArticlesList />
      <SearchPanel/>
      <TodoList  todoData={todoData}/>
    </div>
  )
}


reactDOM.render(<App />, 
  document.getElementById("root"));
