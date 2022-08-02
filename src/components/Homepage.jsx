import React from 'react'
import { useState } from 'react';
import Favorites from './Favorites';
import './homepage.css'

export default function Homepage(props) {

    const[flagbutton, setflagButton] = useState(false) 
    const[temp, setTemp] = useState() 


    

    const addToFav=()=>{
        let id = props.state.Key
        let state=props.state.LocalizedName
        let country = props.state.Country.LocalizedName
        let weather = props.weather.Temperature.Metric.Value
        let favorate= true 
        let temp={id:id,state:state,country:country,weather:weather,favorate:favorate}
        console.log('add')       
         setflagButton(true)
        props.addFav(temp)
        
       
    }
    const addRemove=(key)=>{
        
        console.log('Remove')
        props.remove(key)
        // let flag=false;
        // for(let i=0;i<props.favorites.length;i++)
        // {
        //     if(props.favorites[i][1]==props.state.LocalizedName)
            
        // }
        // if(flag==true)
        // {document.getElementsByClassName('favBtn').innerHTML='Remove from Favorites'}
        // else{document.getElementsByClassName('favBtn').innerHTML='Add to Favorites'}

    }
    const filter = props.favorites.filter((x) =>x.id === props.state.Key)
    console.log(filter)
   
  return (
    <div>

        <input type="text" defaultValue={'tel aviv'} onChange={(e)=>{
            props.getState(e.target.value).
            then(props.getWeather(props.stateKey)).then(props.getForcast(props.stateKey))}}/>
            
        <div className='genInfo'>
            <h1>{props.state.LocalizedName}</h1>
            <h3>{props.state.Country.LocalizedName}</h3>
            <h1>{props.weather.Temperature.Metric.Value}C°</h1>
         
                { props.favorites.length > 0 &&
                filter.length > 0 && 
               filter[0].id === props.state.Key? 
                ( <button onClick={()=>addRemove( props.state.Key)} className='favBtn'>Remove from Favorites</button>)
                : (<button onClick={addToFav} className='favBtn'>Add to Favorites</button>)}
               

{/* <button onClick={addToFav} className='favBtn'>Add to Favorites</button> */}
            
            
          


        </div>
        <div className='forecastDiv'>
            <div className='forecast'>
                <h2>Sun</h2>
                <h2>{Math.floor((props.forcast.DailyForecasts[0].Temperature.Minimum.Value-32)/1.8)} C°</h2>
            </div>
            <div className='forecast'>
                <h2>Mon</h2>
                <h2>{Math.floor((props.forcast.DailyForecasts[1].Temperature.Minimum.Value-32)/1.8)} C°</h2>
            </div>
            <div className='forecast'>
                <h2>Tue</h2>
                <h2>{Math.floor((props.forcast.DailyForecasts[2].Temperature.Minimum.Value-32)/1.8)} C°</h2>
            </div>
            <div className='forecast'>
                <h2>Wed</h2>
                <h2>{Math.floor((props.forcast.DailyForecasts[3].Temperature.Minimum.Value-32)/1.8)} C°</h2>
            </div>
            <div className='forecast'>
                <h2>Thu</h2>
                <h2>{Math.floor((props.forcast.DailyForecasts[4].Temperature.Minimum.Value-32)/1.8)} C°</h2>
            </div>
        </div>

        




    </div>
  )
}


