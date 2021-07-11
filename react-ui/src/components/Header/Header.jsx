import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pieces_logo.png';
import './styles.scss';

//Material UI
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function Header() {
    return (
        <header className="headerContainer">
            <div className="headerLeft">
                <Link to="/">
                    <span className="logo"><img src={logo} alt="logo"/>Pieces</span>
                </Link>
            </div>
            <div className="headerCenter">
                <ul className="mainLinks">
                    <li><Link to="/shop">Shop</Link></li>
                    <li>/</li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </div>
            <div className="headerRight">
                <ul className="userLinks">
                    <li><Link to="/profile"><PersonOutlineOutlinedIcon/></Link></li>
                    <li><Link to="/cart"><ShoppingCartOutlinedIcon/></Link></li>
                </ul>
            </div>
        </header>
    )
}
