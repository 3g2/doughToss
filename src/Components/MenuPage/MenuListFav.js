import React, { Component } from 'react';

class MenuListFav extends Component {
    render() {
        const { favorite } = this.props;
        return (
            <div className="menu-list-fav">
                <h3>Click on the items to favorite</h3>
               {favorite}
            </div>
        );
    }
}

export default MenuListFav;