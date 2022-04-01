import React, { Component } from 'react';

import TodoList from './../todo-list';
import SearchPanel from './../search-panel';
import ArticlesList from './../article-list';
import ItemStatusFilter from './../item-status-filter';
import AddElement from '../add-element';

import "./app.css";
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            todoData: [{lable: "Learn React", id: 1, important: false, done: false},
            {lable: "Drink Coffee", id: 2, important: false, done: false}, 
            {lable: "Smoke Crack", id: 3, important: false, done: false}],
            filterItems: "All"
        }
    }

    MAX_ID = 9999999

    generationId(todoData){
        while(true){
            let newId = Math.random(this.MAX_ID);
            if (!todoData.find(({id}) => id === newId)){
                return newId;
            }
        }
    }

    onDeleted = (id) => {
        this.setState(({todoData}) => {
            return({
                todoData: todoData.filter((el)=> el.id !== id)
            });
        })
    };

    onAdd = (nameElement) => {
        this.setState(({todoData}) => {
            let copyTodoData = todoData.slice();
            copyTodoData.push({lable: nameElement, id: this.generationId(todoData), important: false, done: false});
            return({
                todoData: copyTodoData
            })
        })
    }

    onLable = (id)=>{
        this.setState(({todoData}) => {
            const newTodoData = todoData.slice();
            for (let index = 0; index < newTodoData.length; index++) {
                if (newTodoData[index].id === id) {
                    newTodoData[index].done = !newTodoData[index].done;
                }
            }
            return {
                todoData: newTodoData
            };
        })
    };

    onImportantButton = (id)=>{
        this.setState(({todoData}) => {
            const newTodoData = todoData.slice();
            for (let index = 0; index < newTodoData.length; index++) {
                if (newTodoData[index].id === id) {
                    newTodoData[index].important = !newTodoData[index].important;
                }
            }
            return {
                todoData: newTodoData
            };
        })
    }
    
    render(){
        let todoDataToTransfer = this.state.todoData.slice();

        for (let index = 0; index < this.state.todoData.length; index++) {
            if (this.state.filterItems === "All"){
                todoDataToTransfer = this.state.todoData;
            } else if (this.state.filterItems === "Important"){
                todoDataToTransfer = this.state.todoData.filter(({important}) => important);
            } else {
                todoDataToTransfer = this.state.todoData.filter(({done}) => done);
            }
        }

        return (
            <div className='todo-app'>
                <ArticlesList />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter 
                        filterItems = {this.state.filterItems}
                    />
                </div>
                <TodoList  
                    todoData={todoDataToTransfer}
                    onDeleted = {this.onDeleted}
                    onImportantButton = {this.onImportantButton}
                    onLable={this.onLable}
                />
                <AddElement onAdd = {this.onAdd} />
            </div>
          )
    }
}