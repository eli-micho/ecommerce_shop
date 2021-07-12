import React from 'react';
import'./styles.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import ItemsCatalog from '../../components/ItemsCatalog/ItemsCatalog';

export default function Shop() {
    return (
        <>
            <div className="shopWrapper">
                <Sidebar/>
                <ItemsCatalog />
            </div>
        </>
    )
}
