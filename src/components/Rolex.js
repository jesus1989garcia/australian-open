import Clock from "react-clock";
import React, { useEffect, useState } from 'react'
import 'react-clock/dist/Clock.css'
import rolexLogo from '../imgs/rolex-logo.png'

function Rolex() {

  const [time, setTime] = useState(new Date());
  const [yourTime, setYourTime] = useState(new Date().getHours() + ':' + new Date().getMinutes())
  

  useEffect( () => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return(
    <div style={{height:"160px"}} className="div-rolex">
      <img src={rolexLogo} height="70px"/>
      <Clock value={time} />
      <div>
        <p>your time is: {yourTime}</p>
      </div>
    </div>
  )
  
}

export default Rolex