import React from "react";
import Home from "../components/Main-banner/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/recommanded/Shop";
import Wrapper from "../components/extra-service/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../components/contact/contact";
import Country from "../components/suppliers/country";
import Subscribe from "../components/subscribe/subscribe";



const Pages = ({ productItems, addToCart, shopItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <NewArrivals />
      <Contact/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
      <Country/>
      <Subscribe/>
    </>
  )
}

export default Pages
