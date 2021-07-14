import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({
        type: "LOGIN_START"
    });
    try {
        const res = await axios.post("https://ecommerce-furniture-shop.herokuapp.com/api/auth/login", userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data });
    }catch(err){
        dispatch({type: "LOGIN_FAILURE", payload: err });
    }
};

export const logoutCall = async (dispatch) => {
    dispatch({
        type: "LOGOUT_START"
    });
    try {
        dispatch({type: "LOGOUT_SUCCESS", payload: null});
    }catch(err){
        console.log(err)
    }
}