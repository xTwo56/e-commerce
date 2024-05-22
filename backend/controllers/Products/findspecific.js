
const Product = require("../../models/product");

exports.searchProductsByCategory = async (req, res) => {
    try {
      const { maincategory, subcategories,lastcategories,material } = req.body;
  
    
      let query = {};
      if (maincategory) {
        query['category.maincategory'] = maincategory;
      }
      if (subcategories) {
        query['category.subcategories'] = subcategories;
      }
      if (lastcategories) {
        query['category.lastcategories'] = lastcategories;
      }
      if(material){
        query['material']= material;
      }
  
      const products = await Product.find(query);
  
      if (!products.length) {
        return res.status(404).json({
          status: 404,
          message: "No products found in this category",
        });
      }
  
      console.log("Fetched successfully");
      res.send(products);
      console.log(products);
    } catch (error) {
      console.error("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  