import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemCard from './ItemCard/ItemCard';
import './styles.scss';

export default function ItemsCatalog() {
    const [itemsList, setItemsList] = useState([]);
    const heroku_url = process.env.HEROKU_URL

    useEffect(() => {
        const getAllItems = async () => {
            try{
                const allItems = await axios.get('https://ecommerce-furniture-shop.herokuapp.com/api/items/getall');
                setItemsList(allItems.data)
            }catch(err){   
                console.log(err)
            }
        };
        getAllItems();
    }, [])

    return (
        <div className="itemsCatalog fadeInBottom">
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
