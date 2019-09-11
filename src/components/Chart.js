import React from 'react';
import {
   XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer, BarChart, Bar,

} from 'recharts';

import { Rnd } from 'react-rnd';

const data = [
  {
    name: 'Paul', opened: 4000, closed: 2400, amt: 2400,
  },
  {
    name: 'John', opened: 3000, closed: 1398, amt: 2210,
  },
  {
    name: 'Chris', opened: 2000, closed: 9800, amt: 2290,
  },
  {
    name: 'Alex', opened: 2780, closed: 3908, amt: 2000,
  },
  {
    name: 'Dhina', opened: 1890, closed: 4800, amt: 2181,
  },
  {
    name: 'Paige', opened: 2390, closed: 3800, amt: 2500,
  },
  {
    name: 'Les', opened: 3490, closed: 4300, amt: 2100,
  },
];

function Charts(props) {
    return (
      <Rnd   default={{
        x: 0,
        y: 0,
        width: 500,
        height: 250,
      }}
    >
        <ResponsiveContainer aspect={2.0} className = 'chart1' >
          <BarChart 
            width={500}
            height={500}
            layout={'horizontal'}
            // layout={'vertical'}
            data={data}
            margin={{top: 5, right: 5, left: 5, bottom: 5,}}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" type="category" />
            <YAxis  type="number"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="opened" fill="#8884d8" layout={'vertical'}/>
            <Bar dataKey="closed" fill="#82ca9d" layout={'vertical'}/>
           
          </BarChart>
        </ResponsiveContainer>
      </Rnd>
      );
    }

export default Charts




//   Rnd
// </Rnd>