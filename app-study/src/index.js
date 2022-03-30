import React from 'react';
import reactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build New Project'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  )
}

const ArticlesList = () => {
  return (
    <h1>My Todo List</h1>
  )
}

const SearchPanel = () => {
  const searchStyle = {
    frontsize: '20px'
  };

  return (
    <input 
      style={searchStyle} 
      placeholder='Search'
      disabled/>
  )
}

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
