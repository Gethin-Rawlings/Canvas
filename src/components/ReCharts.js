import React from 'react';
import {
   XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList, Cell


} from 'recharts';
import { Rnd } from 'react-rnd';
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

function ChartsRe(props) {
    return (
      <Rnd default={props.default}>
        <ResponsiveContainer aspect={2.0} className = 'chart2' >
          <BarChart 
            width={490}
            height={500}
            // layout={'horizontal'}
            layout={'vertical'}
            data={data}
            margin={{top: 15, right: 15, left: 15, bottom: 15,}}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="opened" fill="#8884d8"  maxBarSize={15} >
            {data.map((entry, index) => (
            <Cell fill={entry.opened > 40 ? '#ff0000' : '#8884d8' }/>
            ))}
            <LabelList dataKey="opened" position="inside" />
            </Bar>
            {/* <Bar dataKey="closed" fill="#82ca9d" /> */}
           
          </BarChart>
        </ResponsiveContainer>
        </Rnd>
      );
    }
    
    // ff0000

export default ChartsRe
