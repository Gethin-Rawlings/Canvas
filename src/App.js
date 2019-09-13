import React from 'react';
import Charts from './components/Chart';
import ChartRe from './components/ReCharts';
import CallsPerHour from './components/CallsPerHour';
import './App.css';

function App() {
  const url = 'http://localhost:5000'
  const openCallsUrl = '/customOpenCalls';
  
  return (
    <div className = 'main'>
      <div className = 'chartArea'>
        <Charts url={url+openCallsUrl} />
        <ChartRe />
        <CallsPerHour />
      </div> 
    </div>
  )
}
export default App