// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'

const HandwovenProductList = () => {
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
      <div className='handslidingInfo'>
        <h1>Handwoven Sarees from all over Bharat</h1>
        <div className='handproductBar'>
          <p>CHANDERI</p>
          <p>PATOLA</p>
          <p>PAITHANI</p>
          <p>LEHERIA</p>
          <p>BANARASI</p>
          <p>JAMDANI</p>
          <span className='handviewAllText'>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='handlistContainer'>
        <button className='handprevButton'> <img src={prevButton} /></button>
        <div className="handproduct-list">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <button className='handnextButton'> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

 export default HandwovenProductList;
