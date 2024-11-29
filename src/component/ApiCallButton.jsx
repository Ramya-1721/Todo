import React, { useEffect, useState } from "react";
export default function ApiCallButton(){
    const [data,setdata]= useState([]);
    const handleapi = async()=>{
        const url = await fetch("https://fakestoreapi.com/products");
        const apidata = await url.json();
        setdata(apidata);
    };

    let a = localStorage.getItem("name")
    useEffect(()=>{
     handleapi();

     localStorage.setItem("name","Ramya")

     return()=>{
        console.log("unmounting clear")
        localStorage.removeItem("name")
     }
    },[])
    return(
        <div>
            {/* <button onClick={handleapi}>Call Api</button> */}
            {data.map((ra,i)=>(
                <div key={i}>
                    <h1>{ra.title}</h1>
                    {a}
                    <img height={100} width={100} src={ra.image}/>
                    <h2>{ra.price}</h2>
                </div>
            ))}
        </div>
    )
}