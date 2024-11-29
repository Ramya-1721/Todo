import React from "react";
import useApicall from "./useApicall";
export default function PageApione(){
    const data = useApicall("https://jsonplaceholder.typicode.com/todos")
    console.log(data,"Rami");
    
    return(
        <div>
            <h1>Pro Api Call</h1>
        </div>
    )
}