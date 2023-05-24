import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentPeriod, setCurrentPeriod] = useState('BBA')
  const [timetable, setTimeTable] = useState([])



  useEffect(() => {
    console.log('fetching time table')
    const fetchTimeTable = async () => {
      const response = await fetch('./datas/timetable.json');
      const data = await response.json()
      setTimeTable(data)
    }

    fetchTimeTable()
    console.log("timetable fetched")
  }, [])

  const getCurrentPeriod = () => {
    const now = new Date()
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' })
    const currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const periods = timetable[currentDay];

    if (periods) {
      const currentPeriod = periods.find(period => {
        const { startTime, endTime } = period;
        return startTime <= currentTime && currentTime <= endTime;
      });

      if (currentPeriod) {
        setCurrentPeriod(currentPeriod.periodName);
        return;
      }
    }

    setCurrentPeriod('No ongoing period');


  };



  return (
    <>
      <h1>TimeTable</h1>
      <h2>Current Period : {currentPeriod}</h2>
      <button onClick={getCurrentPeriod}>Check</button>
    </>
  )
}

export default App
