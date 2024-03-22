import React,{useState,useEffect} from 'react'

function ViewCount() {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        var nf = new Intl.NumberFormat();
        const storedCount = localStorage.getItem("pageVisits");
        const initialCount = Number(storedCount)||0;
        nf.format(initialCount);
        setCount(initialCount+1);
        localStorage.setItem("pageVisits",initialCount+1);

    },[]); 
  return (
    <div>{count}</div>
  )
}

export default ViewCount