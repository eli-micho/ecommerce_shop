const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    image: {
        type: String,
        default: ""
    },
    price: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("Item", ItemSchema);