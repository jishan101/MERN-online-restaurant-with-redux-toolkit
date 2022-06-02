const fs = require("fs");
const FoodItem = require("../models/foodItemModel");

const allFoodItems = (req, res) => {
    FoodItem.find().sort({ createdAt: -1 })
        .then(result => {
            const foodItems = result.map(foodItem => {
                const imageData = foodItem.image.data.toString('base64');
                return {
                    _id: foodItem._id,
                    title: foodItem.title,
                    price: foodItem.price,
                    imageName: foodItem.imageName,
                    image: {
                        data: imageData,
                        contentType: foodItem.image.contentType
                    },
                    ingredients: foodItem.ingredients,
                    category: foodItem.category
                }
            })
            res.json(foodItems);
        })
        .catch(err => {
            console.log(err);
        });
};

const newFoodItem = (req, res) => {
    // console.log(req.file);
    const foodItem = new FoodItem({
        title: req.body.title,
        price: req.body.price,
        // imageName: req.file.filename,
        imageName: req.file.fieldname + Date.now() + req.file.originalname,
        image: {
            // data: fs.readFileSync(req.file.path),
            data: req.file.buffer,
            contentType: req.file.mimetype
        },
        ingredients: req.body.ingredients,
        category: req.body.category
    });

    foodItem.save()
        .then(result => {
            res.redirect("/new");
        })
        .catch(err => {
            console.log(err)
        });
};

const foodItemDetails = (req, res) => {
    const id = req.params.id;

    FoodItem.findById(id)
        .then(result => {
            if (result) {
                const imageData = result.image.data.toString('base64');
                res.json({
                    _id: result._id,
                    title: result.title,
                    price: result.price,
                    imageName: result.imageName,
                    image: {
                        data: imageData,
                        contentType: result.image.contentType
                    },
                    ingredients: result.ingredients,
                    category: result.category
                });
            } else {
                res.redirect("/new");
            }
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = { allFoodItems, newFoodItem, foodItemDetails };

