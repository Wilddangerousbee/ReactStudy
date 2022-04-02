import React, { Component } from "react";

import "./search-panel.css"

export default class SearchPanel extends Component {
    constructor(){
      super();
      this.state = {
        inputValue: ""
      }
    }

    onChangeInput = (e) => {
      this.setState({
        inputValue: e.target.value
      });
      this.props.onSearchChange(e.target.value);
    }

    render(){
      return (
        <input 
          value={this.state.inputValue}
          onChange={this.onChangeInput}
          className="form-control search-input"
          type="text" 
          placeholder='Search'
          />
      )
    }
};
