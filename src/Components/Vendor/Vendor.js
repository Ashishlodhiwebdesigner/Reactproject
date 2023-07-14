import React from 'react';
import './Vendor.css'
import { Link } from 'react-router-dom';

function Vendor() {
  return (
    <>
        <div className='VendorShopCard'>
           <Link to="/shops">
            <img src='../../assets/images/shop1.jpg ' alt='shop name' className='shopImage'/>
                <div className='shopContent'>
                    <img src="../assets/images/kartik.jpg" alt="profile-sample" className="profile" />
                </div>
                <div className='shopname'>
                    <h2>Prof. Kartik Rawal Shastri</h2>
                </div>
           </Link>
        </div>
    </>
  )
}

export default Vendor