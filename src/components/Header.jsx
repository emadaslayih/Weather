import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
    const nav=useNavigate()
const reset=()=>{{
    
    props.getState('tel aviv').
    then(props.getWeather('215854')).then(props.getForcast('215854')).
    then(nav('/'))
}}
  return (
    <div>
        <button onClick={reset}>Home</button>
        <Link to='/favorites'><button >Favorites</button></Link>

    </div>
  )
}
