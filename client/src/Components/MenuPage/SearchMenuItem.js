import React, { Component } from "react";

class SearchMenuItem extends Component {

    filterUpdate() {
        const val = this.myValue.value;
        this.props.filterUpdate(val);
    }

    render(){
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search for a specific pizza..."
                        ref={ (value) => {this.myValue = value}}
                        onChange={this.filterUpdate.bind(this)}
                        className="menu-item-search"
                    />
                </form>
            </div>
        );
    }
}

export default SearchMenuItem;