import React, {Component} from "react";

import "./item-status-filter.css"

export default class ItemStatusFilter extends Component{
    render(){
        const {onFilter} = this.props
        return (
            <div className="btn-group">
                <button onClick={()=>onFilter("All")} className="btn btn-info" type="button">All</button>
                <button onClick={()=>onFilter("Important")} className="btn btn-outline-secondary" type="button">Important</button>
                <button onClick={()=>onFilter("Done")} className="btn btn-outline-secondary" type="button">Done</button>
            </div>
        )
    }
}