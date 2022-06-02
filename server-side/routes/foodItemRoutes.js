const express = require("express");
const { allFoodItems, newFoodItem, foodItemDetails } = require("../controllers/foodItemControllers.js");
const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, "./uploaded_images")
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.fieldname + Date.now() + file.originalname)
//     }
// });

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", allFoodItems);

router.post("/", upload.single("image"), newFoodItem);

router.get("/:id", foodItemDetails);

module.exports = router;

