import React from 'react';
import './productsearch.css';

const products = [
  {
    name: 'Burgundy Bloom Hand Block Print Palazzo',
    price: '*850.00',
    image: 'URL_to_image_1',
    
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*850.00',
    image: 'URL_to_image_2',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*1,500.00',
    image: 'URL_to_image_3',
    
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*999.00',
    image: 'URL_to_image_4',
    
  },
  {
    name: 'Burgundy Bloom Hand Block Print Palazzo',
    price: '*850.00',
    image: 'URL_to_image_1',
    
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*850.00',
    image: 'URL_to_image_2',
  
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*1,500.00',
    image: 'URL_to_image_3',
    
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*999.00',
    image: 'URL_to_image_4',
    
  },
  {
    name: 'Burgundy Bloom Hand Block Print Palazzo',
    price: '*850.00',
    image: 'URL_to_image_1',
    
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*850.00',
    image: 'URL_to_image_2',
     
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*1,500.00',
    image: 'URL_to_image_3',
    
  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*999.00',
    image: 'URL_to_image_4',
    
  }
  // Add more products here...
];

const Product = ({ product }) => (
  <div className="prod">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <p>{product.category}</p>
  </div>
);

const SearchProduct = () => (
  <div className="list">
    {products.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </div>
);

export default SearchProduct;