import React from 'react'
import "./write.css"
import { useState } from 'react'

export default function Edit(props) {
  
    const[editimage,setEditimage]= useState(props.editblog[0].image)
    const[editcontent,setEditcontent]=useState(props.editblog[0].content)
//    console.log(props.editblog)
    
    
    const selectimage=(event)=>{
       const i = URL.createObjectURL(event.target.files[0])

       setEditimage(i)
    }
    const contentfun=(event)=>{ 
         setEditcontent(event.target.value)
      
    }
  return (
    <div id="writemaindiv">
        
  
    <p id="p2"><i class="fa-solid fa-image iconwrite"></i> <input type="file" onChange={selectimage}/></p>
    <textarea cols={60} rows={20} onChange={contentfun}>{editcontent}</textarea><br/><span style={{color:"red"}}>{props.blogcontentmessage}</span><br/>
    <button id="publishbtn" onClick={()=>props.updatefun(props.editblog[0].id,editimage,editcontent)}>Update</button>
</div>
  )
}
