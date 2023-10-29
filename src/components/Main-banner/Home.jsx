import React from "react";
import Categories from "./Categories";
import Banner from "./banner";
import SideText from "./sideText";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
       <div className="grid_banner">
        <div className=""><Categories/></div>
        <div className=""><Banner/></div>
        <div className=""><SideText/></div>
      </div>
        </div>
      </section>
    </>
  )
}

export default Home
