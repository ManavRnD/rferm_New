
import { Card, useMantineTheme } from '@mantine/core';
import React, { useState } from 'react';
import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList, ReferenceLine } from 'recharts';

const RfermLinechartbtwo = ({ chartData1 }) => {
  const theme = useMantineTheme();


// Extract available keys from chartData
const availableKeys = chartData1.length > 0 ? Object.keys(chartData1[0]).filter(key => key !== 'name') : [];

  return (
    <Card shadow='200px'>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={chartData1}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
          <Tooltip />
          {/* Dynamically generate Area components based on available keys */}
          {availableKeys.map((key, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey={key}
              stroke={index === 0 ? "#e071e4" : index === 1 ? "green" : "blue"} // Example colors, you can customize this
              fill={`url(#gradient${index})`}
            />
          ))}
          <Legend  align="right" />
          <LabelList dataKey="value" position="top" /> {/* this line to display labels */}
         {/* Define gradients */}

         {availableKeys.map((key, index) => (
            <defs key={index}>
               
            
            <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={index === 0 ? "rgb(224,113,228)" : index === 1 ? "rgb(66,255,128)" : "rgb(94,133,247)"} />
                <stop offset="100%" stopColor={index === 0 ? "rgb(286,219,255)" : index === 1 ? "rgb(186,173,255)" : "rgb(242,242,242)"} />
        </linearGradient>

          </defs>
           ))}
           {/* Add ReferenceLine */}
           
              <ReferenceLine y={8} strokeWidth={4} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="red" />
              <ReferenceLine y={5} strokeWidth={4} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#ffa500" />
        </AreaChart>

      
      </ResponsiveContainer>
    </Card>
  );
};

export default RfermLinechartbtwo;
