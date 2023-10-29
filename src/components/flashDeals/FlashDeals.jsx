import React from "react"
import FlashCard from "./FlashCard"
import "./deals.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading10 f_flex mb-4'>
          <img src="images/coundown.png" alt="" />
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
