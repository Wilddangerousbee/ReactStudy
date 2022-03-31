import React, {Component} from "react";

import './todo-list-items.css'

export default class TodoListItems extends Component{
    constructor(){
        super();
        this.state = {done: false};
    }

    onLable = ()=>{
        this.setState({
            done: true
        })
    };
    
    render(){
        const { lable, important = false } = this.props;
        const {done} = this.state;

        const style = {
             color: important ? "tomato" : "black"
        };

        const listItemClass = done ? "todo-list-item-label done" : "todo-list-item-label"; 

        return (
            <span className="todo-list-item">
            <span className={listItemClass} onClick={this.onLable} style={style}>{lable}</span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                >
            <i className="fa fa-exclamation"></i>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    >
                <i className="fa fa-trash-o"></i>
            </button> 
        </span>
        )
    }
}
