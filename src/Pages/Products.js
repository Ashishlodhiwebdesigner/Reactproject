import React, { useState } from 'react'
import Heading from '../Components/Heading/Heading'
import Bread from '../Components/Bread/Bread';
import './css/AllProducts.css';
import ProductList from '../Components/ProductList/ProductList';
import { Link } from 'react-router-dom';



function Products() {
    const [items , setitems] = useState (ProductList);
    const flterItem = (cateItem) => {
        const updateItems = ProductList.filter((curEle)=> {
            return curEle.category=== cateItem;
        });
        setitems(updateItems);
    }
  return (
    <>
    <Bread page="All Product"></Bread>
        <div className='AllProducts pb-4'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 pb-4'>
                        <Heading heading='Our Latest Product'></Heading>
                    </div>
                   <div className='col-12'>
                        <div className='productcontent'>
                            <div className='row'>
                                <div className='col-2'>
                                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link active"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="true" onClick={()=>setitems(ProductList)}>All</button>
                                        <button className="nav-link"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false" onClick={()=>flterItem('Rudraksha')}>Rudraksha</button>
                                        <button className="nav-link"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false" onClick={()=>flterItem('Astro Product')}>Astro Product</button>
                                        <button className="nav-link"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false" onClick={()=>flterItem('Ayurvedik')}>Ayurvedik</button>
                                        <button className="nav-link"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false" onClick={()=>flterItem('Books')}>Book</button>
                                        <button className="nav-link"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false" onClick={()=>flterItem('Bracelet')}>Bracelet</button>
                                    </div>
                                 </div>
                                
                                <div className='col-10'>
                                    <div className='row'>
                                        {
                                            items.map((elem)=>{
                                                const{id, image, name, category, Price} = elem;

                                                return (
                                                    <>
                                                         <div className='col-3 mb-4'>
                                                            <div className='productReview'>
                                                                    <div className='product-img'>
                                                                        <img src={image} className='w-100' alt={category}/>
                                                                        <div className='cart'>
                                                                        <ul>
                                                                            <li><Link to="/Products">Add To Card</Link></li>
                                                                            <li><Link to="/Products">Buy Now</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                    </div>
                                                                    <div className='product-content text-light'>
                                                                            <h2>{name}</h2>
                                                                            <div className='price'><span style={{color:"darkorange", fontWeight:"bold"}}>${Price}</span>  <del>$80</del> <span style={{color:"darkorange", fontWeight:"bold"}}>(60% off)</span> </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    
                                                    </>
                                                )
                                            })
                                        }
                                       
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products