import React from 'react';
import reactDOM from 'react-dom';

import TodoList from './components/todo-list.js'
import SearchPanel from './components/search-panel.js'
import ArticlesList from './components/article-list.js';

const App = () => {
  
  return (
    <div>
      <ArticlesList />
      <SearchPanel/>
      <TodoList />
    </div>
  )
}


reactDOM.render(<App />, 
  document.getElementById("root"));
