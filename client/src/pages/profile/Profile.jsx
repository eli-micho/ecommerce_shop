import React, {useState, useRef, useContext} from 'react';
import { AuthContext } from './../../context/Auth/AuthContext';
import axios from 'axios';
import './styles.scss';

import cabinet from './../../assets/misc/cabinet.jpg';

//MaterialUI
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';

export default function Profile() {
    const { user } = useContext(AuthContext);
    const itemName = useRef();
    const itemDesc = useRef();
    const itemPrice = useRef();
    const [file, setFile] = useState(null);
    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = {
          itemName: itemName.current.value,
          desc: itemDesc.current.value,
          price: itemPrice.current.value,  
        };
        try{
            await axios.post("/items/new", newItem);
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    };

    const AdminProfile = () => {
        return (
            <div className="profileWrapper">
                <div className="profileTop"><h2>Dashboard</h2></div>
                <div className="profileCenter">
                    <h3>Add New Item</h3>
                    <form className="newItemForm" onSubmit={handleSubmit}>
                        <div className="formRow">
                            <label htmlFor="itemName">Item Name</label>
                            <input type="text" name="itemName" className="adminInput" ref={itemName} placeholder="Item Name"/>
                        </div>
                        <div className="formRow">
                            <label htmlFor="itemDesc">Item Description</label>
                            <input type="text" name="itemDes" className="adminInput" ref={itemDesc} placeholder="Item Description"/>
                        </div>
                        <div className="formRow">
                            <label htmlFor="itemPicture">
                                <span className="uploadText">Item Picture</span>
                                <PermMediaOutlinedIcon className="uploadIcon"/>
                                <input style={{display: "none"}} type="file" name="itemPicture" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} placeholder="Item Description"/>
                            </label>
                        </div>
                        <div className="formRow">
                            <label htmlFor="itemPrice">Item Price</label>
                            <input type="number" name="itemPrice" className="adminInput" ref={itemPrice} placeholder="Item Price"/>
                        </div>
                        <input type="submit" className="adminBtn"  />
                    </form>
                </div>
                <div className="profileBottom">
                    <h2>Transactions</h2>
                    <div className="transactionItem">
                        <img className="transactionItemPicture" src={cabinet} alt="item"/>
                        <span className="transactionItemName">Cabinet</span>
                        <span className="transactionItemTime">{}</span>
                        <span className="transactionItemPrice">$150.63</span>
                        <span className="transactionItemStatus">Completed</span>
                    </div>
                </div>
            </div>
        )
    }

    const UserProfile = () => {
        return (
            <div className="profileWrapper">
                <div className="profileTop">
                    <h2>Overview</h2>
                    <div className="userProfileName">{user.name}</div>
                </div>

                <div className="profileCenter">
                    <div className="userSavedItems">
                        <h3>Saved Items</h3>
                        <p>You have no saved items</p>
                    </div>
                </div>
             
                <div className="profileBottom">
                    <div className="userTransactionHistory">
                        <h3>Previous Purchases</h3>
                        <div className="transactionItem">
                            <img className="transactionItemPicture" src={cabinet} alt="item"/>
                            <span className="transactionItemName">Cabinet</span>
                            <span className="transactionItemTime">{}</span>
                            <span className="transactionItemPrice">$150.63</span>
                            <span className="transactionItemStatus">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="profile">
            { user.isAdmin === true ? <AdminProfile /> : <UserProfile/>}
        </div>
    )
}
