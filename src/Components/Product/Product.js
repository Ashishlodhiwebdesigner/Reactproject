import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

function Product() {
  return (
    <>
        <div className='productReview'>
              <div className='product-img'>
                 <img src='../../assets/images/prod1.jpg' className='w-100' alt='product'/>
                 <div className='cart'>
                <ul>
                    <li><Link to="/Products">Add To Card</Link></li>
                    <li><Link to="/Products">Buy Now</Link></li>
                </ul>
              </div>
              </div>
             
              <div className='product-content text-light'>
                    <h2>Gemstone</h2>
                    <div className='price'><span style={{color:"darkorange", fontWeight:"bold"}}>$20</span>  <del>$80</del> <span style={{color:"darkorange", fontWeight:"bold"}}>(60% off)</span> </div>
              </div>
        </div>
    </>
  )
}

export default Product