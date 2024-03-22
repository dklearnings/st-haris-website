import React from 'react'

function Contact() {
  return (
    <div>{/* Contact Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '450px'}}>
              <div className="position-relative h-100">
                {/*<iframe className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: '450px', border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
              */}
              <iframe  className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9497274243886!2d72.8568604!3d19.284552299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b04bf78d57eb%3A0x1ec36cf3505a28ea!2sST.%20HARIS%20HIGH%20SCHOOL!5e0!3m2!1sen!2sin!4v1596707054275!5m2!1sen!2sin"  frameBorder={0} style={{minHeight: '450px', border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />

              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h6 className="text-primary text-uppercase mb-2">Contact Us</h6>
              <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
              <h6 className="text-primary mb-4"><i className="fa fa-car text-white me-2" />St.Haris High School & Hajra Girls Jr. College</h6>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Behind Al-Shams Mosque, near Ring Banquet Hall, Naya Nagar, Mira Road(E), Thane-401107, India</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+022-28105376 / 8879016151</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
              
              <form>
                <div className="row g-3">
                <h6 className="text-primary text-uppercase mb-2">Enquire To Us</h6>
                  <div className="col-md-6">
                  <div className="form-floating">
                     <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0 bg-light" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0 bg-light" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}</div>
  )
}

export default Contact