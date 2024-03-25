import React from 'react'

function Goals() {
  return (
    <div>
    {/* Goals Start */}
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
                <h6 className="text-primary text-uppercase mb-2">Goals</h6>                
                <p className="mb-4"> 
                   "       Emphasizing a well-balanced body of knowledge, skills, and experiences, the curriculum specifies daily learning goals at all grade levels. In an atmosphere that fosters the development of a lifelong love of learning, students learn how to study and are given the support they need to develop a solid academic foundation. Starting in Nursery , our courses specify a minimum number of "units of information" that students need to learn. This minimum includes the simple concepts as well as Basic Questions which test the material that "everyone should know."
                     Each year, graduates from St. Haris show their potential around the globe through the practical knowledge the received in their foster year." <br>
                </br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Goals End */}
    </div>
  )
}

export default Goals