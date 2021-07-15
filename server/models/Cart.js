const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    items: {
        type: Array,
        default: [],
        required: true
    },
    total: {
        type: Number,
        required: true
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);