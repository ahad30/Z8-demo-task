import React from "react"
import Cart from "./Cart"
import "./newarrivals.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading'>
              <h2>New Arrivals </h2>
          </div>
          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
