import React , { useState }from 'react';
import Chart from './components/Chart';
import ChartRe from './components/ReCharts';
import CallsPerHour from './components/CallsPerHour';
import './App.css';

function App() {
  // const url = 'http://localhost:5000'
  // const openCallsUrl = '/customOpenCalls';
  const [chart1 , setChart1] = useState(
    { 
      x: 0,
      y: 0,
      width: 500, 
      height: 250
    })
    const [chart2 , setChart2] = useState(
      { 
        x: 510,
        y: 0,
        width: 500,
        height: 250
      })
      const [chart3 , setChart3] = useState(
        { 
          x:510,
          y: 260,
          width: 500,
          height: 250
        })

  return (
    <div className = 'main'>
      <div className = 'chartArea'>
        <Chart default={chart1} setChart = {setChart1}/>
        <ChartRe  default={chart2} setChart = {setChart2}/>
        <CallsPerHour  default={chart3} setChart = {setChart3} />
      </div> 
    </div>
  )
}
export default App