import React, { useState } from 'react';
import { SearchMenuItem } from './SearchMenuItem';
import { MenuList } from './MenuList';
import '../App.css';

export function MenuPage() {
    const [searchValue, setSearchValue] = useState();

    return ( 
        <div>
            <SearchMenuItem searchValue={searchValue} setSearchValue={setSearchValue} />
            <MenuList />
        </div>
    );
}
