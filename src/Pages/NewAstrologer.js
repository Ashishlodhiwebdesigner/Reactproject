import React from 'react'
import Heading from '../Components/Heading/Heading';
import Popular from '../Components/Popular/Popular';
import './css/NewAstrologer.css'
import Bread from '../Components/Bread/Bread';

function NewAstrologer() {
  return (
    <>
    <Bread page='New Registred Astrologers'></Bread>
      <div className='NewAstrologer py-4'>
        <div className='container'>
            <div className='row'>
             <Heading heading="New Registred Astrologers"></Heading>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Popular></Popular>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Popular></Popular>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Popular></Popular>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Popular></Popular>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Popular></Popular>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default NewAstrologer