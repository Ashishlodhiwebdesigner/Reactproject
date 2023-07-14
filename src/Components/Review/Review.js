import React from 'react';
import './Review.css';

function Review(props) {

  return (
    <>
          <div className='review-content'>
              <div className='user-img'>
                  <img src={props.revivewimg} alt={props.reviewname}/>
              </div>
              <div className='review-content'>
                <p>" {props.message} "</p>
                <div className='userName'>{props.reviewname}</div>
                <span>{props.feildname}</span>
              </div>
          </div>
    </>
  )
}

export default Review