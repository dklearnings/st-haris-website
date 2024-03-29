import React from 'react'
import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousal() {
  const [carousalist, setCarousallist] = useState([]);

  useEffect(() => {
  // Fetch Function   
  fetch("assets/data/carousels/carousel_list.json").then(
    function(res){
      
    return res.json()
  }).then(data => {
        //alert(data[1].url)
        setCarousallist(data);
      })
    //setThoughts(filtered)
    //setMsg(filtered.Msg)
    //alert({msg})
  .catch(error => console.error('Error fetching carousels:', error));
  }, []);

  return (
    <div className="md-30"> 
    {/* Carousel Start */}
      <Carousel data-bs-theme="light" smooth>
      {carousalist.map(carousal => (
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          src={carousal.url}
          alt={carousal.name}
        />        
      </Carousel.Item>
))}
      </Carousel>
    {/* Carousel End */}
   </div>
  )
}

export default Carousal