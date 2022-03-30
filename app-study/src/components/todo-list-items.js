import React from "react";

const TodoListItems = ({ lable, important = false }) => {
    const style = {
        color: important ? "tomato" : "black"
    };

    return (
        <span style={style}>{lable}</span>    
    );
};

export default TodoListItems;