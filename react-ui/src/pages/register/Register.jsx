import React from 'react';
import './styles.scss';

export default function Register() {
    const handleClick = async (e) => {
        e.preventDefault();
    }
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerTitle">Pieces</h3>
                    <span className="registerDesc">
                        Register with Pieces for easy 1-click checkout.
                        <br/>
                        Save items to your wishlist for later.
                        <br/>
                        Get access to exclusive discounts.
                        <br/>
                        And more...
                    </span>
                </div>
                <div className="registerRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput"/>
                        <input placeholder="Password" type="password" required className="loginInput" />
                        <input placeholder="Confirm Password" type="password" required className="loginInput" />
                        <button className="registerButton" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
