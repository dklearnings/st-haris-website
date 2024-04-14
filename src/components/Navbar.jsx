import React from 'react'
import { useState } from 'react';

function Navbar() {
const [loa, setLOA] = useState([]);
const [topper, setTopper] = useState([]);
  // Alumni List Fetch Function   
  fetch("/assets/data/alumni/loa.json").then(
    function(res){
    return res.json()
  }).then(function(loa){
  // store loa in State File Variable
    setLOA(loa)
  }).catch(
    function(err){
      console.log(err, ' error on fetching loa ')
    }
  )

  // Alumni List Fetch Function   
  fetch("/assets/data/toppers/topper.json").then(
    function(res){
    return res.json()
  }).then(function(topper){
  // store topper in State File Variable
    setTopper(topper)
  }).catch(
    function(err){
      console.log(err, ' error on fetching topper ')
    }
  )


  return (
    <div>  {/* Navbar Start */}
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <div className="navbar-nav mx-auto p-2 p-lg-0">
        <a href="/" className="nav-item nav-link">Home</a> 
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="/trustee" className="dropdown-item">Managing Trustee</a><hr/>
                <a href="/belief" className="dropdown-item">Our Belief</a><hr/>
                <a href="/aimsandideals" className="dropdown-item">Aims and Ideals</a><hr/>
                <a href="/vision" className="dropdown-item">Our Vision</a><hr/>
                <a href="/mission" className="dropdown-item">Our Mission</a><hr/>
                <a href="/goals" className="dropdown-item">Goals</a><hr/>
                <a href="/objectives" className="dropdown-item">Objectives</a><hr/>
                <a href="/motto" className="dropdown-item">Our Motto</a>
                {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
              </div>
            </div>
            <a href="/school" className="nav-item nav-link">School</a>
            <a href="/college" className="nav-item nav-link">College</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructions</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="/instruction" className="dropdown-item">General Instructions</a><hr/>
                <a href="/ruleandregulations" className="dropdown-item">Rule and Regulations</a><hr/>
                <a href="/examination" className="dropdown-item">Examinations</a><hr/>
                <a href="/cocurricularactivities" className="dropdown-item">Co-Curricular Activities</a><hr/>
                <a href="/houses" className="dropdown-item">Houses</a><hr/>
                <a href="/uniforms" className="dropdown-item">Uniforms</a><hr/>
                <a href="/idcards" className="dropdown-item">ID Cards</a><hr/>
                <a href="/busservices" className="dropdown-item">Bus Services</a>            
              </div>
            </div>

            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Online Admission</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="https://stharis-eschool.in/ONLINEADMISSION/INSTRUCTIONS_ONLINEADM.ASPX" target="_blank" className="dropdown-item">Nursery to Sr. K.G. Admission</a><hr/>
                <a href="https://stharis-eschool.in/OnlineAdmission/OnlineEnquiryForm.aspx" target="_blank" className="dropdown-item">College Admission</a><hr/>
                <a href="/enquiry" className="dropdown-item">Enquiry for Other Classes</a>                
              </div>
            </div>
            <div className="nav-item dropdown">
             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Alumni</a>             
             <div className="dropdown-menu bg-light m-0">
              <div>{loa.map(al => (
                <a href={al.url} className="dropdown-item" target="_blank"
                    rel="noreferrer">List of Alumni
                </a> 
                     ))}  
              </div>                
                    <hr/>
                <div>{topper.map(t => (
                <a href={t.url}  className="dropdown-item" target="_blank" 
                    rel="noreferrer">School Toppers</a>
                ))}  </div> 
                <hr/>
                <a href="https://forms.gle/LA1RPMhw6K45wz9i8" target="_blank" className="dropdown-item">Alumni Registration</a><hr/>
              </div>
             
            </div>
            <a href="/contact" className="nav-item nav-link">Contact</a>
             <a href="/downloads" className="nav-item nav-link">Downloads</a>
          
      
    </div>
  </div>
  </div>
</nav>
      {/* Navbar End */}
      </div>
  )
}

export default Navbar