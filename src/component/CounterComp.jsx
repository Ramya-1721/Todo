import React, { useState } from "react";


function CounterComp(){
    const [ticket,setticket] = useState(0)
    const handleadd =()=>{
        setticket(ticket + 1)

    }
    
    const handlesub = ()=>{
        setticket(ticket - 1)
    }
    const handlereset =()=>{
        setticket(0)
    }
    return(
        <div>
<h1>jailar - {ticket}</h1>
<button onClick={handleadd}>Add</button>
<button onClick={handlesub}>Minus</button>
<button onClick={handlereset}>reset</button>


        </div>
    );
}
export default CounterComp