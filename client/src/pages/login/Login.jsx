import React, { useRef, useContext } from 'react';
import './styles.scss';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/Auth/AuthContext';

//MaterialUI
import { CircularProgress } from '@material-ui/core';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    };
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
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" type="email" name="email" required className="loginInput" ref={email}/>
                        </div>
                        <div className="formRow">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="password" name="password" required className="loginInput" ref={password} />
                        </div>
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress size="20px" /> : "Login"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
