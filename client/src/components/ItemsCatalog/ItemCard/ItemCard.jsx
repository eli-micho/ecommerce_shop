import React from 'react';
import './styles.scss';
import chair from './../../../assets/chairs/turquoise_armchair.png';

//MaterialUI
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export default function ItemCard() {
    return (
        <div className="itemCard">
            <div className="itemCardWrapper">
                <div className="itemCardHeader"><span className="saveBtn"><BookmarkBorderIcon/></span></div>
                <div className="itemCardPicture"><img src={chair} alt="chair"  className="itemPicture"/></div>
                <div className="itemCardDesc">
                    <h4>Baby Blue Chair</h4>
                    <p className="desc">Director's chair perfect for office.</p>
                    <p className="price">$45.99</p>
                </div>
                <div className="itemCardCart">
                    <button className="cartBtn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
