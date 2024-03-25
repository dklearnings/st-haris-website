import React from 'react'

function CoCurricularActivities() {
  return (
    <div>
    {/* CoCurricularActivities Start */}
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
                <h6 className="text-primary text-uppercase mb-2">Co-Curricular Activities</h6>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />1. Robotics Class. 
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />2. Computer Hardware & Networking Classes
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />3. Yoga
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />4. Painting & Coloring
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />5. English speech & Drama
                  </div>
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />6. Brain Maths
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CoCurricularActivities End */}
    </div>
  )
}

export default CoCurricularActivities