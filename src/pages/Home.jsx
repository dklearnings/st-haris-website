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
  <button type="button" className="list-group-item list-group-item-action" >
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
   <a href="#" class="btn btn-primary">View All</a>
      </div>
    </div>  
     {/*Notice Board end */}
    </div>   
    <div className="col">
    {/*Director start */}
      <div class="container mt-5" style={{width: '18rem'}}>
  <div class="card">
    <img src="image.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text">Small text here</p>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
    </div>
  </div>
  {/*Director ends */}
</div>
    </div>
    <div className="col">
    {/*Achievements start */}
       <div className="card" style={{width: '18rem'}}>
        <div className="card-header">
          Achievements
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
<a href="#" class="btn btn-primary">View All</a>
      </div>
      </div>
      {/*Achievements ends */}
    </div>    
  </div>

  <div className="row">
    <div className="col">
    {/*Important Links start */}
     <div className="card" style={{width: '18rem'}}>
        <div className="card-header">
          Important Links
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
  <a href="#" class="btn btn-primary">View All</a>
      </div>       
      </div>
     {/*Important Links end */}
    </div>   
    <div className="col">
    {/*Activities start */}
      <div className="card" style={{width: '18rem'}}>
        <div className="card-header">
          Activities
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
<a href="#" class="btn btn-primary">View All</a>
      </div>
      </div>
      {/*Activities end */}
    </div>
    <div className="col">
    {/*Newsletter start */}
        <div className="card" style={{width: '18rem'}}>
        <div className="card-header">
          News Letter
        </div>
        <div className="list-group">
  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" className="list-group-item list-group-item-action">A second item</button>
  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" className="list-group-item list-group-item-action">A fifth button item</button>
<a href="#" class="btn btn-primary">View All</a>
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