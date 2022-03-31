import React from "react";

import "./search-panel.css"

const SearchPanel = () => {
    const searchStyle = {
      frontsize: '20px'
    };
  
    return (
      <input className="form-control search-input"
        type="text"
        style={searchStyle} 
        placeholder='Search'
        disabled/>
    )
};

export default SearchPanel;