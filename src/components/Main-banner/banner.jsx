import React from 'react';
import "./Home.css";

const Banner = () => {
  return (
    <div id="hero" className='mt-4'>
        <div className ="container banner-text">
            <h3 className="text-dark">
                <span >Latest Trending </span>
           </h3>
            <h1 className="text-dark">
            <span> Electronic Items</span>
            </h1>
            <button className='btn btn-light fw-bold '>Learn more</button>
            </div>
        </div>
      
  )
}

export default Banner;
