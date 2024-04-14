import React from 'react'
import { useState } from 'react';

function Downloads() {
  const [files, setFiles] = useState([]);
  const [filterLists,setFilterLists]= useState([]);
  
  // Filter List Fetch Function   
  fetch("./assets/data/downloads/metadata/download_filter.json").then(
    function(res){
    return res.json()
  }).then(function(filterLists){
  // store Filter in State File Variable
    setFilterLists(filterLists)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  

  const handleFilter = (yr) =>{
    setFiles([]);
    setFilterLists([]);
    //alert('selected '+ yr);
    // Fetch Function   
  fetch("./assets/data/downloads/metadata/download_files.json").then(
    function(res){
    return res.json()
  }).then(function(files){
    const filtered = files.filter(file => file.year.includes(yr));
  //setFilteredUsers(filtered);

  // store Files in State File Variable
    setFiles(filtered)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  }
    const handleDownload = (fileUrl) => {      
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileUrl.split('/').pop());
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading file: ', error));
  };
  
  return (
    
            
    

<div>
{filterLists.map(filterList => (
  <div className="btn-group">
    <div className="col-sm-12" role="toolbar" aria-label="Select the session">
  <div className="btn-group" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary mb-2" onClick={()=>handleFilter(filterList.year)}>{filterList.year}</button>    
  </div>
  </div>
  </div>
   ))}
<br />
  <div className="container">

<div className="overflow-visible">  
    {files.map(file => (
  <div className="row g-4">
  <div className="col col-md-2 mb-2">
    <div className="card text-center border-dark shadow">
    <p className="card-title text-center">{file.title}</p><hr />
      <div className="card-body">        
        <small className="card-subtitle">Date: {file.publishdate}</small><br />
        <button className="btn btn-primary text-center" onClick={()=>handleDownload(file.url)}>Download</button>
      </div>
    </div>
  </div>
  </div>
          ))}
 </div>
</div>
    </div>
  )
}

export default Downloads