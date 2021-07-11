import React, { useContext } from 'react';
import { AuthContext } from './../../context/Auth/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/pieces_logo.png';
import './styles.scss';

//Material UI
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function Header() {
    const { user } = useContext(AuthContext);
    const UserLoggedIn = () => {
        return (
            <ul className="userLinks">
                <li>{`Welcome, ${user.name}`}</li>
                <li><Link to="/profile"><PersonOutlineOutlinedIcon/></Link></li>
                <li><Link to="/cart"><ShoppingCartOutlinedIcon/></Link></li>
                <li><Link>Log Out</Link></li>

            </ul>
        )
    };

    const UserLoggedOut = () => {
        return (
            <ul className="userLinks">
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/profile"><PersonOutlineOutlinedIcon/></Link></li>
                <li><Link to="/cart"><ShoppingCartOutlinedIcon/></Link></li>
            </ul>
        )
    };
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
                {user ? <UserLoggedIn/> : <UserLoggedOut/>}
            </div>
        </header>
    )
}
