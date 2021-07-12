const router = require("express").Router();
const Item = require("../models/Item");

//add a new item
router.post("/new", async (req, res) => {
    const newItem = new Item(req.body)
    try{
        const savedItem = await newItem.save();
        res.status(200).json(savedItem)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;