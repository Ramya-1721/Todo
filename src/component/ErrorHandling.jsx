import react, { useEffect, useRef, useState } from "react";
export function ErrorHandling(){
    const[count,setcount]=useState(0)
    const inputref=useRef(null)
    // const handleclick=()=>{
    //     try{
    //       setcount(count +1)
    //     }catch(err){
    //         console.log(err,"Rachu");
            
    //     }finally{
    //         console.log("Rami");
            
    //     }

    // }
    

    
    useEffect(()=>{
        inputref.current.focus()
    },[])
    return (
        <div> 
            <h1>Ramya</h1>
             <input ref={inputref} placeholder="Enter you are name" />
            {/* <button onClick={handleclick}>handleclick</button> */}
        </div>

    )
}