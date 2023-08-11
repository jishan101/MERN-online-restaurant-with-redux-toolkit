const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const foodItemRoutes = require("./routes/foodItemRoutes.js");
const stripeRoutes = require("./routes/stripeRoutes.js");

const app = express();

const PORT = process.env.PORT || 8000;

dotenv.config();
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(PORT);
        console.log("Database connected");
    })
    .catch(err => {
        console.log(err);
    });

app.set("views", "./views");
app.set("view engine", "ejs");

// app.use(morgan("dev"));
app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/fooditems", foodItemRoutes);
app.use("/stripe", stripeRoutes);

app.get("/", (req, res) => {
    res.redirect("/new");
});

app.get("/new", (req, res) => {
    res.render("createFoodItem", {title: "Create A New Food Item"});
});

app.get("/about", (req, res) => {
    res.render("about", {title: "About Us!"});
});

app.use((req, res) => {
    res.status(404).render("404", {title: "404 Not Found!"});
});

