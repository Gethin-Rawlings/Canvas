import React , { useState, useEffect }from 'react';
import Chart from './components/Chart';
import ChartRe from './components/ReCharts';
import CallsPerHour from './components/CallsPerHour';
import './App.css';
import { getChartConfig } from './components/apiCalls';

const url = 'http://localhost:5000/chartConfig'

function App() {
  const [requestFailed, setRequestFailed] = useState(false)
  const [chart1 , setChart1] = useState(
    { 
      x: 0,
      y: 0,
      width: 500, 
      height: 250
    })
    const [chart2 , setChart2] = useState(
      { 
        x: 512,
        y: 0,
        width: 500,
        height: 250
      })
      const [callsPerHour , setCallsPerHour] = useState(
        { 
          x:512,
          y: 262,
          width: 500,
          height: 250
        })

    const callsPerHourDefault = { 
      x:512,
      y: 262,
      width: 500,
      height: 250
    }

  useEffect( ()=>{
    const getData = async() =>  {
      try {
        const data = await getChartConfig(url, 'callsPerHour')
        console.log(data);
        setCallsPerHour(data);
      } catch (error) {setRequestFailed(true)
      }
    }
    getData();
  },[])
 if (requestFailed) {
   console.log(setRequestFailed);
 };

  return (
    <div className = 'main'>
      <div className = 'chartArea'>
        <Chart default={chart1} setChart = {setChart1}/>
        <ChartRe  default={chart2} setChart = {setChart2}/>
        <CallsPerHour  default={callsPerHour} setChart = {setCallsPerHour} compare = {callsPerHourDefault}/>
      </div> 
    </div>
  )
}
export default App