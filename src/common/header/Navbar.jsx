import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {

  return (
    <>
      <header >
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className="d-flex">
              <i class="fa-solid fa-bars me-2"></i>
              <li>
                 Category
              </li>
              <li>
                 Offers
              </li>
              <li>
                Gifts
              </li>
              <li>
                Projects
              </li>
              <li>
                Menu
              </li>
              <li>
                Help
              </li>
            </ul>
          </div>

          <div className='d-flex shipment'>
            <div className="me-3">
              English,USD <span><i class="fa-solid fa-chevron-down"></i></span>
            </div>
            <div>
            Ship to
            <img src='/images/undefined117.png' alt=""  className="flag ms-1"/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
