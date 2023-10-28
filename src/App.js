import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/flashDeals/Data"
import Footer from "./common/footer/Footer"
import Sdata from "./components/recommanded/Sdata"

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata
  return (
    <>
      <Router>
        <Header />
        <Pages productItems={productItems}  shopItems={shopItems} />
        <Footer />
      </Router>
    </>
  )
}

export default App
