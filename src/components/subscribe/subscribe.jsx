import React from 'react';
import './subscribe.css';

const subscribe = () => {
  return (
    <>
    <section class="subscribe container mb-4">
    <div id="subscribe-content">
        <img src="images/undefined64.png" width="100%" height="400px" />
        <div class="container">
             <div class="from">
                <h3><span>Subscribe</span> To our newsletter</h3>
                <p>Subscribe to the Expert mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                 <form class="bangla">
                     <div class="row d-flex justify-content-center my-3">
                         <div class="col-12 col-md-6 mt-5">
                             <input type="text" class="form-control" placeholder='Email' />
                         </div>

                          <div class="col-12 col-md-2 mt-5">
                          <button type="button" class="btn btn-success mt-1">Subscribe</button>
                         </div>
                     </div>
                </form>
             </div>
        </div>
    </div>   
</section>
</>
  )
}

export default subscribe
