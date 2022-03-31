import React from 'react';

import TodoList from './../todo-list';
import SearchPanel from './../search-panel';
import ArticlesList from './../article-list';

import "./app.css";

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

export default App;