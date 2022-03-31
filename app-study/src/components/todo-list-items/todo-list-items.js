import React, {Component} from "react";

import './todo-list-items.css'

export default class TodoListItems extends Component{

    onLable = ()=>{
        console.log(this.props.lable);
    };
    
    render(){
        const { lable, important = false } = this.props;

        const style = {
             color: important ? "tomato" : "black"
        };
        return (
            <span className="todo-list-item">
            <span className="todo-list-item-label" onClick={this.onLable} style={style}>{lable}</span>
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
