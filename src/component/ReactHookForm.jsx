import React from "react";
import { useForm } from "react-hook-form";
export default function ReactHookFrom(){
    const{register,handleSubmit,formState:{errors}}=useForm()
    
    const handleform=(data)=>(
       console.log(data)
    )
    console.log(errors)
    return(
        <div>
            <h1>React Hook Form</h1>
             <lable>Name:</lable>
            <input{...register("firstname",{required:"first name is requied"})} placeholder="Enter Your Name" /> <br/>
            <p>{errors?.firstname?.message}</p>
            <lable> Email:</lable>
            <input{...register("Email")} placeholder="Enter Your Email Id" /> <br/><br/>
            <lable> Age:</lable>
            <input{...register("Age")} placeholder="Enter Your Age" /> <br/><br/>
            <button onClick={handleSubmit(handleform)}>Submit</button>
        </div>
    )

}