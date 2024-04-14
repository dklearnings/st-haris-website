import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

function AchievementDetails() {
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
     {achievements.map(achievement => (                 
             <img className="d-block" style={{height:"410px"}} src={achievement.url}
            alt="Achievement Image" />        
        ))}    
           
    </div> 
    </div> 
  )
}

export default AchievementDetails