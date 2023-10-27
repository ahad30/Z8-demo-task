import React from 'react'
import "./Home.css";

const SideText = () => {
  return (
    <>
    <div className='light-blue  mt-3'>
      <div className="d-flex ">
        <img src="images/Avatar.png" alt="" className='me-2' />
        <div>
            <h4>Hi, user</h4>
            <span> Lets get started</span>
        </div>
        </div>
        <div><button type="button" class="btn btn-info  mt-2 ms-2 px-3 text-white">Join now</button></div>
        <div><button type="button" class="btn btn-light  mt-2 ms-2 px-4">log in</button></div>
      </div>

    <div className="orange mt-2">
      <h4 className='text-white'>
      Get US $10 off with a new supplier
      </h4>
    </div>

    <div className="blue mt-2">
      <h4 className='text-white'>
      Send quotes with supplier preferences
      </h4>
    </div>
</>
  )
}

export default SideText;
