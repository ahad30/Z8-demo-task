import React from "react";
import ShopCart from "./ShopCart";
import "./recommanded.css";

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
       <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left'>
                <h2 className="mb-2">Recommended Items</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
