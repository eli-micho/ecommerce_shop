import React from 'react';
import './styles.scss';
import noImage from './../../../assets/misc/no-image.png';

//MaterialUI
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export default function ItemCard({item}) {

    return (
        <div className="itemCard">
            <div className="itemCardWrapper">
                <div className="itemCardHeader"><span className="saveBtn"><BookmarkBorderIcon/></span></div>
                <div className="itemCardPicture"><img src={item.image ? item.image : noImage} alt="chair"  className="itemPicture"/></div>
                <div className="itemCardDesc">
                    <h4>{item.itemName}</h4>
                    <p className="desc">{item.desc}</p>
                    <p className="price">{`$${item.price}`}</p>
                </div>
                <div className="itemCardCart">
                    <button className="cartBtn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
