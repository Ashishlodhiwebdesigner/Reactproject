import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
        <div className='blogCard'>
            <div className='blogImage'>
                <img src='../../assets/images/blog1.jpg' />
                <div className='date'>
                    <h5>01/07/2023</h5>
                </div>
            </div>
            <div className='blogcontent'>
                <div className='upload'>
                    <span><i className="fa-solid fa-user"></i> By-Admin</span>
                    <span><i className="fa-solid fa-comment"></i> 0 Comments</span>
                </div>
                <h2>Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore <span>....</span></h2>
                <Link to='/Blogs'>Read More</Link>
            </div>
        </div>
    </>
  )
}

export default Blog