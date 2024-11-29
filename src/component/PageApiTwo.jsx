import React, { useEffect } from "react";
import useApicall from "./useApicall";
import { useLayoutEffect } from "react";
export default function PageApiTwo(){
    const data =useApicall("https://fakestoreapi.com/products")
    // console.log(data,"Rami2");
    useEffect(()=>{
        console.log("useEffect.......!");
        
    },[])
    useLayoutEffect(()=>{
      console.log("useLayoutEffect......@");
      alert("device not response")
    },[])
    return(
        <div>
         <h1>PageApiTwo</h1>
         {/* {data.map((da)=>(
            <div>
              <h2>{da.title}</h2>  
            </div>
         ))} */}
        </div>
    )
}