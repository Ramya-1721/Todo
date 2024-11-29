import axios from "axios"
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function TodoList (){
    const[data,setdata]=useState([])
    const[inputdata,setinputdata]=useState("")

    const handlefetch =async()=>{
        let res = await  axios.get("http://localhost:3000/todoList")
        // console.log(res.data);
        setdata(res.data) 
    }
    useEffect (()=> {
        handlefetch()
    },[]
    )
    const handleinput=(e)=>{
        setinputdata(e.target.value)
    }
    const handlesend = async()=>{
       let body = {
        task : inputdata
       }
       let res = await axios.post("http://localhost:3000/todoList",body)
       alert("success")
       console.log(body)
       handlefetch()
    }
    const handledelete = async(id)=>{
        
        console.log(id);
        let ress = await axios.delete(`http://localhost:3000/todoList/${id}`)
        alert("deleted success")
        handlefetch()
    }
    const handleedit= async(i)=>{
        let newdata = prompt("Enter your update task",data[i].task)
        // console.log(data[i].task);
       let body={
         id: data[i].id,
        //  task :data[i].task
        task: newdata,
        }
        let res=await axios.put(`http://localhost:3000/todoList/${data[i].id}`,body)
        handlefetch()
    }
    return(
        <div className="m-2">

            <h1>Todo List</h1>
            <input onChange={handleinput} placeholder="Enter your Todo"/>
            <button onClick={handlesend} className="btn btn-primary ms-3 ">Add</button>
            {data.map((da,i)=>(
                <div className="d-flex mt-3" key={i}>
                <h2>{da.task}</h2>  
                {/* {i=i+1} */}
                <span onClick={()=>handleedit(i)}className="ms-3"><FaEdit /></span> 
                <span onClick={()=>handledelete(da.id)} className="ms-3"><MdDelete /></span>
                
                </div>
           ) )}
        </div>
    )
}