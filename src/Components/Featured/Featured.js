import React from 'react';
import './Featured.css';


function Featured(props) {
  return (
    <>
      <div className="featureCard mt-5">
          <div className="card-front">
              <img src={(props.userimg)}/>
              <div className='front-content'>
                  <h4 className='category'>{props.feild}</h4>
                  <div className='pro-vv'>
                  <h4 className='verify'>verifed</h4>
                  <h4 className='views'><i className="fa fa-eye" aria-hidden="true"></i> {props.view}</h4></div>
              </div>
          </div>
          <div className="card-back">
            <div className='feature-tag'>
              <h4 className='feature'>trusted</h4>
              <h4 className='feature'>featured</h4>
            </div>
            <div className='profile-name' ><h2>{props.name}</h2></div>
            <div className='location'>location <i className="fa fa-map-marker" aria-hidden="true"></i> login for view</div>
          </div>
          <div className='visitbtn mt-5 justify-content-center d-flex'>
            <button><a href='#'>Visit Now</a></button>
            
          </div>
      </div>
    </>
  )
}

export default Featured