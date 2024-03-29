import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carousal() {
  return (
    <div className="md-30"> 
    {/* Carousel Start */}
      <Carousel data-bs-theme="light">
      <Carousel.Item interval={1500}>
        <img
          className="d-block"
          src="assets/img/Carousel/1.jpg"
          alt="First slide"
        />        
      </Carousel.Item>
      </Carousel>
    {/* Carousel End */}
   </div>
  )
}

export default Carousal