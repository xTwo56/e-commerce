import React, { useState } from 'react';
import './cartpage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Purple Hand Woven Cotton Half Sleeves Kurta',
      price: 450,
      quantity: 1,
      imageUrl: 'url-to-image1', 
    },
    {
      id: 2,
      name: 'Indigo Bliss White Polka Dot Hand Block Print Dress Material with Dupatta',
      price: 1849,
      quantity: 1,
      imageUrl: 'url-to-image2', 
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <input type="checkbox" />
        <span>Got a gift card from a loved one? Use it here!</span>
      </div>
      <table className="cart-table">
        <thead className="thead">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="all">
              <td>
                <img src={item.imageUrl} alt={item.name} className="product-image" />
                {item.name}
              </td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </td>
              <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-actions">
        <a href="#">Back To Shop</a>
        <button>Clear cart</button>
      </div>
      <div className="coupon-shipping">
        <div className="coupon">
          <h3>Coupon Discount</h3>
          <input type="text" placeholder="Coupon code" />
          <button>Apply coupon</button>
        </div>
        <div className="shipping">
          <h3>Calculate shipping</h3>
          <select>
            <option>India</option>
          </select>
          <select>
            <option>Telangana</option>
          </select>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postcode / ZIP" />
          <button>Update</button>
        </div>
        <div className="cart-summary">
            <div className='price'>
        <p className="p1">Subtotal: ₹{subtotal.toFixed(2)}</p>
        <div className="bor"></div>
        <p className="p2">Total: ₹{subtotal.toFixed(2)}</p>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
      </div>
      </div>
    </div>
  );
};

export default CartPage;
