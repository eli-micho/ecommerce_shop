import React from 'react';
import './styles.scss';

export default function Login() {
    const handleClick = async (e) => {
        e.preventDefault();
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginTitle">Pieces</h3>
                    <span className="loginDesc">
                        Login and start shopping.
                        <br/>
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <div className="formRow">
                            <label for="email">Email</label>
                            <input placeholder="Email" type="email" name="email" required className="loginInput"/>
                        </div>
                        <div className="formRow">
                            <label for="password">Password</label>
                            <input placeholder="Password" type="password" name="password" required className="loginInput" />
                        </div>
                        <button className="loginButton" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
