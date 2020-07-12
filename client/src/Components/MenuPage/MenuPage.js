import React, { Component } from 'react';
import SearchMenuItem  from './SearchMenuItem';
import MenuListFav from './MenuListFav';
import MenuList from './MenuList';

class MenuPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            favorite: []
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    addFavorite(id) {
        const list = this.state.favorite.concat(<li className="menu-item-fav-li">{[id]}</li>);
        this.setState({
            favorite: list
        })
    }
    
    render() {
        return ( 
            <div>
                <SearchMenuItem 
                    filterText={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <MenuListFav 
                     favorite={this.state.favorite}
                />
                <MenuList 
                    filterText={this.state.filterText}
                    addFavorite={this.addFavorite.bind(this)}
                />
            </div>
        );
    }
    
}

export default MenuPage;