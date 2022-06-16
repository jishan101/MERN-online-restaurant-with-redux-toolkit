const express = require('express');
require("dotenv").config();
const FoodItem = require("../models/foodItemModel");

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

let foodItems = [];

FoodItem.find().sort({ createdAt: -1 })
    .then(result => {
        foodItems = result.map(foodItem => {
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
    })
    .catch(err => {
        console.log(err);
    });

router.post('/create-checkout-session', async (req, res) => {
    let cartItems = [];

    for (const cartItem of req.body.cartItems) {
        for (const foodItem of foodItems) {
            if (cartItem._id === foodItem._id.toString()) {
                cartItems.push({
                    ...foodItem,
                    quantity: cartItem.quantity
                })
            }
        }
    }

    const line_items = cartItems.map(cartItem => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: cartItem.title,
                    description: cartItem.ingredients,
                    metadata: {
                        id: cartItem._id
                    }
                },
                unit_amount: cartItem.price * 100,
            },
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
            },
            quantity: cartItem.quantity,
        }
    })
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['US', 'CA', 'BD'],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 0,
                        currency: 'usd',
                    },
                    display_name: 'Free Shipping',
                    delivery_estimate: {
                        minimum: {
                            unit: 'hour',
                            value: 1,
                        },
                        maximum: {
                            unit: 'hour',
                            value: 1,
                        },
                    }
                }
            }
        ],
        phone_number_collection: {
            enabled: true,
        },
        line_items,
        mode: 'payment',
        success_url: `${process.env.GOODFOOD_FRONTEND_URL}/payment-success`,
        cancel_url: `${process.env.GOODFOOD_FRONTEND_URL}/cart`,
    });

    res.send({ url: session.url });
});

module.exports = router;

