import React from "react";

const TodoListItems = ({ item, important = false }) => {
    const style = {
        color: important ? "tomato" : "black"
    };

    return (
        <span style={style}>{item}</span>    
    );
};

export default TodoListItems;