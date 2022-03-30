import React from "react";

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