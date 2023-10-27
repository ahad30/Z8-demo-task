import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading'>
            <div className='heading-left'>
              <h2>New Arrivals </h2>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
