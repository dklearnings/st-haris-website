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
       <div className="container-fluid">       
        <br />
        <div className="card-deck">
    {notices.map(notice => (
            <div className="row justify-content-center">
  <div className="col col-md-8 h-auto">
    <div className="card shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
      <h5 className="card-title text-center">{notice.title}<hr /></h5>
                    <p className="card-text  text-left">{notice.desc}</p>
                <div className="card-footer">
                    <small className="text-muted">Date: {notice.publishdate}</small>
                </div>      
                
      </div>
    </div>
    
  </div>
  </div>
  
  ))}</div>
  </div>
  )

}

export default Notices