import React from 'react';
import {
   XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer, BarChart, Bar, LabelList

} from 'recharts';

import { Rnd } from 'react-rnd';

const data = [
  {
    name: '2019-08-28', opened: 115, closed: 77, amt: 2100,
  },
  {
    name: '2019-08-29', opened: 126, closed: 116, amt: 2100,
  },
  {
    name: '2019-08-30', opened: 134, closed: 116, amt: 2100,
  },
  {
    name: '2019-08-31', opened: 3, closed: 1, amt: 2100,
  },
  {
    name: '2019-09-01', opened: 1, closed: 3, amt: 2400,
  },
  {
    name: '2019-09-02', opened: 200, closed: 174, amt: 2210,
  },
  {
    name: '2019-09-03', opened: 162, closed: 172, amt: 2290,
  },
  {
    name: '2019-09-04', opened: 158, closed: 138, amt: 2000,
  },
  {
    name: '2019-09-05', opened: 171, closed: 184, amt: 2181,
  },
  {
    name: '2019-09-06', opened: 111, closed: 104, amt: 2500,
  },
  {
    name: '2019-09-07', opened: 4, closed: 2, amt: 2100,
  },
  {
    name: '2019-09-08', opened: 7, closed: 4, amt: 2100,
  },
  {
    name: '2019-09-09', opened: 193, closed: 195, amt: 2100,
  },
  {
    name: '2019-09-10', opened: 144, closed: 143, amt: 2100,
  },
  {
    name: '2019-09-11', opened: 138, closed: 138, amt: 2100,
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
            width={495}
            height={500}
            layout={'horizontal'}
            // layout={'vertical'}
            data={data}
            margin={{top: 15, right: 15, left: 5, bottom: 15,}}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" type="category" />
            <YAxis  type="number"/>
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="opened" fill="#8884d8" layout={'vertical'} barsize="1">
            {/* <LabelList dataKey="opened" position="inside" angle="90" /> */}
            </Bar>
            <Bar dataKey="closed" fill="#79ff4d" layout={'vertical'}>
            {/* <LabelList dataKey="closed" position="inside" angle="90"  /> */}
            </Bar>
           
          </BarChart>
        </ResponsiveContainer>
      </Rnd>
      );
    }

export default Charts




//   Rnd
// </Rnd>