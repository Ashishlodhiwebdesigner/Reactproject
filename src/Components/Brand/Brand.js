import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Brand.css'

function Brand() {
    const Brand = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:4,
        centerPadding:"5px",
        autoplay:true,
        responsive: [
            {
              breakpoint: 639,
              settings: {
                slidesToShow: 3,
                slidesToScroll:3,
                infinite: true,
                dots: true,
                arrows:false
              }
            },
            {
                breakpoint: 639,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:2,
                  infinite: true,
                  dots: true,
                  arrows:false
                }
              }
        ]
      };
  return (
    <>
<div className='col-12'>
    <div className='Brandslider'>
    <Slider {...Brand}>
        <div className='brandCard'>
            <img src='../../assets/images/Brand/bhagyalaxmi.jpeg'></img>
        </div>
        <div className='brandCard'>
            <img src='../../assets/images/Brand/athshree.webp'></img>
        </div>
        <div className='brandCard'>
            <img src='../../assets/images/Brand/market.png'></img>
        </div>
        <div className='brandCard'>
            <img src='../../assets/images/Brand/ved.png'></img>
        </div>
        <div className='brandCard'>
            <img src='../../assets/images/Brand/vivahallso.webp'></img>
        </div>

    </Slider>
    </div>
</div>
    </>
  )
}

export default Brand