import React, { Component } from 'react';
import MenuItems from './MenuItems';

class MenuList extends Component {
    render() {
        const { filterText } = this.props; //arguments in stateless functions
        const menuList = MenuItems
            .filter(item => {
                return item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            })
            .map(item => {
                return (
                    <div key={item.id} className="menu-item">
                        <button className="menu-item-btn">
                            <img src={item.img} alt={item.alt}></img>
                            <div className="menu-item-desc">
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                            </div>
                        </button>
                    </div>
                )
            });
        return (
            <div>
                <ul className="menu">
                    {menuList}
                </ul>   
            </div>
        );
    }
}

export default MenuList;