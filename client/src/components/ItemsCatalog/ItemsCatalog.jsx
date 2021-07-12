import React from 'react';
import ItemCard from './ItemCard/ItemCard';
import './styles.scss';

export default function ItemsCatalog() {
    return (
        <div className="itemsCatalog">
            <div className="itemsWrapper">
                <h2 className="itemsTitle">Catalog</h2>
                <div className="itemsCardBox">
                    <ItemCard/>
                </div>
            </div>
        </div>
    )
}
