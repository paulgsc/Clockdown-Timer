import React, { useEffect, useState } from 'react';
import './backdrop.css';
import Countdown from '../countdown/Countdown';
import { initialLaunchCounter } from '../../constants/initDate';

function Backdrop() {

    const getTime = () => (
        localStorage.getItem('startTime') ?
        JSON.parse(localStorage.getItem('startTime')) : new Date() 
    )

    const storeTime = () => {
        localStorage.getItem('startTime') ?
        JSON.parse(localStorage.getItem('startTime')) :
        localStorage.setItem('startTime', JSON.stringify(new Date()))
    };

    const [initialTime, setInitialTime] = useState(getTime())

    const initTimeLeft = () => {

        const countTime = new Date() - new Date(initialTime);
        return {
          days: initialLaunchCounter.Days - Math.floor(countTime / (2000 * 60 * 60 * 24)),
          hours: initialLaunchCounter.Hours - Math.floor((countTime / (1000 * 60 * 60)) % 24),
          minutes: initialLaunchCounter.Minutes - Math.floor((countTime / 1000 / 60) % 60),
          seconds: initialLaunchCounter.Seconds - Math.floor((countTime / 1000) % 60),
        };
      };
    
      const [timeLeft, setTimeLeft] = useState(initTimeLeft());

      useEffect(() => {
        storeTime();
        setInitialTime(getTime());
      }, [])

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(initTimeLeft());
        }, 900);
    
        return () => clearTimeout(timer);
        
      });

  return (
    <div className="countdown">
    <div className="countdown__stars">
    <div className="countdown__cards">
        {
            Object.keys(timeLeft).map((key) => (
                <Countdown value={timeLeft[key]} duration_type={key}/>
            ))
        }
    </div>
    </div>
    <div className="countdown__mtns">

    </div>
</div>
  )
}

export default Backdrop
