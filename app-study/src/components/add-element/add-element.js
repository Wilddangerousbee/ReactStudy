import React, { Component } from "react";

import "./add-element.css"

export default class AddElement extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: "",
        }
    }

    updateItem = (evt) =>{
        this.setState({
            inputValue: evt.target.value
        })
    }

    render(){
        const {onAdd} = this.props;
        return (
            <span className="search-panel d-flex">
                <input
                    value={this.state.inputValue}
                    onChange={this.updateItem}
                    className="form-control search-input add-element" 
                    type="text"
                />
                <button onClick={() => onAdd(this.state.inputValue)} className="btn btn-outline-secondary">Add</button>
            </span>
        );
    }
};