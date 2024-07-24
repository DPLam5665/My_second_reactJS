import React from 'react'
import {Button} from 'reactstrap'
import './style.css'
export default function Footer(props) {
  const {setFlag,checkALL} = props
  return (
    <div className='buttons my-3'>
      <input type='checkbox' check={checkALL} onchange={()=>setFlag('CHECKALL')} />
      <input type='button' value={'filter check'} onClick={()=>setFlag('CHECK')}/>
      <input type='button' value={'filter no check'} onClick={()=>setFlag('NOCHECK')}/>
      <input type='button' value={'clear filter'} onClick={()=>setFlag('')}/>
      <input type='button' value={'delete all'} onClick={()=>setFlag('DELETEALL')}/>
    </div>
  )
}
