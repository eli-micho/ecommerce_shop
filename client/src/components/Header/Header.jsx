import React, { useContext } from 'react';
import { useHistory } from 'react-router'
import { AuthContext } from './../../context/Auth/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/pieces_logo.png';
import './styles.scss';

//Material UI
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CircularProgress } from '@material-ui/core';
import { logoutCall } from '../../apiCalls';

export default function Header() {
    const { user, isFetching, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogOut = () => {
        logoutCall(dispatch);
        history.push("/");
    };
    
    const UserLoggedIn = () => {
        return (
            <ul className="userLinks">
                <li>{`Welcome, ${user.name}`}</li>
                <li><Link to="/profile"><PersonOutlineOutlinedIcon/></Link></li>
                <li><Link to="/cart"><ShoppingCartOutlinedIcon/></Link></li>
                <li><button className="logOutBtn" onClick={handleLogOut}>Log Out</button></li>
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
                </ul>
            </div>
            <div className="headerRight">
                {user ? isFetching ? <CircularProgress size="20px" /> : <UserLoggedIn/> : <UserLoggedOut/>}
            </div>
        </header>
    )
}
