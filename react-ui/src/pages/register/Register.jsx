import React, { useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './styles.scss';

export default function Register() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        //Check password === confirmpassword
        if(confirmPassword.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords do not match!");
        }else{
            const user = {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try{
                await axios.post("/auth/register", user);
                history.push("/");
            }catch(err){
                console.log(err)
            }
        }
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
                    <form className="registerBox" onSubmit={handleClick}>
                        <div className="formRow">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Name" type="text" name="name" required className="loginInput" ref={name} />
                        </div>
                        <div className="formRow">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" type="email" name="email" required className="loginInput" ref={email}/>
                        </div>
                        <div className="formRow">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="password" name="password" required className="loginInput" ref={password} />
                        </div>
                        <div className="formRow">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input placeholder="Confirm Password" type="password" name="cpassword" required className="loginInput" ref={confirmPassword} />
                        </div>                    
                        
                        <button className="registerButton" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
