// src/components/Product.js
import React, { useState } from 'react';
import './product.css';
import Handbags from '../../assets/handbag.png';
import like from "../../assets/like.png";

const Product = ({ image, title, price }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`dressproduct-card ${hover ? 'hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={Handbags} alt={title} />
      <div className="dresstitleContainer">
        <h3>{title}</h3>
        <div className="dresslikeImgContainer">
        </div>
      </div>
      <button className="dressadd-to-cart-btn">SHOP NOW</button>
    </div>
  );
};

export default Product;
