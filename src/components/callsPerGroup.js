import React, { useEffect, useState }  from 'react';
import {
   XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList, Cell, CartesianGrid

} from 'recharts';
import { Rnd } from 'react-rnd';

import { postChartConfig ,getChartConfig } from './apiCalls';
const url = 'http://localhost:5000/chartConfig'
const data = [
    {
      name: '1st line', opened: 58, closed: 2400, amt: 2400,
    },
    {
      name: '2nd line', opened:8, closed: 1398, amt: 2210,
    },
    {
      name: '3rd line', opened: 8, closed: 9800, amt: 2290,
    },
    {
      name: 'info Sec', opened: 3, closed: 3908, amt: 2000,
    },
    {
      name: 'Infra', opened: 6, closed: 4800, amt: 2181,
    },
    {
      name: 'Apps', opened: 45, closed: 3800, amt: 2500,
    },
    {
      name: 'NGD', opened: 37, closed: 4300, amt: 2100,
    },
  ];

function CallsPerGroup() {

    const [size, setSize ] = useState({ width: "500px", height: "250px"});
    const [position, setPosition] = useState({x:0, y: 0} );
    const [moved, setMoved] = useState(false);

    useEffect( ()=> {
      const postConfig = async(size, position) => {
        try {
            if (moved){
              const config = {}
              config.chart='callsPerGroup';
              config.width=size.width;
              config.height=size.height;
              config.x=position.x;
              config.y=position.y;
              console.log(config);
              await postChartConfig(url,config)
            }
        } catch(error){console.log(error)}
      }
      postConfig(size, position)

    },[size, position]);

    useEffect( () => {
      const getConfig = async() => {
        try {
          const data = await getChartConfig(url, 'callsPerGroup');
          setMoved(false);
          setPosition({x:data.x, y:data.y});
          setSize({width:data.width, height:data.height});
          console.log(position, size);
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
            width={490}
            height={500}
            // layout={'horizontal'}
            layout={'vertical'}
            data={data}
            margin={{top: 15, right: 15, left: 15, bottom: 15,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="opened" fill="#8884d8"  maxBarSize={15} >
            {data.map((entry, index) => (
            <Cell fill={entry.opened > 40 ? '#ff0000' : '#8884d8' }/>
            ))}
            <LabelList dataKey="opened" position="inside" fill='#000000' />
            </Bar>
            {/* <Bar dataKey="closed" fill="#82ca9d" /> */}
           
          </BarChart>
        </ResponsiveContainer>
        </Rnd>
      );
    }

export default CallsPerGroup;
