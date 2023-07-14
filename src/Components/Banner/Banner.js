import React from 'react';
import './Banner.css'

function Banner() {
  return (
    <>
      <div className='Banner'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div className='bannerText'>
                            <h1 className='mainHeading'>World's Largest Market Place For Astrologers & Vastu Shastri And Others</h1>
                            <p>We Are Providing World`S Largest Platform. For Astrologers, VastuShastri, Palmist, Tarot Card Reader, Purohits, Vedic Brahmins, Spiritual Consultants, Dharmshastracharya, Vyakaranacharya, Puranacharya, Bhagvatacharya Etc.</p>
                       
                        </div>
                    </div>
                   <div className='col-lg-6'>
                        <div className='BannerImage'>
                            <img src='./assets/images/banner_image.png' />
                        </div>
                   </div>
                </div>    
            </div> 
       </div>  
    </>
  )
}

export default Banner