import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, Area } from 'recharts';

const RfermLinechartb0ne = () => {
  const [brushData, setBrushData] = useState([]);

  const handleBrushChange = (data) => {
    setBrushData(data);
  };

  const data = [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
    { name: 'Jul', value: 4300 },
    { name: 'Aug', value: 5900 },
    { name: 'Sep', value: 1400 },
    { name: 'Oct', value: 4000 },
    { name: 'Nov', value: 2400 },
    { name: 'Dec', value: 3000 },
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
    { name: 'Jul', value: 4300 },
    { name: 'Aug', value: 5900 },
    { name: 'Sep', value: 1400 },
    { name: 'Oct', value: 4000 },
    { name: 'Nov', value: 2400 },
    { name: 'Dec', value: 3000 },
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
    { name: 'Jul', value: 4300 },
    { name: 'Aug', value: 5900 },
    { name: 'Sep', value: 1400 },
    { name: 'Oct', value: 4000 },
    { name: 'Nov', value: 2400 },
    { name: 'Dec', value: 3000 },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="red" fill="url(#gradient)" />
        <Line type="monotone" dataKey="value" stroke="yellow" strokeWidth={2} />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="red"  />
            <stop offset="100%" stopColor="blue"  />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RfermLinechartb0ne;