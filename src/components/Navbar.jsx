import React from 'react'

function Navbar() {
  return (
    <div>  {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
          <h2 className="m-0"><i className="fa fa-school text-primary me-2" href="" />Home</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {/*<a href="index.html" className="nav-item nav-link active">Home</a> */}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="/st-haris-website/trustee" className="dropdown-item">Managing Trustee</a>
                <a href="/belief" className="dropdown-item">Our Belief</a>
                <a href="/aimsandideals" className="dropdown-item">Aims and Ideals</a>
                <a href="/vision" className="dropdown-item">Our Vision</a>
                <a href="/mission" className="dropdown-item">Our Mission</a>
                <a href="/goals" className="dropdown-item">Goals</a>
                <a href="/objectives" className="dropdown-item">Objectives</a>
                <a href="/motto" className="dropdown-item">Our Motto</a>
                {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
              </div>
            </div>
            <a href="/school" className="nav-item nav-link">School</a>
            {/* <a href="/college" className="nav-item nav-link">College</a> */}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructions</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="/instruction" className="dropdown-item">General Instructions</a>
                <a href="/ruleandregulations" className="dropdown-item">Rule and Regulations</a>
                <a href="/examination" className="dropdown-item">Examinations</a>
                <a href="/cocurricularactivities" className="dropdown-item">Co-Curricular Activities</a>
                <a href="/houses" className="dropdown-item">Houses</a>
                <a href="/uniforms" className="dropdown-item">Uniforms</a>
                <a href="/idcards" className="dropdown-item">ID Cards</a>
                <a href="/busservices" className="dropdown-item">Bus Services</a>                
              </div>
            </div>

            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Online Admission</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="https://stharis-eschool.in/ONLINEADMISSION/INSTRUCTIONS_ONLINEADM.ASPX" target="_blank" className="dropdown-item">Nursery to Sr. K.G. Admission</a>
                <a href="https://stharis-eschool.in/OnlineAdmission/OnlineEnquiryForm.aspx" target="_blank" className="dropdown-item">College Admission</a>
                <a href="/enquiry" className="dropdown-item">Enquiry for Other Classes</a>                
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">Contact</a>
             <a href="/downloads" className="nav-item nav-link">Downloads</a>
          </div>
         {/* <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get Started<i className="fa fa-arrow-right ms-3" /></a> */}
        </div>
      </nav>
      {/* Navbar End */}
      </div>
  )
}

export default Navbar