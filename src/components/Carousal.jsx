import React from 'react'

function Carousal() {
  return (
    <div>
    {/* Carousel Start */}
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="assets/img/Carousel/1.jpg" className="d-block w-60" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="assets/img/Carousel/2.jpg" className="d-block w-60" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="assets/img/Carousel/3.jpg" className="d-block w-60" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="assets/img/Carousel/4.jpg" className="d-block w-60" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    {/*} Carousel End */}
    </div>
  )
}

export default Carousal