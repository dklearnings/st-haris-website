import React from 'react'

function School() {
  return (
    <div>
    {/* Trustee Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
              <img className="position-absolute w-100 h-100" src="assets/img/School/school.png" alt="" style={{objectFit: 'cover'}} /> 
                
                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/School/logo.png" alt="" style={{width: '200px', height: '200px'}} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">School Introduction</h6>                
                <p className="mb-4">
                St. Haris High School is founded, promoted and developed by Managing Director Mr. Khalid Khan, an educationist, Ex-Indian Air Force Officer. He took premature retirement at the young age of 32 and dedicated himself to educationally uplift the Muslim Community. Before stepping into the field of education, he surveyed methods of education worldwide. He visited several schools and colleges around the world and interacted with experts in education to understand their approach towards modern schooling particularly with Islamic Education, Curriculum etc. Finally, he succeeded in striking a balance between modern and religious education by applying all modern teaching techniques to make students successful in this world as well as in the Aakhirah (Hereafter).
                 <br>
                </br>
                </p>
                <a class="btn btn-primary" href="#" role="button">Visit Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trustee End */}
    </div>
  )
}

export default School