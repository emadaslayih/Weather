import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom'


export default function Favorites(props) {

  const nav=useNavigate();
  console.log(props.favorites)

  return (
    <div className='favMainDiv'>
        
        {props.favorites.map((val,i)=>{
          return(
            <div className='favDiv' onClick={()=>{
              props.getState(val.state).
              then(props.getWeather(val.id)).then(props.getForcast(val.id));nav('/')}}>
                <h1 className='favState'>{val.state}</h1>
                <h2 className='favState'>{val.country}</h2>
                <h1 className='favState'>{val.weather}</h1>
            </div>
          )
        })}
    </div>
  )
}
