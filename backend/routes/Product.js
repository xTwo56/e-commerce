const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/createProduct");
const { deleteProduct } = require("../controllers/deleteproduct");
const { getAllProducts } = require("../controllers/getallproducts");
const { updateProduct } = require("../controllers/updateProduct");
const { createComment } = require("../controllers/reviewcreate");
const { getAllReview } = require("../controllers/getallreview");



router.post("/addreview", createComment);
router.get("/getallreviews",getAllReview);


router.post("/addproduct", createProduct);
router.post("/deleteproduct",deleteProduct);
router.get("/getallproducts",getAllProducts);
router.post("/updateproduct/:id",updateProduct);

module.exports = router;
