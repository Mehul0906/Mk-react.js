import React from 'react'
import manimg from "../assets/menimg.webp"
import { Container } from 'react-bootstrap'
function Templte() {
  return (
   <div className='container-fluid'>
     <div className="row">
     <div className="col-12">
        <div className='row mains ps-1 pe-1 pt-5 pb-5 pt-md-0 pb-md-0 ps-md-4 pe-md-4'>
        <div className='col-12 col-sm-12 col-md-7 col-lg-6'>
        {/* Gm sir name first of all create a componets folder and in the Templte.jsx  */}
      <h1>Hi,I'm Henry Deo</h1>
      <p>A freelance web developer from London I convert custom <br /> web designs to Bootstrap templete</p>
      <p>I make YouTube video and write Blog</p>
      <button type="button" className="btn btn-primary" style={{borderRadius:"20px"}}>I'M AVAILABLE</button>
      <div className="my-3 col-4 col-sm-3 col-md-3">
            <ul className="list-unstyled d-flex justify-content-between">
              <li><a href="#" className="text-dark"><i class="bi bi-facebook"></i></a></li>
              <li><a href="#" className="text-dark"><i class="bi bi-twitter"></i></a></li>
              {/* // second step h1 tag and write a name third p tag and write para and  */}
              <li><a href="#" className="text-dark"><i class="bi bi-instagram"></i></a></li>
              <li><a href="#" className="text-dark"><i class="bi bi-youtube"></i></a></li>
            </ul>
          </div>
      </div>
      <div className='d-none d-sm-none d-md-block col-md-5 col-lg-6'>
        <img src={manimg} className='img-fluid'></img>
        {/* // fourth bootstrap icon and last the cretae one btn and one image    */}
      </div>
        </div>
     </div>
    </div>
   </div>
  )
}

export default Templte
// and second step create a Container and in one row and 12 col and 

