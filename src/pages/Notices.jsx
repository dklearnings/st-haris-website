import React from 'react'
import { useState } from 'react';


function Notices() {
  const [notices, setNotices] = useState([]);
  // Notice List Fetch Function   
  fetch("./assets/data/notices/notice_list.json").then(
    function(res){
    return res.json()
  }).then(function(notices){
  // store notices in State File Variable
    setNotices(notices)
  }).catch(
    function(err){
      console.log(err, ' error on fetching notices ')
    }
  )

  return (
    
    <div className="overflow-visible">  
    {notices.map(notice => (
            <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <p className="card-text">{notice.title}</p>
      <p className="card-text">{notice.desc}</p>
        <h6 className="card-title">{notice.publishdate}</h6>        
      </div>
    </div>
  </div>
  </div>
  ))}</div>
  )

}

export default Notices