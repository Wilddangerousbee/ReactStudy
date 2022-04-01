import React, {Component} from "react";

import "./item-status-filter.css"

export default class ItemStatusFilter extends Component{
    render(){
        const {onFilter, filterItems} = this.props;

        const classAll = "btn" + (filterItems === "All" ?  " btn-info" : " btn-outline-secondary");
        const classImportant = "btn" + (filterItems === "Important" ?  " btn-info" : " btn-outline-secondary");
        const classDone = "btn" + (filterItems === "Done" ?  " btn-info" : " btn-outline-secondary");

        return (
            <div className="btn-group">
                <button onClick={()=>onFilter("All")} className={classAll} type="button">All</button>
                <button onClick={()=>onFilter("Important")} className={classImportant} type="button">Important</button>
                <button onClick={()=>onFilter("Done")} className={classDone} type="button">Done</button>
            </div>
        )
    }
}