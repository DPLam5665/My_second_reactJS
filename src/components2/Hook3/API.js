import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function API() {
    const [data, setData]=useState([])
    const fetchAPI =()=>{
        const url='https://66a07c777053166bcabb9364.mockapi.io/student'
        axios.get(url)
        .then (function(res){
            console.log(res)
            setData(res.data)
        })
        .then (function(error){
            console.log(error)
        
        })
    }
    useEffect(()=>{
        fetchAPI();
    },[])
  return (

    <div>
        {
            data.map((item,index)=>(
                <h1 key={index}>{item.id}, {item.name}</h1>
            ))
        }
       
    </div>
  )
}
