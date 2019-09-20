import React, { useState, useEffect} from 'react';
import { Rnd } from 'react-rnd';
import '../App.css';

import { postChartConfig ,getChartConfig } from './apiCalls';

const url = 'http://localhost:5000/chartConfig'

function Number(props) {
  const [size, setSize ] = useState({ width: "500px", height: "250px"});
  const [position, setPosition] = useState({x:512, y: 262} );
  const [moved, setMoved] = useState(false);
  useEffect( ()=> {
    const postConfig = async() => {
      try {
          if (moved){
            const config = {}
            config.chart=props.name;
            config.width=size.width;
            config.height=size.height;
            config.x=position.x;
            config.y=position.y;
            await postChartConfig(url,config)
          }
      } catch(error){console.log(error)}
    }
    postConfig(size, position)

  },[moved, position, size, props.name]);

  useEffect( () => {
    const getConfig = async() => {
      try {
        const data = await getChartConfig(url, props.name);
        setMoved(false);
        setPosition({x:data.x, y:data.y});
        setSize({width:data.width, height:data.height});
      } catch(error){
        console.log(error);
      }
    }  
    getConfig();
  },[props.name]);

   // useEffect( ()=>{
//   const getData = async() =>  {
//     try {
//       const data = await getChartData(props.url)
//       setCalls(data)
//     } catch (error) {setRequestFailed(true)
//     }
//   }
//   getData();
// })
    return (
      <Rnd 
        className='chart2'
        size={size} 
        position={position}
        onDragStop={(e, d) => { setMoved(true); setPosition({ x: d.x, y: d.y})}}
        onResizeStop={(e, direction, ref, delta, position) => {
          setMoved(true);
          setSize({
            width: ref.style.width,
            height: ref.style.height
            
          });
        }}>{props.title}
        <div className='largeNumber'>{props.value}</div>
      </Rnd>


      );
    }
    
    // ff0000

export default Number
