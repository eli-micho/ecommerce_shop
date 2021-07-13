import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemCard from './ItemCard/ItemCard';
import './styles.scss';

export default function ItemsCatalog() {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const getAllItems = async () => {
            try{
                const allItems = await axios.get("/items/getall");
                setItemsList(allItems.data)
            }catch(err){   
                console.log(err)
            }
        };
        getAllItems();
    }, [])

    return (
        <div className="itemsCatalog">
            <div className="itemsWrapper">
                <h2 className="itemsTitle">Catalog</h2>
                <div className="itemsCardBox">
                    {itemsList.map((item) => {
                       return <ItemCard item={item} key={`item-${item._id}`}/>
                    })}
                </div>
            </div>
        </div>
    )
}
