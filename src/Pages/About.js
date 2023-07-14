import React from 'react';
import './css/About.css'


import Bread from '../Components/Bread/Bread'
import Heading from '../Components/Heading/Heading';

function About() {
  return (
    <>
    <Bread page='About Us'></Bread>
       <div className='About py-5'>
         <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='aboutImage'>
                        <img src='../../assets/images/about.jpg'/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='aboutContent'>
                        <Heading heading='Know About Astrology'></Heading>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it esdehas a more-or less normal distribution of letters,</p>
                        <p>As opposed to using 'Content here, content here', making it look likesdesdee readable English.Many desktop publishing packages and web page editors sdesnow use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will usdencover many web sites still in their web page editors sdesnow infancy.</p>
                    </div>
                    <div className='contactUs'>
                        <div className='row align-items-center'>
                          <div className='col-3'>
                            <div className='call'>
                              <i className="fa-solid fa-phone"></i>
                            </div>
                          </div>
                          <div className='col-9'>
                            <div className='callNumber'>
                                <p>Contact Our Expert Astrologers</p>
                                <a href=''>90 997 997 80</a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </>
  )
}

export default About