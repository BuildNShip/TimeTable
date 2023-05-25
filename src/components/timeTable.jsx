import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const timeTable = () => {
  const { url } = useParams();

  const [currentPeriod, setCurrentPeriod] = useState('BBA')
  const [timetable, setTimeTable] = useState({})
  const decodedString = decodeURIComponent(url);
  
  useEffect(() => {
    setTimeTable(JSON.parse(decodedString))
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

    

    let js = {'hey':"hello"}
    const jsonString = JSON.stringify(js);
    const urlEncodedString = encodeURIComponent(jsonString);

    console.log(urlEncodedString)

    setCurrentPeriod('No ongoing period');


  };


  return (
    <div>
      <h1>TimeTable</h1>
      <h2>Current Period : {currentPeriod}</h2>
      <button onClick={getCurrentPeriod}>Check</button>
    </div>
  );
};

export default timeTable;