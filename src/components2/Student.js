import React, { useState } from 'react'
import {Button, Input, ListGroupItem } from 'reactstrap'
import './style.css'
export default function Student(props) {
  const {student, deletebyID, reChecked, rename}=props
  const [isEdit,setIsEdit] = useState(false)
  const [text,setText] = useState(student.name)
    return (
   <ListGroupItem className='student-item'>
    <Input type='checkbox' checked={student.checked} onChange={()=>reChecked(student.id)}/>
    <div className={student.checked?"student-name active d-flex align-items-center":"student-name d-flex align-items-center"} onClick={()=>reChecked(student.id)}>
    {
      !isEdit?<p onDoubleClick={()=>setIsEdit(true)}>{student.name}</p>:
      <Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
        if(e.key=="Enter"){
          setIsEdit(false);
          rename(student.id,text)
        }
      }}/>
    }
    </div>
    
    <button className='button-close' onClick={()=>deletebyID(student.id)}><i className='fa-solid fa-close'></i></button>
   
  
   </ListGroupItem>
  )
}
