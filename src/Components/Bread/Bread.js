import React from 'react';
import './Bread.css'
import { Link } from 'react-router-dom';

function Bread(props) {
  return (
    <>
        <div className='breadcrumbs'>
            <div className='container'>
               <div className='text-center breadcontent'>
                    <div className='pagename'><h4>{props.page}</h4></div>
                    <div className='navigate'><Link to='/'>Home</Link> // {props.page} </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Bread