import React from 'react'


function Header() {
  return (
      <div>
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
                <a target="_blank" className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://t.me/Stharis"><i className="fab fa-telegram" /></a>
                <a target="_blank" className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.youtube.com/user/stharishighschool"><i className="fab fa-youtube" /></a>
                <a target="_blank" className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.instagram.com/stharishighschool/"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>   
      

        <div className="container-fluid bg-white text-light p-0">
          <div className="row gx-0  d-lg-flex shadow">
           <div className="col-lg-2 mx-auto">
            <a href="/" className="navbar-brand d-flex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="assets/img/School/logo.png" className="d-block w-50 center" alt="logo" />
             </a>
            </div> 
             <div className="col-lg-10">
            <p className="fa fa-xl text-primary me-20 text-uppercase font-weight-bold" style={{fontSize:"2.0em"}}>
                <h4><b>St. Haris High School & Hajra Girls Jr. College</b></h4></p><br/>
                <p className="fa fa-marker-alt text-primary me-20" style={{fontSize:"1.50em"}}>
                <p style={{fontSize:"1.0em","color":"red"}}>Success in this world and Akhirah</p></p>
            </div> 
          </div>
          </div>     
          <div className="row">         
              <div className="col shadow-lg">&nbsp;
              </div>              
              </div>
        </div>       
                 
  )
}

export default Header