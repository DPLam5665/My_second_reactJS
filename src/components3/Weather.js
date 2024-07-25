import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import { Container, Input } from 'reactstrap'
export default function Weather() {
    const apikey = 'cea1836b4b814546c838757a2eafbc33'
    const [data, setData] = useState(null)
    const [text, setText] = useState("")
    const [city, setCity] = useState("")
    const [error, setError] = useState(null)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    const fetchData = () => {
        axios.get(url)
            .then(function(res) {
                console.log(res)
                setData(res.data)
            })
            .catch(function(error) {
                console.log(error)
                if (error.response.status == '404') {
                    setError('No city found')
                }

            })
    }
    const getTime=(value)=>{
        let d = new Date(value*1000)
        return d.toLocaleString()
    }
    useEffect(() => {
        fetchData()
    }, [city])
    return (
        <Container>
            <div className='contain'>
                <h1 className='system-title'>Real time weather forecast result searching system</h1>
                <Input className='search-box' type='text' value={text} placeholder='Which city are you looking for?' onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setCity(text)
                            setText('')
                        }
                    }}
                />
                {
                    error &&
                    <h1>{error}</h1>
                }
                {
                    data &&
                    <div className='weather-info'>
                        <div className='city'><h1>City: {data.name}</h1></div>

                        <div className='tempurature'><h1 className='tempurature'>Temprature: {data.main.temp}</h1></div>
                        <div className='country'><h1 className='country'>Country: {data.sys.country}</h1></div>
                        <div className='suntime'><h1>Suntime: {getTime(data.sys.sunrise)} - {getTime(data.sys.sunset)} </h1></div>
                        <div className='image'>
                            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                            <div className='description'><h1>{data.weather[0].description}</h1></div>
                        </div>
                        
                    </div>
                }
            </div>
        </Container>
    )
}
