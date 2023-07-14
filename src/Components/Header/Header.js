import React from 'react';
import "./Header.css";
import { Outlet, NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
        <header id='header-main'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-4 col-sm-3 col-md-2'>
                        <div className='brandLogo'>
                            <img src='./assets/images/Allso.png' alt='BrandLogo'/>
                        </div>
                    </div>
                    
                    <div className='col-8 col-sm-9 col-md-10'>
                        <div className='right-nav'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='header-top border-bottom'>
                                        <div className='row align-items-center'>
                                            <div className='col-8 d-none d-md-block'>
                                                <div className='customer-support'>
                                                    <ul>
                                                        <li><a href=''><i className="fa-solid fa-headset"></i> <span>Customer No.-</span>1234567890</a></li>
                                                        <li><a href=''><i className="fa-solid fa-envelope"></i> <span>Email -</span>xyz@gmail.com</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-md-4 '>
                                                <div className='customer-support d-flex justify-content-end'>
                                                    <ul>
                                                        <li  className='login'> <a href=''><i className="fa-solid fa-user-plus"></i> <span className='d-none d-xl-inline-block'>Login/Registration</span></a></li>
                                                        <li className='cart'><a href=''><i className="fa-solid fa-cart-shopping"></i> <span className='cart-pro'>02</span></a></li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 d-none d-lg-block'>
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Astrologers
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item" to="/TopFeatured">Featured Astrologers</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className="dropdown-item" to="PopularAstrologer">Popular Astrologers</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className="dropdown-item" to="/NewAstrologer">New Registred Astrologers</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shop</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Products">Products</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Blogs
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Admin Blog</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Astrologers Blog</a></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Pooja</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact</a>
                                        </li>
                                    </ul>
                                    </div>
                        
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className='col-12 d-block d-lg-none'>
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-end px-4">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Astrologers
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/TopFeatured">Featured Astrologers</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="PopularAstrologer">Popular Astrologers</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/NewAstrologer">New Registred Astrologers</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Products">Products</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blogs
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Admin Blog</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Astrologers Blog</a></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pooja</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        </div>
            
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header