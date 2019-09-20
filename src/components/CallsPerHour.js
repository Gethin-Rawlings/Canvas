import React, { useEffect, useState }  from 'react';
import {
   XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList

} from 'recharts';
import { Rnd } from 'react-rnd';

import { postChartConfig ,getChartConfig } from './apiCalls';
const url = 'http://localhost:5000/chartConfig'
const data = [
  {
    name: '09:00', opened: 12, closed: 2400, amt: 2400,
  },
  {
    name: '10:00', opened:8, closed: 1398, amt: 2210,
  },
  {
    name: '11:00', opened: 28, closed: 9800, amt: 2290,
  },
  {
    name: '12:00', opened: 13, closed: 3908, amt: 2000,
  },
  {
    name: '13:00', opened: 6, closed: 4800, amt: 2181,
  },
  {
    name: '14:00', opened: 20, closed: 3800, amt: 2500,
  },
  {
    name: '15:00', opened: 17, closed: 4300, amt: 2100,
  },
];

function CallsPerHour() {

    const [size, setSize ] = useState({ width: "500px", height: "250px"});
    const [position, setPosition] = useState({x:512, y: 262} );
    const [moved, setMoved] = useState(false);

    useEffect( ()=> {
      const postConfig = async(size, position) => {
        try {
            if (moved){
              const config = {}
              config.chart='callsPerHour';
              config.width=size.width;
              config.height=size.height;
              config.x=position.x;
              config.y=position.y;
              await postChartConfig(url,config)
            }
        } catch(error){console.log(error)}
      }
      postConfig(size, position)

    },[moved,size, position]);

    useEffect( () => {
      const getConfig = async() => {
        try {
          const data = await getChartConfig(url, 'callsPerHour');
          setMoved(false);
          setPosition({x:data.x, y:data.y});
          setSize({width:data.width, height:data.height});
        } catch(error){
          console.log(error);
        }
      }  
      getConfig();
    },[]);

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
      <Rnd size={size} 
      position={position}
      onDragStop={(e, d) => { setMoved(true); setPosition({ x: d.x, y: d.y})}}
      onResizeStop={(e, direction, ref, delta, position) => {
        setMoved(true);
        setSize({
          width: ref.style.width,
          height: ref.style.height
        });
      }}>
        <ResponsiveContainer aspect={2.0} className = 'chart2' >
          <BarChart 
            data={data}
            margin={{top: 15, right: 15, left: 15, bottom: 15,}}>
            <XAxis dataKey="name" type="category"/>
            <YAxis type="number" />
            <Tooltip />
            <Bar dataKey="opened" fill="#ffff80" maxBarSize={15} >
            <LabelList dataKey="opened" position="inside"  className='white'/>
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        </Rnd>
      );
    }

export default CallsPerHour;
