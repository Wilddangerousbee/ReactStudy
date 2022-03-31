import React from "react";

import './todo-list-items.css'

const TodoListItems = ({ lable, important = false }) => {
    const style = {
        color: important ? "tomato" : "black"
    };

    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={style}>{lable}</span>
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
    );
};

export default TodoListItems;