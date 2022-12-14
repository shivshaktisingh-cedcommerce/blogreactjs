import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  // console.log(props.loginuser,props.loginactive)
    const navigate=useNavigate()
    const registerfun=()=>{
        navigate("/register")
    }
    const loginfun=()=>{
        navigate("/login")
    }
    const write=()=>{
      navigate("/write")

    }
    const homepage=()=>{
      navigate("/")
    }
   
  return ( <>
    <div id= "navbarmaindiv">
        <div id="nav" >
            <input type="button" value="M" id="btn1" onClick={homepage}/>
            <input type="button" value="I" id="btn2" onClick={homepage}/>
            <input type="button" value="T" id="btn3" onClick={homepage}/>
            <input type="button" value="R" id="btn4" onClick={homepage}/>
        </div>
        <div id="search"></div>
      { props.loginactive==0?
       <div id="register" className='popover__wrapper'>
            <button className="popover__title" onClick={registerfun}><i class="fa fa-user-plus" aria-hidden="true"></i></button>
            <div className="popover__content">
               <p className="popover__message">Register here</p>
            </div>
        </div>:""
        }
      {  props.loginactive==0?<div id="login" className='popover__wrapper'>
            <button className="popover__title" onClick={loginfun}><i class="fa fa-sign-in" aria-hidden="true"></i></button>
            <div className="popover__content">
               <p className="popover__message">Login here</p>
            </div>
        </div>:""}

        { props.loginactive==1?
        <div id="writehere"><button id="writeherebtn" onClick={write}>New Post</button>
        </div>:""}

        { props.loginactive==1?
        <div id="welcomeuser" className="popover__wrapper"><button id="welcomeuserbtn" className="popover__title">{"Welcome" +props.loginuser}</button>
        <div className="popover__content">
               <p className="popover__message"><input type="submit" value="Logout" onClick={()=>{props.logoutfun()}}/><br/><input type="submit" value="Your Post" onClick={()=>props.yourpostfun()}/></p>
            </div>
        </div>:""}
</div>

</>
  )
}
