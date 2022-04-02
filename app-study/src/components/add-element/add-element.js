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

    onAddItem = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.inputValue);
        this.setState({
            inputValue: ""
        })
    }

    render(){
        return (
            <form
                onSubmit={this.onAddItem} 
                className="search-panel d-flex">
                <input
                    value={this.state.inputValue}
                    onChange={this.updateItem}
                    className="form-control search-input add-element" 
                    type="text"
                />
                <button className="btn btn-outline-secondary">Add</button>
            </form>
        );
    }
};