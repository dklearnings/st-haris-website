import React from 'react'

function Instruction() {
  return (
    <div>
    {/* Instruction Start */}
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
                <h6 className="text-primary text-uppercase mb-2">General Instructions</h6>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-12">
                    <i className="fa fa-check text-primary me-2" />Students are not permitted to wear any kind of jewellery. This decision has been taken with a view to ensure safety of the students. 
                  </div>
                  <div className="col-sm-12">
                    <i className="fa fa-check text-primary me-2" />Nails must be kept short and clean. 
                  </div>
                  <div className="col-sm-12">
                    <i className="fa fa-check text-primary me-2" />Punctuality is essential at all times and children who contravene this rule without valid reason will be penalised. 
                  </div>
                  <div className="col-sm-12">
                    <i className="fa fa-check text-primary me-2" />The school does not accept responsibility for the loss of pupil’s book, pen, money etc. Each pupil is responsible for his / her own things.
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Instruction End */}
    </div>
  )
}

export default Instruction