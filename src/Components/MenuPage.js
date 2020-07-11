import React, { Component } from 'react';
import SearchMenuItem  from './SearchMenuItem';
import { MenuList} from './MenuList';
import '../App.css';

class MenuPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: ''
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }
    
    render() {
        return ( 
            <div>
                <SearchMenuItem 
                    filterText={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <MenuList 
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
    
}

export default MenuPage;