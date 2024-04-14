import React from 'react'
import { useState,useEffect } from 'react';
import Carousal from '../components/Carousal'
import Thoughts from './Thoughts'
import Activities from './Activities';
import Achievements from './Achievements';
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
//import nf from Intl.NumberFormat;


function Home() {
  const [notices, setNotices] = useState([]);
  const [links, setLinks] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [count, setCount]=useState(0);
  const [activities, setActivities] = useState([]);
  

   useEffect(()=>{
        //var nf = new Intl.NumberFormat();
        const storedCount = localStorage.getItem("pageVisits");
        const initialCount = Number(storedCount)||0;
        //const initialCount = 0;
        
        //nf.format(Math.floor(initialCount));

        //Math.floor
        setCount(initialCount+0.5);
        localStorage.setItem("pageVisits",initialCount+0.5);

    },[]); 
  // Notice List Fetch Function   
  fetch("./assets/data/notices/notice_list.json").then(
    function(res){
    return res.json()
  }).then(function(notices){
  // store Filter in State File Variable
    setNotices(notices)
  }).catch(
    function(err){
      console.log(err, ' error on fetching notices ')
    }
  )

  // NewsLetters List Fetch Function   
  fetch("./assets/data/newsletters/newsletter_list.json").then(
    function(res){
    return res.json()
  }).then(function(newsletters){
  // store newsletters in State File Variable
    setNewsletters(newsletters)
  }).catch(
    function(err){
      console.log(err, ' error on fetching newsletters ')
    }
  )

  // Activities List Fetch Function   
  fetch("./assets/data/newsletters/newsletter_list.json").then(
    function(res){
    return res.json()
  }).then(function(activities){
  // store activities in State File Variable
    setActivities(activities)
  }).catch(
    function(err){
      console.log(err, ' error on fetching activities ')
    }
  )

  //links List Fetch Function   
  fetch("./assets/data/links/link_list.json").then(
    function(res){
    return res.json()
  }).then(function(links){
  // store Filter in State File Variable
    setLinks(links)
  }).catch(
    function(err){
      console.log(err, ' error on fetching links ')
    }
  )

  return (
    <div><Carousal />
    <Thoughts />      
<div className="container-fluid">
  <div className="row" style={{"height":"452px"}}>
    <div className="col col-sm-4 col-lg-4 col-md-4" style={{"height":"452px"}}>
     {/*Notice Board start */}
        <div className="card" style={{"height":"452px"}}>
        <div className="btn btn-primary">
          Notice Board
        </div>
        <Marquee
          fade={true}
          direction={"up"}
          reverse={false}
          pauseOnHover={true}  
          className=""
        >
        <div className="list-group">        
          {notices.map(notice => (                  
          <a href="/notices" className="list-group-item list-group-item-action"> 
            <small className="fa fa-bell text-primary" />&nbsp;
            {notice.title}
          </a>))}
        </div> 
        </Marquee>
        <a href="/notices" className="btn btn-primary">View All</a>  
      </div>     
     {/*Notice Board end */}
    </div>   
    <div className="col col-sm-4 col-lg-4 col-md-4">
    {/*Director start */}
      <div className="card"> 
        <img src="assets/img/Trustee/md.jpg" className="top-0 start=0 pe-0 pb-0" alt="Photo of MD" />
        <div className="card-body">      
          <p className="card-text fw-bold text-center text-uppercase">Mr. Khalid Khan</p>
          <p className="card-text text-center">Managing Director</p> 
          </div>
      </div>
    {/*Director ends */}
    </div>

    <div className="col col-sm-4 col-lg-4 col-md-4" style={{"height":"452px"}}>
      {/*Achievements start */}
        <div className="card">
        <div className="btn btn-primary">
          Achievements
        </div>
          <Achievements />
        </div>
      {/*Achievements ends */}
    </div>    
  </div>


  <div className="row" style={{"height":"505px"}}>
    <div className="col col-sm-4 col-lg-4 col-md-4" style={{"height":"505px"}}>
     {/*Important Links start */}
           <div className="card" style={{"height":"505px"}}>
        <div className="btn btn-primary">
          Important Links
        </div>
        
         <Marquee
          fade={false}
          direction={"up"}
          reverse={false}
          pauseOnHover={true}>
          <div className="list-group">
            {links.map(link => (        
             <a href="/links" className="list-group-item list-group-item-action"> 
             <small className="fa fa-link text-primary" /> &nbsp;
             {link.title}
             </a>))}
          </div>
          </Marquee>             
          <a href="/links" className="btn btn-primary">View All</a>  
      </div>   
    {/*Important Links end */}
    </div> 
 
    

    <div className="col col-sm-4 col-lg-4 col-md-4" style={{"height":"505px"}}>
    {/*Activities start */}
      <div className="card">
        <div className="btn btn-primary">
          Activities
        </div>
        <Activities />
      </div>
      {/*Activities end */}
    </div>
    <div className="col col-sm-4 col-lg-4 col-md-4" style={{"height":"505px"}}>
    {/*Newsletter start */}
        <div className="card" style={{"height":"500px"}}>
        <div className="btn btn-primary">
          News Letter
        </div>
        
         <Marquee
  fade={false}
  direction={"up"}
  reverse={false}
  pauseOnHover={true}  
>
<div className="list-group">
        {newsletters.map(newsletter => (        
          
          <a href={newsletter.url_detail} target="_blank" className="list-group-item list-group-item-action"> 
          <img src={newsletter.url_home} className="col col-sm-4 col-lg-4 col-md-4"/><small>{newsletter.title}</small>
           </a>
         ))}
         </div> 
         </Marquee>
             
         {/* <a href="/newsletters" className="btn btn-primary">View All</a> */}
      </div>
      </div>
       {/*Newsletter end */}
    </div>   
   
  

 
</div>
<div className="container-fluid copyright text-light p-0">
   <div className="row">
      <div className="col">
     {/* View Count start */}
     <div className="d-flex justify-content-center align-items-center">
    <small className="fa fa-eye text-primary me-2" />&nbsp;
    {count} views</div>
     {/* View Count  end */}
     
     </div>
     </div>
     </div>


  </div>
  


  
  )
}

export default Home