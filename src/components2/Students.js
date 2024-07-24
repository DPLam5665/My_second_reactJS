import React, { useEffect, useState } from 'react'
import Student from './Student'
import Add from './Add'
import Footer from './Footer'
import { Container, ListGroup } from 'reactstrap'
import './style.css'
export default function Students() {
    
    const [list, setList] = useState([
        {
            id: 1,
            name: "Lê Mèo",
            age: 10,
            checked: true
        },
        {
            id: 2,
            name: "Lê Thỏ",
            age: 5,
            checked: true
        },
        {
            id: 3,
            name: "Lê Hươu",
            age: 13,
            checked: false
        },
        {
            id: 4,
            name: "Lê Nai",
            age: 16,
            checked: false
        }
    ])
        useEffect(()=>{
            if(localStorage.getItem('list')){
                setList(JSON.parse(localStorage.getItem('list')))
            }
        },[])
 
    const [flag,setFlag] =useState('')
    const [checkAll,setCheckAll]=useState(false)

    const deletebyID = (id) => {
        const newList=list.filter(stud => stud.id !== id)
        setList(newList)
        localStorage.setItem('list',JSON.stringify(newList))
    }
    const rename = (id,name)=>{
        let newList = list.map(stud => stud.id === id ? { ...stud, name:name} : stud)
        setList(newList)
        localStorage.setItem('list',JSON.stringify(newList))
    }
    const reChecked = (id) => {
        let newList = list.map(stud => stud.id === id ? { ...stud, checked: !stud.checked } : stud)
        setList(newList)
        localStorage.setItem('list',JSON.stringify(newList))
    }
    const addNewStudent = (name) => {
        const newList=[...list, { id: list.length==0?1:list.reduce((value,item)=>Math.max(item.id,value)+1,0), name: name, checked: false }]
        setList(newList)
        localStorage.setItem('list',JSON.stringify(newList))
    }
    const filterStudents=(list,flag)=>{
        if(flag=='CHECK'){
            return list.filter(stud=>stud.checked)
        }
        else if(flag=='NOCHECK'){
            return list.filter(stud=>!stud.checked)
        }
        else if(flag=='DELETEALL'){
            setList(list.filter(student=>student.check==false))
            setFlag('')
        }
        else if(flag=='CHECKALL'){
            setList(list.map(student=>({...student,checked:!checkAll})))
            setCheckAll(!checkAll)
            setFlag('')
        }
        return list;
    }
    console.log(flag)
    return (
        <div class="contain">
            <Container className='w-100 p-5 my-5'>
                <div class="header">
                    <h1 >Student list</h1>

                    <div className='add_form'>
                        <Add addNewStudent={addNewStudent} />
                    </div>
                </div>
                <h1 className='title'></h1>
                <ListGroup>
                    {filterStudents(list,flag).map((stud, index) => (<Student key={index} student={stud} deletebyID={deletebyID} reChecked={reChecked} rename={rename}/>))}
                </ListGroup>

                <Footer setFlag={setFlag} checkAll={checkAll} setCheckAll={setCheckAll}/>
            </Container>
        </div>
    )
}
