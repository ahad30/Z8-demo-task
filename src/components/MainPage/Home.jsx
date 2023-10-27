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
       <div className="row">
        <div className="col-12 col-md-2"><Categories/></div>
        <div className="col-12 col-md-6"><Banner/></div>
        <div className="col-12 col-md-4"><SideText/></div>
      </div>
        </div>
      </section>
    </>
  )
}

export default Home
