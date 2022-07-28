import React from 'react'
import "./Home.css"

export default function Home(props) {
 
  return (
    <div id="homemaindiv">
      {props.userblog.map((e)=>{
        
        return <div id="repetitivedivhome"> 
                   <h1 id="h1">{e.loginuser}<span id="icons"><i class="fa-brands fa-instagram iconhome"></i><i class="fa-brands fa-twitter iconhome"></i><i class="fa fa-facebook-square iconhome" aria-hidden="true" ></i></span></h1>
                   <h1 id="h2">{e.title}<span id="span1">Published at: {e.date}</span></h1>
                   <div id="userblogimagedivinhome"><img src={e.image} id="userblogimageid"/></div>
                   <div id="userblogcontentinhome"><p id="pcontent">{e.content}</p></div>
                   </div>

      })}
    </div>
  )
}
