import React from 'react';
import './Popular.css'

function Popular() {
  return (
    <>
         <div className="user-card mt-5">
                <span className="pro">Verified</span>
                <a href="https://allso.in/Welcome/Top_Populer"> <img className="round_user_img"   src="https://allso.in/assets/as_uploads/62ff52eab40cf.jpg" alt="astrologers,online astrologr, kundali" /></a>
                <h3 className="user_marquee_name">
                    <marquee width="95%" direction="left" scrollamount="2" height="30%">
                    Prof.Sanjay&nbsp;
                    Rout </marquee>
                </h3>
                <h6 className="catergory_feild">Spiritual Guide</h6>
                <div className="buttons">
                    <a href="https://allso.in/Welcome/Top_Populer" className="primary">
                    View Profile
                    </a>
                </div>
                <div className="skills">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="small-ratings">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        {/* <i className="fa fa-star-half-o" aria-hidden="true" style="color:black;"></i> */}
                    </div>
                    </div>
                </div>
                <div className="skills views">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="small-ratings">
                        <i className="fa fa-eye" aria-hidden="true"></i><span> 5655</span>
                    </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Popular;