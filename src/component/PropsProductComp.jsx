import React from "react";
export default function PropsProductComp({a}){
    return(
        <div>
            <h1>{a.price} </h1>
            <h2>{a.title}</h2>
        </div>
    )
}