import React from 'react'

function Motto() {
  return (
    <div>
    {/* Motto Start */}
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
                <h6 className="text-primary text-uppercase mb-2">Our Motto</h6>
                <p className="mb-4"> 
                   "  Our School is four walls with tomorrow inside... where children think, dream, believe and achieve. " <br>
                </br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Motto End */}
    </div>
  )
}

export default Motto