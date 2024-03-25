import React from 'react'

function Mission() {
  return (
    <div>
    {/* Mission Start */}
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
                <h6 className="text-primary text-uppercase mb-2">Our Mission</h6>                
                <p className="mb-4"> 
                   "   At St Haris High school, we aim to provide Muslim children with quality education comprising of regular academic as well as Islamic subjects. We take all the measures necessary to infuse our students with inquisitive spirit to gain knowledge. Our school also makes efforts to guide the children into applying in their daily lives the knowledge gained in classrooms. Our belief is that a person can gain success in ‘Duniya’ and ‘Aakhirah’ only by being a good practicing Muslim in word and deed." <br>
                </br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission End */}
    </div>
  )
}

export default Mission