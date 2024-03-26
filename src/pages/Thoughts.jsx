import React from 'react'
import { useState,useEffect } from 'react';
import ViewCount from './ViewCount';



function Thoughts() {
    const [thoughts, setThoughts] = useState("");
    const [msg, setMsg] = useState("");
    //let number = (Math.floor(Math.random() * 5));
    //alert(number);

    /* useEffect(() => {
    fetch('assets/data/thoughts/thoughts_list.json') // Assuming your JSON file is named thoughts.json
      .then(response => response.json())
      .then(data => {
        const randomThoughtIndex = Math.floor(Math.random() * data.thoughts.length);
        setThought(data.thoughts[randomThoughtIndex]);
      })
      .catch(error => console.error('Error fetching thoughts:', error));
  }, []); */

  useEffect(() => {
  // Fetch Function   
  fetch("./assets/data/thoughts/thoughts_list.json").then(
    function(res){
    return res.json()
  }).then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        //alert(randomIndex)
        setThoughts(data[randomIndex]);
      })
    //setThoughts(filtered)
    //setMsg(filtered.Msg)
    //alert({msg})
  .catch(error => console.error('Error fetching thoughts:', error));
  }, []);

  return (
    
  <div className="container-fluid bg-dark text-light p-0">
   <div className="row">
      <div className="col">
     {/* start */}
     <div className="align-items-center" style={{"height":'10%', "width": "30%"}}>
                <small className="fa fa-book text-primary" />
                <small className="fa text-primary me-2">Thought of the day</small>
      </div> 
      {/* end */}
     </div> 
     <div className="col">
     {/* start */}
     <div className="align-items-left me-2 mh-8" style={{"height":'10%', "width": "90%"}}>
                <small className="align-items-center">
                {thoughts && (
        <marquee behavior="scroll" direction="left" scrollamount="8">
          {thoughts.Msg}
        </marquee>)}</small>
     
      </div> 
      </div>
      {/* end */}
      <div className="col">
      <div className="align-right" style={{"height":'10%', "width": "30%"}}>
    {/* start */}
      <div className="me-2 mh-10" >
                <small className="fa fa-eye text-primary me-2" />
        <small><ViewCount /> views</small>              
        </div>
        {/*end*/}
        </div>
     
     </div>     
    </div>   
</div>    
  )
}

export default Thoughts