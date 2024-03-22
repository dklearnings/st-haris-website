import React from 'react'

function Enquiry() {
  return (
    <div>
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
  )
}

export default Enquiry