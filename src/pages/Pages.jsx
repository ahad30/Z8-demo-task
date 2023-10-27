import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/contact/contact"

const Pages = ({ productItems, addToCart, shopItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <NewArrivals />
      <Contact/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  )
}

export default Pages
