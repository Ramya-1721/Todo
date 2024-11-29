import React, { useState } from "react";
function NameChangeComp(){
    const [name,sertname]=useState("Ramya");

    const handlename =()=>{
        if(name == "Ramya"){
            sertname("Kiruba")
        }
        if(name =="Kiruba"){
            sertname("Ramya")
        }
    };
    return(
        <>
        <h1>{name}</h1>
        <button onClick={handlename}>change</button>
        </>
    );
}
export default NameChangeComp