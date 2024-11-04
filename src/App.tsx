import BackgroundChanger from './components/BackgroundChanger'
import './App.scss'
import { useState } from 'react'
function App() {
 const[bg,setBg]=useState("");

 const bgChanger=(color:string)=>{
  setBg(color);
 }

  return (
    <div className='app' style={{backgroundColor:bg?bg:""}}>
     <BackgroundChanger color={"red"} changeBG={bgChanger}/>
     <BackgroundChanger color={"blue"} changeBG={bgChanger}/>
     <BackgroundChanger color={"green"} changeBG={bgChanger}/>
     <BackgroundChanger color={"default"} changeBG={()=>{setBg("")}}/>
    </div>
  )
}

export default App
