import React from 'react'
import "./Login.css"
import {useState} from "react"

export default function Login(props) {

  const[userlogin,setUserlogin]=useState({
    email:"",
    password:""
  });

  const loginfun=(event)=>{
    setUserlogin({...userlogin, [event.target.name]:event.target.value})

  }
  return (
    <div id="loginmaindiv">
    <div id="loginfirstdiv">
        <h3 id="h3">Welcome Back!</h3>
        <h5 id="h5">{props.message1}</h5>
       
        <div id="loginemaildiv"><i class="fa fa-envelope iconregistered" aria-hidden="true" ></i><input type="text" name="email" autoFocus value={userlogin.email} onChange={loginfun}/></div>
       
        <div id="loginpassworddiv"><i class="fa fa-key iconregistered" aria-hidden="true"></i><input type="password" name="password" value={userlogin.password} onChange={loginfun}/></div>
        <button id="loginbutton" onClick={()=>props.logincheck(userlogin)}>Login </button>
    </div>
    <div id="registerseconddiv">
        <img src="../3.jpg" alt="" id="registeredpageimage"/>
    </div>
   
</div>
  )
}
