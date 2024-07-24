import React, { useState } from 'react'

export default function Hook2() {
    const [student,setStudent] = useState({name:"",age:0})
  return (
    <>
    <h1>
        Em tên là {student.name}, năm nay em {student.age} tuổi 
    </h1>
    <form>
        <input type='text' placeholder='Nhập tên' value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}/>
        <input type='number' placeholder='Nhập tuổi' value={student.age} onChange={(e)=>setStudent({...student,age:e.target.value})}/>
    </form>
    </>
  )
}
