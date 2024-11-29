import React, { useEffect, useState } from "react";
export default function LifeCycleComp(){
    const [count,setcount]=useState(0)
    useEffect(()=>{
       console.log("Kiruba");
       return()=>{
        
       }
    },[count])
    const handleadd =()=>{
        setcount(count + 1)
    }
    return(
        <>
        <h1>Ramya - {count}</h1>
        <button onClick={handleadd}>add</button>
        </>
    )
}
