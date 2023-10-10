import React from 'react'
import { Link } from 'react-router-dom';


export default function SingleProduct({ product }) { 

    return (
      <div className='product-item'>
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} width="100" />
          </Link>
          <div className='description'>
            <h2>{product.title}</h2>
            <b>${product.price}</b>
          </div>
        </li>
      </div>
    );
  }