import React from 'react'
import { useState } from 'react';

function NewsLetters() {
   const [newsletters, setNewsLetters] = useState([]);
  // NewsLetters List Fetch Function   
  fetch("./assets/data/newsletters/newsletter_list.json").then(
    function(res){
    return res.json()
  }).then(function(newsletters){
  // store newsletters in State File Variable
    setNewsLetters(newsletters)
  }).catch(
    function(err){
      console.log(err, ' error on fetching setNewsLetters ')
    }
  )

  return (
    
    <div className="overflow-visible">  
    {newsletters.map(newsletter => (
            <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <p className="card-text">{newsletter.title}</p>
      <p className="card-text">{newsletter.desc}</p>
        <h6 className="card-title">{newsletter.publishdate}</h6>        
      </div>
    </div>
  </div>
  </div>
  ))}</div>
  )

}


export default NewsLetters