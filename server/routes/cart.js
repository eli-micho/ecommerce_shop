const router = require("express").Router();
const Cart = require("../models/Cart");

//Add item to cart

router.post("/cart/add/:id", async (req,res) => {
    try {
        //get id of item
        const itemToCart = req.query._id
        console.log(itemToCart)
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;