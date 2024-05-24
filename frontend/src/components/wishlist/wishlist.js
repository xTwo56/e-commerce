import React from 'react';
import './wishlist.css';

const Wishlist = () => {
  const products = [
    {
      name: "Desert Mirage: Beige & Black Chanderi Cotton Saree",
      price: "₹9,999.00",
      stock: "In Stock",
      imgSrc: "" 
    },
    {
      name: "Artistic Allure: Black Cotton Saree with Applique Work",
      price: "₹3,500.00",
      stock: "In Stock",
      imgSrc: "" 
    },
    {
      name: "Artistic Allure: Black Cotton Saree with Applique Work",
      price: "₹3,500.00",
      stock: "In Stock",
      imgSrc: "" 
    }
  ];

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <div className="product-info">
                  <img src={product.imgSrc} alt={product.name} className="product-img" />
                  {product.name}
                </div>
              </td>
              <td>{product.price}</td>
              <td className="stock-status">{product.stock}</td>
              <td>
                <button className="add-to-cart">Add to cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
