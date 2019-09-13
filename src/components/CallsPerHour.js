import React from 'react';
import {
   XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList

} from 'recharts';
import { Rnd } from 'react-rnd';
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

function CallsPerHour(props) {
    return (
      <Rnd   default={{
        x: 0,
        y: 0,
        width: 500,
        height: 250,
      }}
    >
        <ResponsiveContainer aspect={2.0} className = 'chart2' >
          <BarChart 
            width={490}
            height={500}
            // layout={'horizontal'}
            // layout={'vertical'}
            data={data}
            margin={{top: 15, right: 15, left: 15, bottom: 15,}}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" type="category"/>
            <YAxis type="number" />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="opened" fill="#ffff80" maxBarSize={15} >
            <LabelList dataKey="opened" position="inside" />
            </Bar>
            {/* <Bar dataKey="closed" fill="#82ca9d" /> */}
           
          </BarChart>
        </ResponsiveContainer>
        </Rnd>
      );
    }

export default CallsPerHour;
