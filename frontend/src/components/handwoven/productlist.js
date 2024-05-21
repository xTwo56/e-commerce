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
      <div className='slidingInfo'>
        <h1>Handwoven Sarees from all over Bharat</h1>
        <div className='productBar'>
          <p>CHANDERI</p>
          <p>PATOLA</p>
          <p>PAITHANI</p>
          <p>LEHERIA</p>
          <p>BANARASI</p>
          <p>JAMDANI</p>
          <span className='viewAllText'>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='listContainer'>
        <button className='prevButton'> <img src={prevButton} /></button>
        <div className="product-list">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <button className='nextButton'> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

 export default HandwovenProductList;