const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/Products/createProduct");
const { deleteProduct } = require("../controllers/Products/deleteproduct");
const { getAllProducts } = require("../controllers/Products/getallproducts");
const { updateProduct } = require("../controllers/Products/updateProduct");
const { createComment } = require("../controllers/Reviews/reviewcreate");
const { getAllReview } = require("../controllers/Reviews/getallreview");



router.post("/addreview", createComment);
router.get("/getallreviews",getAllReview);


router.post("/addproduct", createProduct);
router.post("/deleteproduct",deleteProduct);
router.get("/getallproducts",getAllProducts);
router.post("/updateproduct/:id",updateProduct);

module.exports = router;
