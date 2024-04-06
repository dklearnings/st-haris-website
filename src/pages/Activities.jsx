import React from 'react'
import Carousel from 'react-bootstrap/Carousel'; 

function Activities() {
  return (
    <div className='row'> 
    <div className="col"> 
     <Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-151"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          /> 
          <Carousel.Caption>             
            <p>Sample Text for Image One</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-151"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          /> 
          <Carousel.Caption>            
            <p>Sample Text for Image Two</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
    </div> 
  )
}

export default Activities