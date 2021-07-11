import React from 'react';
import furniture from './../../assets/furniture_cover.jpg';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Landing() {
    return (
        <div className="landingContainer">
            <div className="landingWrapper" style={{backgroundImage: `url(${furniture})`}}>
                <div className="landingTop">
                    <span className="landingHeader">Premier Furniture</span>
                </div>
                <div className="landingCenter">
                    <span className="tagLine">Designed for the modern homeowner.</span>
                </div>
                <div className="landingBottom">
                    <Link to="/shop">
                        <span className="tagButton">
                            Browse Catalog
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
