const User = require("../models/User");
const router = require("express").Router();

//Add item to cart

router.post("/cart/add/:id", async (req,res) => {
    try {
        //save user and responsed
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;