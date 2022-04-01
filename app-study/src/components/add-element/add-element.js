import React from "react";

import "./add-element.css"

const AddElement = (props) => {
    return (
        <span className="search-panel d-flex">
            <input
                className="form-control search-input add-element" 
                type="text"
            />
            <button onClick={() => props.onAdd("Make Batton")} className="btn btn-outline-secondary">Add</button>
        </span>
    );
};

export default AddElement;