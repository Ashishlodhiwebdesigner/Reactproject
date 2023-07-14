import React from 'react';
import './FrontCards.css';
import { Link } from 'react-router-dom';

function FrontCards(props) {
  return (
    <div className='mt-5 '>
      <div className='servicecard text-center'>
            <div className='service-icon'>
                <img src={props.catimage}/>
            </div>
            <div className='service-content'>
                <h2>{props.cattitle}</h2>
                <p>All Best {props.catpara}</p>
                <Link to={props.catlink} className='viewbtn'>View All</Link>
            </div>
      </div>
    </div>
  )
}

export default FrontCards;