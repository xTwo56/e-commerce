// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'

const CustomProductList = () => {
  const products = [
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    },
    {
      image: 'image4.jpg',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    }
  ];

  return (
    <div>
      <div className='customslidingInfo'>
        <h1>Custom Products</h1>
        <div className='customproductBar'>
          <p>EMBROIDERED</p>
          <p>SAREES</p>
          <p>KURTAS</p>
          <p>JACKETS-SETS</p>
          <span className='customviewAllText'>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='customlistContainer'>
        <button className='customprevButton'> <img src={prevButton} /></button>
        <div className="customproduct-list">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <button className='customnextButton'> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

export default CustomProductList;
