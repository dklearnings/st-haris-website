import React from 'react'

function Vision() {
  return (
    <div>
    {/* Vision Start */}
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
                <h6 className="text-primary text-uppercase mb-2">Our Vision</h6>                
                <p className="mb-4"> 
                   "   The Vision of St Haris High School is to enlighten the lives of the young generation with the highest quality education. An education that is in tandem with Islamic values and morals, which can illuminate their mind, body and soul with the richness of Imaan, making them good practicing Muslims beneficial to the society and mankind." <br>
                </br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Belief End */}
    </div>
  )
}

export default Vision