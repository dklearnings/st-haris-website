import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  
  // Achievements List Fetch Function   
  fetch("./assets/data/achievements/achievement_list.json").then(
    function(res){
    return res.json()
  }).then(function(achievements){
  // store Filter in State File Variable
    setAchievements(achievements)
  }).catch(
    function(err){
      console.log(err, ' error on fetching achievements ')
    }
  )

  return (
    <div className='row'> 
    <div className="col"> 
     <Carousel style={{height:"408px"}}> 
     {achievements.map(achievement => (  
        <Carousel.Item interval={500}>           
            <a href='/achievementdetails'><img className="d-block" style={{height:"410px"}} src={achievement.url}
            alt="Achievement Image" href="/achievementdetails" /></a>
          <Carousel.Caption>             
            <p>{achievement.title}</p> 
          </Carousel.Caption>          
        </Carousel.Item> 
        ))}    
        
      </Carousel> 
    </div> 
    </div> 
  )
}

export default Achievements