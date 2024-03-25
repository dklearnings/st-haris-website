import React from 'react'

function Houses() {
  return (
    <div>
    {/* Houses Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                <img className="position-absolute w-100 h-100" src="assets/img/about-1.jpg" alt="" style={{objectFit: 'cover'}} />
                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/about-2.jpg" alt="" style={{width: '200px', height: '200px'}} />
              </div> */}
               <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                 <img className="position-absolute w-100 h-100" src="assets/img/Instruction/checklist.jpg" alt="" style={{objectFit: 'cover'}} /> 
                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/Instruction/book-composition-with-open-book.jpg" alt="" style={{width: '200px', height: '200px'}} />
              </div> 
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">Houses</h6>
                <p className="mb-4"> 
                    <b>House List :</b> <br>
                </br>
                </p>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />1. Abu Bakr (Red)
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />2. Umar (Blue) 
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />3. Usman (Green) 
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />4. Ali (Yellow) 
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Houses End */}
    </div>
  )
}

export default Houses