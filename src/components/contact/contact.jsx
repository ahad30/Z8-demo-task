import React from "react";
import './contact.css';

const Contact = () => {

  return (
    <>
        <div className="container">
        <div className="row">
        <div className='col-md-12'>
          <div className='contact-form' >
            <div className="row">
            <div className="col-12 col-md-5 mt-3">
          <h3 className="">
              <span >An easy way to send requests to all suppliers </span>
           </h3>
        
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
            </div>
          <div class="col-12 col-md-7 mt-3">
        <div class="bg-light p-4 rounded">
          <h2 class="mb-4 text-dark">Send quote to suppliers</h2>
          <form>
            <div class="form-group mb-4">
              <input type="text" class="form-control" id="name" placeholder="What item you need?" />
            </div>
            <div class="form-group">
              <textarea id="message" cols="30" rows="3" class="form-control" placeholder="Type more details"></textarea>
            </div>
            <div>
              <h5 className="mt-2 text-dark">Quantity </h5>
            </div>
            <div>
            <select>
            <option value="">Pc</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div class="form-group  mb-0">
              <input type="submit" value="Send Query" class="btn btn-primary  rounded-pill px-3 mt-3"/>
            </div>
          </form>
        </div>
      </div>


            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Contact;
