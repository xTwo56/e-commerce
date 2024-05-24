// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'

const DressProductList = () => {
  const products = [
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree', 
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree', 
    },
    {
      image: 'image4.jpg',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
    }
  ];

  return (
    <div>
      <div className='dressslidingInfo'>
        <h1>Dress Materials</h1>
        <div className='dressproductBar'>
          <p>DRESS MATERIAL</p>
          <p>TOPS & TUNICS</p>
          <p>BOTTOM WEAR</p>
          <p>JEWELLERY</p>
          <p>FOOTWEAR</p>
        </div>
      </div>
      <div className='dresslistContainer'>
        <button className='dressprevButton'> <img src={prevButton} /></button>
        <div className="dressproduct-list">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.title}
            />
          ))}
        </div>
        <button className='dressnextButton'> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

export default DressProductList;
