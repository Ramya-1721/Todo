import React from "react";
 export default function PropsEg({a,b,dob,data}){
    console.log(data)
    return(
        <div>
            <h1>My Name is :{a} age:{b}</h1>
            <h2>DOB:{dob}</h2>
        </div>
    )
 }