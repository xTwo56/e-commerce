// src/components/Product.js
import React, { useState } from 'react';
import './product.css';
import Handbags from '../../assets/handbag.png';
import like from "../../assets/like.png";

const Product = ({ image, title, price }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`handproduct-card ${hover ? 'hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={Handbags} alt={title} />
      <div className="handtitleContainer">
        <h3>{title}</h3>
        <div className="handlikeImgContainer">
          <img src={like} className='handlikeImg' />
        </div>
      </div>
      <p>₹ {price}</p>
      <button className="handadd-to-cart-btn">ADD TO CART</button>
    </div>
  );
};

export default Product;
