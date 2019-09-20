import React from 'react';
import CallsPerGroup from './components/callsPerGroup';
import CallsPerHour from './components/CallsPerHour';
import CallsPerDay from './components/CallsPerDay';
import Number from './components/Number';
import './App.css';

function App() {
  return (
    <div className = 'main'>
      <div className = 'chartArea'>
        <CallsPerDay />
        <CallsPerHour  />
        <CallsPerGroup />
        <Number title='Calls Opend Today' value='60' name = 'openCallsTodayNumber' />
      </div> 
    </div>
  )
}
export default App