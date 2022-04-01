import React, {Component} from "react";

import './todo-list-items.css'

export default class TodoListItems extends Component{
    
    render(){
        const { lable, onDeleted, done, important, onImportantButton, onLable } = this.props;

        let listItemClass = done ? "todo-list-item-label done" : "todo-list-item-label"; 
        listItemClass = important ? listItemClass + " important" : listItemClass;

        return (
            <span className="todo-list-item">
            <span className={listItemClass} onClick={onLable} >{lable}</span>
            <button onClick={onImportantButton} type="button"
                className="btn btn-outline-success btn-sm float-right"
                >
            <i className="fa fa-exclamation"></i>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                <i className="fa fa-trash-o"></i>
            </button> 
        </span>
        )
    }
}
