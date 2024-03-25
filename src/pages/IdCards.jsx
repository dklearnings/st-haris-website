import React from 'react'

function IdCards() {
  return (
    <div>
    {/* ID Cards Start */}
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
                <h6 className="text-primary text-uppercase mb-2">ID Cards</h6>
                <p className="mb-4"> 
                    <b>Students Id Cards</b> <br>
                </br>
                </p>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />ID cards are a staple of the school – in fact, they’re usually the first form of photo ID a person has. St. Haris school ID cards in schools have taken on an entirely new level. With the introduction of smart cards and chip-embedded.
                    Id card is compulsory for all students. No student will be allowed in the school premises without the Id card. Parents are requested to note that these I-Cards are for the security of their own ward, and hence, should be retained and maintained by the student for the entire session.
                  </div>
                </div>

                <p className="mb-4"> 
                    <b>Parents Id Cards</b> <br>
                </br>
                </p>

                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-12">
                    <i className="fa text-primary me-2" />For safety & security of the school students, St. Haris has provide parents' id card. With many students becoming victims of crimes, schools has decided to add an extra layer of security and have started issuing identity cards to parents/guardians. While picking up your ward from the school, Parents are requested do not forget to carry the school-issued identity card. Without the ID, the school may very well refuse to let your child go home with you.
                    The schools said a student will not be allowed to leave with a person — even a parent — unless the ID card is presented.
                    In extreme cases — if a parent has come from a far off place and has forgotten to get the ID card issued by us — we take an undertaking from the parent and check other ID. Once we match them with our records, we hand over the child. But, this is an exception.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ID Cards End */}
    </div>
  )
}

export default IdCards