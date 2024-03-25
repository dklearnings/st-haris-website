import React from 'react'

function Belief() {
  return (
    <div>
    {/* Belief Start */}
      <div className="container-xxl py-6">
        <div className="container"> 
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/Trustee/md.jpg" alt="" style={{width: '400px', height: '400px'}} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100"> 
                <h6 className="text-primary text-uppercase mb-2">Our Belief</h6>                
                <p className="mb-4"> 
                   "   We believe that education is incomplete if it is only surrounded with the regular textbooks. An education is a process of teaching learning and applying. Application of the basics of human nature (Fitrat) is the essence of education. <br>
                </br>
                      
                </p>
                     "If a child is a Doctor, an Engineer, Philosopher or Scientist but lacks humanity are nothing but some worthless pieces of paper."
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Belief End */}
    </div>
  )
}

export default Belief