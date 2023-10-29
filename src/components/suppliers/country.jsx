import React from 'react';
import './country.css';
const country = () => {
  return (
    <div className='container mb-5 mt-4 '>
      <h2 className='mb-5'>Suppliers by region</h2>
    <div className="row country">
    <div className="col-md-3">
    <div className="d-flex">
     <img src="images/undefined49.png" alt="" className='me-3' />
     <div><h4>Arab Emirates</h4></div>
     </div>
     <div>
        <div className="d-flex">
        <img src="images/undefined50.png" alt="" className='mt-3 me-3' />
        <div><h4 className='mt-3'>Denmark</h4></div>
        </div>
    </div>
    </div>

    <div className="col-md-3">
    <div className="d-flex">
     <img src="images/undefined51.png" alt="" className='me-3' />
     <div><h4>USA</h4></div>
     </div>
     <div>
        <div className="d-flex">
        <img src="images/undefined52.png" alt="" className='mt-3 me-3' />
        <div><h4 className='mt-3'>Australia</h4></div>
        </div>
    </div>
    </div>

    <div className="col-md-3">
    <div className="d-flex">
     <img src="images/undefined53.png" alt="" className='me-3' />
     <div><h4>France</h4></div>
     </div>
     <div>
        <div className="d-flex">
        <img src="images/undefined54.png" alt="" className='mt-3 me-3' />
        <div><h4 className='mt-3'>Russia</h4></div>
        </div>
    </div>
    </div>

    <div className="col-md-3">
    <div className="d-flex">
     <img src="images/undefined55.png" alt="" className='me-3' />
     <div><h4>China</h4></div>
     </div>
     <div>
        <div className="d-flex">
        <img src="images/undefined56.png" alt="" className='mt-3 me-3' />
        <div><h4 className='mt-3'>Italy</h4></div>
        </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default country
