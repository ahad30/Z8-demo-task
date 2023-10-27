import React from "react";
import logo from "../../components/assets/images/logo-colored.png";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box mt-2'>
          <div className=" mb-2"> 
            <img src={logo} alt='' />  
            </div>
            <p>Best information about the company gies here but now lorem ipsum is.</p>
            <div className='icon d-flex'>
              <div className=''>
                <i class='fa-brands fa-facebook me-3'></i>
              </div>
              <div className=''>
                <i class='fa-brands fa-linkedin me-3'></i>
              </div>
              <div className=''>
                <i class='fa-brands fa-twitter me-3'></i>
              </div>
              <div className=''>
                <i class='fa-brands fa-instagram me-3'></i>
              </div>
              <div className=''>
                <i class='fa-brands fa-youtube'></i>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2 className="ms-2">About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Partnership</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2 className="ms-3">Information</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
