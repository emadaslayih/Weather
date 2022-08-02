import Homepage from './components/Homepage';
import Favorites from './components/Favorites';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import './App.css';



function App() {
  const key='xAzxTDgOKHZ1wYURvf6rxYrowWki8NjD'
  const [flag,setFlag]=useState(false)
  const [state,setState]=useState({
    "Key": "215854",
    "LocalizedName": "Tel Aviv",
    "Country": {
      "LocalizedName": "Israel"
}});
const [weather,setWeather]=useState(  {

  "Temperature": {
    "Metric": {
      "Value": 29.3,
    }
}});

const [forcast,setForcast]=useState(

  {
      "Headline": "{Category: \"heat\", EffectiveDate: \"2022-08-04T20:00…}",
      "DailyForecasts": [
        {
          "Temperature": {
            "Minimum": {
              "Value": 32,
            }
          }},
        {
          "Temperature": {
            "Minimum": {
              "Value": 32,
            }
          }},
        {
          "Temperature": {
            "Minimum": {
              "Value": 32,
            }
          }},
        {
          "Temperature": {
            "Minimum": {
              "Value": 32,
            }
          }},
        {
          "Temperature": {
            "Minimum": {
              "Value": 32,
            }
          }}
      ]
  }
);
  const [favorites,setFavorites]=useState([])
  const [stateKey,setStateKey]=useState('215854');


  const getState=async(state)=>{
      fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${state}`).
      then((res)=>{return res.json()}).
      then((data)=>{setStateKey(data[0].Key);setState(data[0])}).
      catch((e)=>{console.log(e)})

  }

  const getWeather=async(id)=>{

      fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`).
      then((res)=>{return res.json()}).
      then((data)=>{setWeather(data[0])}).
      catch((e)=>{console.log(e)})

  }

  const getForcast=async(id)=>{
      fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${key}`).
      then((res)=>{return res.json()}).
      then((data)=>{setForcast(data)}).
      catch((e)=>{console.log(e)})
  }

  const reset=()=>{
    if(flag==false){
      getState('tel aviv').
      then(getWeather('215854')).
      then(getForcast('215854'));
      setFlag(true)
    }
  }
  reset()

  const addFav=(temp)=>{
    console.log(temp)
    let flag=false
    for(let i=0;i<favorites.length;i++)
    {if(favorites[i].id===temp.id)
      {flag=true
    return} }
    if(flag===false)
    setFavorites([...favorites,temp])
  }
  const removeFavorate=(key)=>{
    console.log(key)
    let temp=favorites.filter((x) =>x.id !== key)
    console.log(temp)
    setFavorites(temp)
    console.log(favorites)
  }
  
  


  
  console.log(favorites)
  return (  

    <div className="App">
      
      <BrowserRouter>
      <Header getForcast={getForcast} getState={getState} stateKey={stateKey} getWeather={getWeather}/>
      <Routes>
      
        <Route path='/' element={<Homepage setState={setState} state={state} addFav={addFav}
       weather={weather} setWeather={setWeather} forcast={forcast} setForcast={setForcast}
       getForcast={getForcast} getState={getState} remove={removeFavorate}  getWeather={getWeather} stateKey={stateKey}
       setFavorites={setFavorites} favorites={favorites}/>} />
        <Route path='/favorites' element={<Favorites favorites={favorites}
        getForcast={getForcast} getState={getState}  getWeather={getWeather}/>} />

      </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
