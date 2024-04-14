import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

function Activities() {
  const [activities, setActivities] = useState([]);
  
  // Achievements List Fetch Function   
  fetch("./assets/data/activities/activities_list.json").then(
    function(res){
    return res.json()
  }).then(function(activities){
  // store Filter in State File Variable
    setActivities(activities)
  }).catch(
    function(err){
      console.log(err, ' error on fetching activities ')
    }
  )

  return (
    <div className='row'> 
    <div className="col"> 
     <Carousel style={{height:"465px"}}> 
     {activities.map(activity => (  
        <Carousel.Item interval={500}>           
            <a href='/achievementdetails'><img className="d-block" style={{height:"465px"}} src={activity.url}
            alt="Activities Image" href="/achievementdetails" /></a>
          <Carousel.Caption>             
            <p>{activity.title}</p> 
          </Carousel.Caption>          
        </Carousel.Item> 
        ))}    
        
      </Carousel> 
    </div> 
    </div> 
  )
}

export default Activities