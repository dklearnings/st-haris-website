import React from 'react'

function BusServices() {
  return (
    <div>
    {/* BusServices Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                <img className="position-absolute w-100 h-100" src="assets/img/about-1.jpg" alt="" style={{objectFit: 'cover'}} />
                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/about-2.jpg" alt="" style={{width: '200px', height: '200px'}} />
              </div> */}
               <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                 <img className="position-absolute w-100 h-100" src="assets/img/BusServices/busservices.jpg" alt="" style={{objectFit: 'cover'}} /> 
                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/BusServices/busservices-small.jpg" alt="" style={{width: '200px', height: '200px'}} />
              </div> 
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">Bus Services</h6>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />Bus Service is available for students. By the service provider.
                    In case a student likes to take a bus service they can contact on the given number.
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />A To Z School Bus Services (Mohd Islam) : 9222 92 93 85
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />Bus Driver : 8422 084 155
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />Bus Conductor : 99 677 311 27
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BusServices End */}
    </div>
  )
}

export default BusServices