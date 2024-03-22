import React from 'react'

function Header() {
  return (
   
        <div className="container-fluid bg-dark text-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-4 text-start">
              <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-map-marker-alt text-primary me-2" />
                <small>Mira Road (E), Thane-401107, India</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center me-2">
                <small className="far fa-clock text-primary me-2" />
                <small>Mon - Fri : 09.00 AM - 04.00 PM</small>
              </div>  
              <div className="h-100 d-inline-flex align-items-center me-2">
                <small className="far fa-envelope text-primary me-2" />
                <small>info@st-haris.org</small>
              </div>  
              {/* <div className="h-100 d-inline-flex align-items-center">
                <small className="fa fa-map text-primary me-2" />
                <small>info@example.com</small>
              </div>    */}         
            </div>
            <div className="col-lg-5 px-5 text-end">              
              <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-phone-alt text-primary me-2" />
                <small>+022-28105376 / 8879016151</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center mx-n2">
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-telegram" /></a>
                <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-youtube" /></a>
                <a className="btn btn-square btn-link rounded-0" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
           <div className="container-fluid bg-white text-black p-0">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-9 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-marker-alt text-primary me-2 solid" />
                <h2>St. Haris High School & Hajra Girls Jr. College</h2>
              </div>
              </div>
              </div>
              </div>
        </div>
        
  )
}

export default Header