
import { Card, useMantineTheme } from '@mantine/core';
import React, { useState } from 'react';
import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList } from 'recharts';

const Faultreadingchart = ({ data }) => {
  const theme = useMantineTheme();


// Extract available keys from chartData
const availableKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== 'name') : [];


  return (
    <Card shadow='200px'>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }}
            label={{
              value: `Days(MM/DD/YYYY)`,
              style: { textAnchor: 'middle'},
              angle: 0,
              position: 'bottom',
              offset: 0,
            }}/> 
          <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} 
           label={{
            value: `Fault Resistance( Ω )`,
            style: { textAnchor: 'middle' },
            angle: -90,
            position: 'left',
            offset:0 ,
          }} />
          <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <Tooltip />
          <Area  dot={{ stroke: 'red', strokeWidth: 2, r: 2,strokeDasharray:''}}  type="monotone" dataKey="FaultResistance" stroke="red" fill="url(#gradient)" />
          <Legend align="right"  />
          <LabelList dataKey="value" position="bottom" /> 
          <defs>
           <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
             <stop offset="0%" stopColor="rgb(239,91,91)"  />
             <stop offset="100%" stopColor="rgb(286,219,255)"  />
           </linearGradient>
        </defs>
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Faultreadingchart;



