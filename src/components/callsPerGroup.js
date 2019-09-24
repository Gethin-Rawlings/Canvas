import React, { useEffect, useState }  from 'react';
import {
   XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList, Cell, CartesianGrid

} from 'recharts';
import { Rnd } from 'react-rnd';

import { postChartConfig ,getChartConfig, getChartData } from './apiCalls';

function CallsPerGroup(props) {
    const url = props.config
    const [size, setSize ] = useState({ width: "500px", height: "250px"});
    const [position, setPosition] = useState({x:0, y: 0} );
    const [moved, setMoved] = useState(false);
    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);

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
              await postChartConfig(url,config)
            }
        } catch(error){console.log(error)}
      }
      postConfig(size, position)

    },[moved, size, position, url]);

    useEffect( () => {
      const getConfig = async() => {
        try {
          const data = await getChartConfig(url, 'callsPerGroup');
          setMoved(false);
          setPosition({x:data.x, y:data.y});
          setSize({width:data.width, height:data.height});
        } catch(error){
          console.log(error);
        }
      }  
      getConfig();
    },[url]);

    useEffect( ()=> {
      const getData = async() =>  {
        try {
          const data = await getChartData(props.url)
          setCalls(data)
        } catch (error) {setRequestFailed(true)
        }
      }
        getData();
        let interval = setInterval(getData, 30000);
        return function cleanup() {
            clearInterval(interval);
        }
    },[props.url])

  if (requestFailed) return <p>Failed!</p>  

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
            layout={'vertical'}
            data={calls}
            margin={{top: 20, right: 40, left: 40, bottom: 20,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" stroke="white"/>
            <YAxis dataKey="assignedgroup" type="category" stroke="white"/>
            <Tooltip className="textWhite"/>
            <Bar dataKey="opened" fill="#8884d8"  maxBarSize={13} >
            {calls.map((entry, index) => (
                <Cell key= {index} fill={entry.opened > 50 ? 'red' : entry.opened < 10 ? 'green' : '#8884d8' }/>
            ))}
            <LabelList dataKey="opened" position="inside" stroke = 'white'  />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        </Rnd>
      );
    }

export default CallsPerGroup;
