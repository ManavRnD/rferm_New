


import { Card, useMantineTheme } from '@mantine/core';
import React, { useState } from 'react';
import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList, ReferenceLine } from 'recharts';

// const data = [
//   { name: 'Jan', value: 2 },
//   { name: 'Feb', value: 4 },
//   { name: 'Mar', value: 7 },
//   { name: 'Apr', value: 5 },
//   { name: 'May', value: 8 },
//   { name: 'Jun', value: 3 },
//   { name: 'Jul', value: 6 },
//   { name: 'Aug', value: 2 },
//   { name: 'Sep', value: 4 },
//   { name: 'Oct', value: 5 },
//   { name: 'Nov', value: 3 },
//   { name: 'Dec', value: 7 },
// ];

const Faultreadingchart = ({data}) => {
  const theme = useMantineTheme();
  console.log("dataiget",data)

  const colorMap = {
    normal: '#82ca9d',
    warning: '#ffc658',
    maxThreshold: '#ff5a5f',
  };
  
  const segregateData = (data) => {
    return data.map(item => {
      let threshold;
      if (item.value <= 2) {
        threshold = 'normal';
      } else if (item.value <= 4) {
        threshold = 'warning';
      } else {
        threshold = 'maxThreshold';
      }
      return { ...item, threshold };
    });
  };

  const segregatedData = segregateData(data);

  return (
    <Card shadow='200px'>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
        data={segregatedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <Tooltip />
          {Object.keys(colorMap).map((threshold, index) => (
          <Area
          type="monotone"
          dataKey="FaultResistance"
          key={threshold}
          stackId="1"
          stroke={colorMap[threshold]}
          fill={colorMap[threshold]}
          data={segregatedData.filter(item => item.threshold === threshold)}
          name={threshold}
        />
        ))}
          <Legend align="right" />
          <LabelList dataKey="value" position="top" /> 
          <defs>
           <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
             <stop offset="0%" stopColor="rgb(239,91,91)"  />
             <stop offset="100%" stopColor="rgb(286,219,255)"  />
           </linearGradient>
        </defs>
        <ReferenceLine y={8} strokeWidth={4} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="red" />
        <ReferenceLine y={5} strokeWidth={4} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#ffa500" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Faultreadingchart;
