import React , { useState } from 'react';
import CallsPerGroup from './components/callsPerGroup';
import CallsPerHour from './components/CallsPerHour';
import CallsPerDay from './components/CallsPerDay';
import './App.css';


// const url = 'http://localhost:5000/chartConfig'

function App() {
  const [requestFailed, setRequestFailed] = useState(false)

  return (
    <div className = 'main'>
      <div className = 'chartArea'>
        <CallsPerDay />
        <CallsPerHour  />
        <CallsPerGroup />
      </div> 
    </div>
  )
}
export default App