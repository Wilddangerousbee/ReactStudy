import React, {Component} from "react";

import './todo-list-items.css'

export default class TodoListItems extends Component{
    constructor(){
        super();
        this.state = {
            done: false,
            important: false
        };
    }

    onLable = ()=>{
        this.setState(({done}) => {
            return {
                done: !done
            };
        })
    };

    onImportantButton = (important)=>{
        this.setState(({important}) => {
            return {
                important: !important
            };
        })
    }
    
    render(){
        const { lable, onDeleted } = this.props;
        const {done, important} = this.state;

        let listItemClass = done ? "todo-list-item-label done" : "todo-list-item-label"; 
        listItemClass = important ? listItemClass + " important" : listItemClass;

        return (
            <span className="todo-list-item">
            <span className={listItemClass} onClick={this.onLable} >{lable}</span>
            <button onClick={this.onImportantButton} type="button"
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
