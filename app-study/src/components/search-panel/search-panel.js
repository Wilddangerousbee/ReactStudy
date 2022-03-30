import React from "react";

import "./search-panel.css"

const SearchPanel = () => {
    const searchStyle = {
      frontsize: '20px'
    };
  
    return (
      <input 
        style={searchStyle} 
        placeholder='Search'
        disabled/>
    )
};

export default SearchPanel;