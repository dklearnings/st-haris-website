import React from 'react'


function Header() {
  return (
   
        <div className="container-fluid bg-dark text-light p-0" style={{"font-size":"0.8em","fontWeight":"bold"}}>
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
                <small>stharishighschool@gmail.com</small>
              </div>                      
            </div>
            <div className="col-lg-5 px-5 text-end">              
              <div className="h-100 d-inline-flex align-items-center me-4">
                <small className="fa fa-phone-alt text-primary me-2" />
                <small>+022-28105376 / 8879016151</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center me-2 mx-n2">
                <a target="_blank" className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.facebook.com/profile.php?id=100085786775850"><i className="fab fa-facebook-f" /></a>
                <a target="_blank" className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-telegram" /></a>
                <a target="_blank" className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.youtube.com/user/stharishighschool"><i className="fab fa-youtube" /></a>
                <a target="_blank" className="btn btn-square btn-link rounded-0" href="https://www.instagram.com/stharishighschool/"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-white text-black p-0">
          <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-2 px-10">         
      <img src="assets/img/School/logo.png" className="d-block w-60" style={{width:"75px",height:"75px"}} alt="..." />
    </div>
    
    <div className="col-lg-10 px-0">            
              <div className="h-100 d-inline-flex me-4">
                <small className="fa fa-marker-alt text-primary me-20 solid">
                <h1>St. Haris High School & Hajra Girls Jr. College</h1></small>
              </div>
              
              
              </div>
              </div>
              </div>
        </div>
        
  )
}

export default Header