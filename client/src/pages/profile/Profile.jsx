import React, {useState, useRef} from 'react';
import axios from 'axios';
import './styles.scss';

//MaterialUI
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';

export default function Profile() {
    const itemName = useRef();
    const itemDesc = useRef();
    const itemPrice = useRef();
    const [file, setFile] = useState(null);

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

    return (
        <div className="profile">
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
                            <label htmlFor="itemPicture">Item Picture</label>
                            <PermMediaOutlinedIcon/>
                            <input type="file" name="itemPicture" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} placeholder="Item Description"/>
                        </div>
                        <div className="formRow">
                            <label htmlFor="itemPrice">Item Price</label>
                            <input type="number" name="itemPrice" className="adminInput" ref={itemPrice} placeholder="Item Price"/>
                        </div>
                        <input type="submit" className="adminBtn"  />
                    </form>
                </div>
            </div>
        </div>
    )
}
