import React, { useState } from "react";
export default function FormReact(){

    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[age,setage]=useState("")

    const handlename=(event)=>{ 
        setname(event.target.value)
    }
    const handleage=(event)=>{ 
        setage(event.target.value)
    }
    const handleemail=(event)=>{ 
        setemail(event.target.value)
    }


    return(
        <div>
            <lable>Name:</lable>
            <input onChange={handlename} placeholder="Enter Your Name" /> <br/><br/>
            <lable> Email:</lable>
            <input onChange={handleemail} placeholder="Enter Your Email Id" /> <br/><br/>
            <lable> Age:</lable>
            <input onChange={handleage}placeholder="Enter Your Age" /> <br/><br/>
            <button>Submit</button>
            <>
            <h1>Name-{name}</h1>
            <h1>Age-{age}</h1>
            <h1>Email Id-{email}</h1>
            </>
         {/* [React-hook-form] */}
        </div>
    )
}

