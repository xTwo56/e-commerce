// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'

const BlogProductList = () => {
  const products = [
    {
      image: 'handbags.png',
      date: 'sept 01, 2023',
      title: 'Fall Sweaters we all should wear in October',
    },
    {
      image: 'handbags.png',
      date: 'sept 01, 2023',
      title: 'Men s Style for an Urban Safari',     
    },
    {
      image: 'handbags.png',
      date: 'sept 01, 2023',
      title: 'Fall Sweaters we all should wear in October',
    },
    {
      image: 'image4.jpg',
      date: 'sept 01, 2023',
      title: 'Men s Style for an Urban Safari',
    }
  ];

  return (
    <div>
      <div className='blogslidingInfo'>
        <h1>Blog Articles</h1>
        <div className='blogproductBar'>
          <p>FASHION TRENDS</p>
          <p>WARDROBE TIPS</p>
          <span className='blogviewAllText'>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='bloglistContainer'>
        <div className="blogproduct-list">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              date={product.date}
              title={product.title}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogProductList;
