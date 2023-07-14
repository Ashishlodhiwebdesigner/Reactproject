import React from 'react'
import { Link } from 'react-router-dom';
import './Pooja.css';

function Pooja() {
  return (
    <>
        <div className='Pooja'>
            <div className='PoojaImage'>
                <img src='../../assets/images/pooja.jpg' alt='pooja image' className='w-100'/>
            </div>
            <div className='poojacontent'>
                <h3>Laghu Rudra Homtmaka</h3>
                <Link to='/AllPooja' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book Now</Link>
            </div>
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">ENQUIRY NOW</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
                 <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile No</label>
                    <input type="number" className="form-control" id="mobileNumber" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
              
             
                <button type="submit" className="btn subbtn">Submit</button>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Pooja