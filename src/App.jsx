import React, { useState } from "react";
import"./App.css";
import CounterComp from "./component/CounterComp";
import TaskComp from "./component/TaskComp";
import ProductComp from "./component/ProductComp";
import NameChangeComp from "./component/NameChangeComp";
import PropsEg from "./component/PropsEg";
import PropsProduct from "./component/PropsProductComp";
import PropsProductComp from "./component/PropsProductComp";
import ApiCallButton from "./component/ApicallButton";
import LifeCycleComp from "./component/LifeCycleComp";
import FormReact from "./component/FormReact";
import ReactHookFrom from "./component/ReactHookForm";
import TodoList from "./component/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorHandling } from "./component/ErrorHandling";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import PageApione from "./component/PageApione";
import PageApiTwo from "./component/PageApiTwo";

function App(){
  // const[name,setname]=useState("Ramya")
  // const[age,setage]=useState(21)
  const[islogin,setislogin]=useState(true);
  const handlelogout = ()=>{
    setislogin(false);
  };
  const[data,setdata]=useState([   
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        "rate": 4.7,
        "count": 500
      }
    },
])
  return(
       <>
     {/* <BrowserRouter> */}
     {/* {name} */}
    {/* <CounterComp/> */}
    {/* <TaskComp/> */}
    {/* <ProductComp/> */}
    {/* <NameChangeComp/> */}
    {/* <PropsEg data={data} a ={"Ramya"} b = {21} dob={"17/09/2004"}/> */}
    {/* {data.map((da)=>(
      <div>
       <PropsProductComp a={da}/>
       </div>
    ))} */}
     
     {/* <button onClick={handlelogout}>Log out</button>
     {islogin ? <ApiCallButton/>:<h4>log out</h4>} */}
     {/* <LifeCycleComp/> */}
      {/* < TodoList/> */}
      {/* <div>
        <Link to="/">home</Link>
        <Link to="/hookform">hookform</Link>
        <Link to="/error">error</Link>
      </div>
      <Routes>
        <Route path="/"element={<FormReact/>}/>
        <Route path="/hookform" element={<ReactHookFrom/>}/>
        <Route path="/error" element={<ErrorHandling/>}/>
      </Routes> */}
      {/* <PageApione/> */}
      {/* <PageApiTwo/> */}
     {/* <FormReact/>
     <ReactHookFrom/> */}
     {/* <ErrorHandling/> */}
    {/* </BrowserRouter> */}
    </>
  )
}
export default App;

