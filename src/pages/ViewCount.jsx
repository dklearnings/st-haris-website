import React,{useState,useEffect} from 'react'

function ViewCount() {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        //var nf = new Intl.NumberFormat();
        const storedCount = localStorage.getItem("pageVisits");
        const initialCount = Number(storedCount)||0;
        //const initialCount = 0;
        //nf.format(initialCount);
        setCount(initialCount+0.5);
        localStorage.setItem("pageVisits",initialCount+0.5);

    },[]); 
  return (
    <div className="d-flex justify-content-center align-items-center">
    <small className="fa fa-eye text-primary me-2" />&nbsp;
    {count} views</div>
  )
}

export default ViewCount