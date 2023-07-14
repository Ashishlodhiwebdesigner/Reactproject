import React from 'react';
import './Heading.css'

function Heading(props) {
  return (
    <>
        <div className='col-12 my-4'>
            <div className='titleTag'>
                <h2 className='titleHead'>
                   {props.heading}
                </h2>
            </div>
        </div>
    </>
  )
}

export default Heading