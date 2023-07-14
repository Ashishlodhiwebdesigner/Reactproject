import React from 'react'
import Banner from '../Components/Banner/Banner';
import FrontCards from '../Components/FrontCards/FrontCards';
import Heading from '../Components/Heading/Heading';
import Review from '../Components/Review/Review';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../Components/Product/Product';
import Blog from '../Components/Blog/Blog';
import Vendor from '../Components/Vendor/Vendor';
import Pooja from '../Components/Pooja/Pooja';
import Brand from '../Components/Brand/Brand';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:2,
    centerPadding:"5px",
    autoplay:true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false,
            }
          }
    ]

  };
  const product = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
    centerPadding:"5px",
    autoplay:true,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll:2,
              infinite: true,
              dots: true,
             
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
          },
          {
            breakpoint: 479,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              infinite: true,
              dots: true,
              arrows:false
             
            }
          }
    ]
  };
  return (
    <>
        <Banner></Banner>
       <div className='Featured'>
        <div className='container'>
              <div className='row'>
                <Heading heading="Featured Category"></Heading>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/astrology.png' cattitle='Astrologers' catpara='Astrologers' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/vastu-consultancy.png' cattitle='Vastu Shastri' catpara='Vastu Shastri' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/tarot-cards.png' cattitle='Tarot Card Reader' catpara='Tarot Card Reader' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/numerology.png' cattitle='Numerologist' catpara='Numerologist' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/crystal-ball.png' cattitle='Crystal Healer' catpara='Crystal Healer' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/lama.png' cattitle='Lamafera Master' catpara='Lamafera Master' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/palmistry.png' cattitle='Palmist' catpara='Palmist' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/jain.png' cattitle='Jain Astrologer' catpara='Jain Astrologer' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/lal-kitab.png' cattitle='Lal Kitab' catpara='Lal Kitab' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/spiritual.png' cattitle='Spiritual' catpara='Spiritual' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/reiki.png' cattitle='Reiki Healer' catpara='Reiki Healer' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/pendant.png' cattitle='Pandit' catpara='Pandit' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/puranachrya.png' cattitle='Puranacharya' catpara='Puranacharya' catlink='/FeaturedAstrologer'></FrontCards>
                </div>
              </div>
          </div>
       </div>
        
       <div className='popular'  style={{background:"#031d2e !important"}}>
        <div className='container'>
              <div className='row'>
                <Heading heading="Popular Category"></Heading>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/astrology.png' cattitle='Astrologers' catpara='Astrologers' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/vastu-consultancy.png' cattitle='Vastu Shastri' catpara='Vastu Shastri' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/tarot-cards.png' cattitle='Tarot Card Reader' catpara='Tarot Card Reader' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/numerology.png' cattitle='Numerologist' catpara='Numerologist' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/crystal-ball.png' cattitle='Crystal Healer' catpara='Crystal Healer' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/lama.png' cattitle='Lamafera Master' catpara='Lamafera Master' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/palmistry.png' cattitle='Palmist' catpara='Palmist' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/jain.png' cattitle='Jain Astrologer' catpara='Jain Astrologer' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/lal-kitab.png' cattitle='Lal Kitab' catpara='Lal Kitab' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/spiritual.png' cattitle='Spiritual' catpara='Spiritual' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/reiki.png' cattitle='Reiki Healer' catpara='Reiki Healer' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/pendant.png' cattitle='Pandit' catpara='Pandit' catlink='/PopularAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/puranachrya.png' cattitle='Puranacharya' catpara='Puranacharya' catlink='/PopularAstrologer'></FrontCards>
                </div>
              </div>
          </div>
       </div>
       <div className='review'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
            <Heading heading="What People Say"></Heading>
            </div>
            <div className='col-12'>
                <div className='reviewslider'>
                <Slider {...settings}>
                    <Review revivewimg='../../assets/images/kartik.jpg' reviewname='Kartik Rawal' feildname='Astrologer' message='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaesdisus commodo viverra maecenas accumsan lacus vel facilisis. '></Review>
                    <Review revivewimg='../../assets/images/kartik.jpg' reviewname='Kartik Rawal' feildname='Astrologer' message='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaesdisus commodo viverra maecenas accumsan lacus vel facilisis. '></Review>
                    <Review revivewimg='../../assets/images/kartik.jpg' reviewname='Kartik Rawal' feildname='Astrologer' message='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaesdisus commodo viverra maecenas accumsan lacus vel facilisis. '></Review>
                    <Review revivewimg='../../assets/images/kartik.jpg' reviewname='Kartik Rawal' feildname='Astrologer' message='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaesdisus commodo viverra maecenas accumsan lacus vel facilisis. '></Review>
                </Slider>
              </div>
            </div>
          </div>
       
        </div>
      </div>

      <div className='NewRegistration py-4' style={{background:"#031d2e" , color:"#fff"}}>
        <div className='container'>
              <div className='row'>
                <Heading heading="New Registration"></Heading>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/astrology.png' cattitle='Astrologers' catpara='Astrologers' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/vastu-consultancy.png' cattitle='Vastu Shastri' catpara='Vastu Shastri' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/tarot-cards.png' cattitle='Tarot Card Reader' catpara='Tarot Card Reader' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/numerology.png' cattitle='Numerologist' catpara='Numerologist' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/crystal-ball.png' cattitle='Crystal Healer' catpara='Crystal Healer' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/lama.png' cattitle='Lamafera Master' catpara='Lamafera Master' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/palmistry.png' cattitle='Palmist' catpara='Palmist' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/jain.png' cattitle='Jain Astrologer' catpara='Jain Astrologer' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/lal-kitab.png' cattitle='Lal Kitab' catpara='Lal Kitab' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/spiritual.png' cattitle='Spiritual' catpara='Spiritual' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/reiki.png' cattitle='Reiki Healer' catpara='Reiki Healer' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/pendant.png' cattitle='Pandit' catpara='Pandit' catlink='/NewAstrologer'></FrontCards>
                </div>
                <div className='col-6 col-md-4 col-lg-3'>
                    <FrontCards catimage='../../assets/images/icons/puranachrya.png' cattitle='Puranacharya' catpara='Puranacharya' catlink='/NewAstrologer'></FrontCards>
                </div>
              </div>
          </div>
       </div>


       <div className='review'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
            <Heading heading="Latest Product"></Heading>
            </div>
            <div className='col-12'>
                <div className='reviewslider'>
                  <Slider {...product}>
                  <Product></Product>
                  <Product></Product>
                  <Product></Product>
                  <Product></Product>
                  <Product></Product>
                  </Slider>

                  
              </div>
            </div>
          </div>
       
        </div>
      </div>



      <div className='Blog py-4 ' style={{background:"#031d2e" , color:"#fff"}}>
        <div className='container'>
              <div className='row'>
            
                <div className='col-12 mb-5'>
                   <Heading heading="Latest Blog"></Heading>
               </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                    <Blog></Blog>
                </div>
              </div>
          </div>
       </div>

       <div className='VendorShop py-4 '>
        <div className='container'>
              <div className='row'>
                <div className='col-12 mb-5'>
                   <Heading heading="Vendor Shop"></Heading>
               </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>

                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3 mb-4'>
                   <Vendor></Vendor>
                </div>
                
              </div>
          </div>
       </div>

       <div className='PoojaMain py-4 ' style={{background:"#031d2e" , color:"#fff"}}>
        <div className='container'>
              <div className='row'>
            
                <div className='col-12 mb-5'>
                   <Heading heading="Book Online Pooja"></Heading>
               </div>
                <div className='col-6 col-md-4 col-lg-3 mb-4'>
                   <Pooja></Pooja>
                </div>
                <div className='col-6 col-md-4 col-lg-3 mb-4'>
                   <Pooja></Pooja>
                </div>
                <div className='col-6 col-md-4 col-lg-3 mb-4'>
                   <Pooja></Pooja>
                </div>
                <div className='col-6 col-md-4 col-lg-3 mb-4'>
                   <Pooja></Pooja>
                </div>
             
       
              </div>
          </div>
       </div>


       <div className='brand'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Heading heading="Our Brands"></Heading>
                    </div>
                    <div className='col-12'>
                        <Brand></Brand>
                    </div>
                </div>
            </div>
      </div>
    
    </>
  )
}

export default Home;