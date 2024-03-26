import React from 'react'
import { useState } from 'react';


function Links() {
  const [links, setLinks] = useState([]);
  // Links List Fetch Function   
  fetch("./assets/data/links/link_list.json").then(
    function(res){       
    return res.json()
  }).then(function(links){
  // store Links in State File Variable
    setLinks(links)
  }).catch(
    function(err){
      console.log(err, ' error on fetching Links ')
    }
  )

  return (
    
    <div className="overflow-visible">  
    {links.map(link => (
            <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <p className="card-text">{link.title}</p>
      <h6 className="card-title">{link.publishdate}</h6>        
      </div>
    </div>
  </div>
  </div>
  ))}</div>
  )

}

export default Links