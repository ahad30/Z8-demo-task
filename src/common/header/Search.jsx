import React from "react";
import logo from "../../components/assets/images/logo-colored.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {


  return (
    <>
      <section className='search mb-3'>
        <div className='container d-flex'>
            <div className=""> 
            <img src={logo} alt='' />  
            </div>
          
          <div className='search-box d-flex ms-5'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search...' />
            <span>All Category</span>
          </div>

          <div className='icon d-flex top-nav'>
            <i className='fa fa-user icon-circle'></i>
            <div className=''>
            <i class="fa-solid fa-message icon-circle"></i>
            </div>
            <div className=''>
            <i class="fa-solid fa-heart icon-circle"></i>
            </div>
            <div className=''>
            <i class="fa-solid fa-cart-shopping icon-circle"></i>
            </div>
        
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
