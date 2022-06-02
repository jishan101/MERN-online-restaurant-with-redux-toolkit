const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageName: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    ingredients: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {timestamps: true});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;

