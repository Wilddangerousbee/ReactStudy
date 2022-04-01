import React, { Component } from 'react';

import TodoList from './../todo-list';
import SearchPanel from './../search-panel';
import ArticlesList from './../article-list';
import ItemStatusFilter from './../item-status-filter';

import "./app.css";
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            todoData: [{lable: "Learn React", id: 1},
            {lable: "Drink Coffee", id: 2}, 
            {lable: "Smoke Crack", id: 3}]
        }
    }
    
    onDeleted = (id) => {
        this.setState(({todoData}) => {
            return({
                todoData: todoData.filter((el)=> el.id !== id)
            });
        })
    };
    
    render(){
        return (
            <div className='todo-app'>
                <ArticlesList />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList  
                    todoData={this.state.todoData}
                    onDeleted = {this.onDeleted}
                />
            </div>
          )
    }
}