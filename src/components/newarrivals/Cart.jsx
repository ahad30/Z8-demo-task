import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
       <div className="f_flex container">
        <div className="banner mt-3">
        <h4 className='text-dark fw-bold'>
          Home and Outdoor
          <button type="button" class="btn btn-light mt-3 ">Source now </button>
        </h4>
        </div>


      <div className='content grid10 product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
      </div>

      <div className="f_flex container">
        <div className="banner2 mt-3">
        <h4 className='text-dark fw-bold'>
         Consumer Electronics and gadgets
          <button type="button" class="btn btn-light  mt-3">Source now </button>
        </h4>
        </div>

      <div className='content grid10 product'>
       <div>
        <img src="images/undefined88.png" alt="" />
        <h4>Watch</h4>
        <span>$50</span>
       </div>
       <div>
        <img src="images/undefined39.png" alt="" />
        <h4>Headphone</h4>
        <span>$350</span>
       </div>
       <div>
        <img src="images/undefined15.png" alt="" />
        <h4>Mixer</h4>
        <span>$250</span>
       </div>
       <div>
        <img src="images/undefined14.png" alt="" />
        <h4>Juicer</h4>
        <span>$150</span>
       </div>
      </div>
      </div>
    </>
  )
}

export default Cart
