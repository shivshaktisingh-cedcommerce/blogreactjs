import React from 'react'
import "./Home.css"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Button , Box  } from '@mui/material'

import Modal from '@mui/material/Modal';

export default function Home(props) {
  const[flag,setFlag]=useState(false)
  const[commentblogid,setCommentblogid]=useState()
  const navigate=useNavigate()

  const transfertologin=()=>{
    navigate("login")

  }
  const likefun=(id)=>{
    var z = props.userblog;
    z.map((d)=>{
      if(d.blogid==id){
        if(d.likes==0){
          d.likes=1
          d.color="blue"
        }
        else if(d.likes==1){
          d.likes=0
          d.color="black"
        }        
      }
    })
    props.setUserblog([])
    props.setUserblog([...z])
    // props.setUserblog()   
  }
  const commentfun=(d)=>{
    setCommentblogid(d)
    document.getElementById("myModal").setAttribute("style","display:block")

  }
  const spanfun =()=>{
    document.getElementById("myModal").setAttribute("style","display:none")

  }
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  }

  const savecomment=()=>{
    var z = props.userblog;
    z.map((d)=>{
      if(d.blogid==commentblogid){
       d.comment = props.loginuser+" " + "commented : " +document.getElementById("comment_text_box_id").value;  
      }
    })
    props.setUserblog([])
    props.setUserblog([...z])
    document.getElementById("myModal").style.display = "none";
    document.getElementById("comment_text_box_id").value=""; 

  }
 
  return (
    <div id="homemaindiv">
      {props.loginactive!=1?<div id ="homepage_before_login_div">
        <img src="../23.jpg" alt="" id="image_id_homepage_before_login"/>
        <button id="login_button_id_on_homepage" onClick={transfertologin}>Login</button>
      </div>
   
      :props.userblog.map((e)=>{
        
        return <div id="repetitivedivhome"> 
                   <h1 id="h1">{e.loginuser}<span id="span1">Published at: {e.date}</span></h1>
                   <div id="content_and_image">
                   <div id="userblogcontentinhome"><p id="pcontent">{e.content}</p></div>
                   <div id="userblogimagedivinhome"><img src={e.image} id="userblogimageid" alt=""/></div>
                   </div>
                   <div id="like_and_comment"><i class="fa fa-thumbs-up like_icon"  aria-hidden="true" onClick={()=>likefun(e.blogid)} style={{color:e.color}}></i><span style={{float:"left",fontSize:"2vw"}}>{e.likes}</span><i class="fa-solid fa-comment" id="comment_icon" onClick={()=>commentfun(e.blogid)}></i></div>    
                   {e.comment}         
                   </div>


      })}
      
      <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={spanfun}>&times;</span>
            <p>Your Comment: <input type="text" autoFocus id="comment_text_box_id"/></p>
            <button onClick={savecomment}>Save</button>
      </div>

</div>
    </div>
  )
}
