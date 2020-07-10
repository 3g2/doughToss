import React from 'react';
import MenuItems from './MenuItems';

export function MenuList() {
    const menuList = MenuItems.map(item => {
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
        );
    });

    return (
        <ul className="menu">
            {menuList}
        </ul>   
    );
}