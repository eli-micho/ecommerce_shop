import React from 'react';
import './styles.scss';

export default function Register() {
    const handleClick = async (e) => {
        e.preventDefault();
    }
    return (
        <div className="register">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Pieces</h3>
                    <span className="loginDesc">Register with Pieces for easy 1-click checkout.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput"/>
                        <input placeholder="Password" type="password" required className="loginInput" />
                        <input placeholder="Confirm Paassword" type="password" required className="loginInput" />
                        <button className="registerButton" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
