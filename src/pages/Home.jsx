import React from 'react'
import Carousal from '../components/Carousal'
import Thoughts from './Thoughts'


function Home() {
  return (
    <div><Carousal />
    <Thoughts />

<div className="container">
  <div className="row">
    <div className="col">
     {/*Notice Board start */}
        <div className="card" style={{width: '18rem'}}>
        <div className="btn btn-primary">
          Notice Board
        </div>
        <div className="list-group">
  <a href="/notices" className="list-group-item list-group-item-action" >
    The current button
  </a>
  <a href="/notices" className="list-group-item list-group-item-action">A second item</a>
  <a href="/notices" className="list-group-item list-group-item-action">A third button item</a>
  <a href="/notices" className="list-group-item list-group-item-action">A fourth button item</a>
  <a href="/notices" className="list-group-item list-group-item-action">A fifth button item</a>
  <a href="/notices" className="btn btn-primary">View All</a>
      </div>
    </div>  
     {/*Notice Board end */}
    </div>   
    <div className="col">
    {/*Director start */}
      <div className="container align-top" style={{width: '18rem'}}>
  <div className="card">
    <img src="assets/img/Trustee/md.jpg " className="top-0 start-0 pe-0 pb-0" alt="..." />
    <div className="card-body" style={{height: '3rem'}}>      
      <p className="card-text fw-bold text-center text-uppercase">Mr. Khalid Khan, MD</p> 
      </div>
  </div>
  {/*Director ends */}
</div>
    </div>
    <div className="col">
    {/*Achievements start */}
       <div className="card" style={{width: '18rem'}}>
        <div className="btn btn-primary">
          Achievements
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
<a href="#" className="btn btn-primary">View All</a>
      </div>
      </div>
      {/*Achievements ends */}
    </div>    
  </div>

  <div className="row">
    <div className="col">
    {/*Important Links start */}
     <div className="card" style={{width: '18rem'}}>
        <div className="btn btn-primary">
          Important Links
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
  <a href="#" className="btn btn-primary">View All</a>
      </div>       
      </div>
     {/*Important Links end */}
    </div>   
    <div className="col">
    {/*Activities start */}
      <div className="card" style={{width: '18rem'}}>
        <div className="btn btn-primary">
          Activities
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
<a href="#" className="btn btn-primary">View All</a>
      </div>
      </div>
      {/*Activities end */}
    </div>
    <div className="col">
    {/*Newsletter start */}
        <div className="card" style={{width: '18rem'}}>
        <div className="btn btn-primary">
          News Letter
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
<a href="/notices" className="btn btn-primary">View All</a>
      </div>
      </div>
       {/*Newsletter end */}
    </div>    
  </div>

 
</div>
  </div>
  )
}

export default Home