import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Table, Input } from 'reactstrap'
import './style.css'
export default function Students() {
    const [text,setText] = useState([])
    const [data, setData] = useState([])
    const [message, setMessage] = useState(null)
    const url = 'https://66a07c777053166bcabb9364.mockapi.io/student'
    const getStudents = () => {
        axios.get(url)
            .then(function (res) {
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const deleteStudent = (id) => {
        axios.delete(url + '/' + id)
            .then(function (res) {
                setMessage('Delete successful')
                setData(data.filter(item=>item.id!==id))
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const addNewStudent = () => {
        axios.post(url, {
            name: 'Le Buoi'
        })
            .then(function (res) {
                setMessage('Adding successful')
                setData([...data,{id:res.data.id,name:text}])
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const updateStudent = (id) => {
        axios.put(url + '/' + id, {
            name: 'Le Buoi'
        })
            .then(function (res) {
                setMessage('Update successful')
                console.log('res', res)
                setData(data.map(item=>item.id===id?{...item,name:'Le Tho Vang'}:item))
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getStudents()
    },[])
    return (
        <div>
            <Container>
                <button onclick={addNewStudent}>Add new student</button>
                {
                    message && <p>{message}</p>
                }
                <h1>Student list</h1>
                <Input type='text' value={text} onChange={(event)=>setText(event.target.value)} onKeyDown={(e)=>{
                    if(e.key=='Enter'){
                        addNewStudent(text)
                        setText('')
                    }
                }}
                
                />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Username
                            </th>
                            <th>
                                
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => (
                                <tr>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteStudent(item.id)}>Delete</button>
                                        <button className='btn btn-success' onClick={() => updateStudent(item.id)}>Update</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
