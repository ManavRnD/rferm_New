
import { Card, useMantineTheme, Table, Text } from '@mantine/core';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { IconActivityHeartbeat } from '@tabler/icons-react';

const RfermLinechartb = ({ chartData1 }) => {
  const theme = useMantineTheme();

  return (
    <>
    <ResponsiveContainer width="100%" height={400} style={{padding:"10px"}}>
      <AreaChart
        data={chartData1}
        margin={{ top: 0, right: 0, left: 0, bottom: 20 }} // Adjust the margin values
      >
        <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }}
          label={{
            value: `Days(MM/DD/YYYY)`,
            style: { textAnchor: 'middle', },
            angle: 0,
            position: 'bottom',
            offset: 0,
          }} />

        <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }}
          label={{
            value: `Resistance( Ω )`,
            style: { textAnchor: 'middle' },
            angle: -90,
            position: 'insideLeft', // Position the label inside the left side of the Y-Axis
            offset: 20, // Add padding between the Y-Axis and its label
          }} />
        <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
        <Tooltip />
        <defs>
          <linearGradient id="gradientThresholdLimit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="5%" stopColor="#1a7ee3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1a7ee3" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4, strokeDasharray: '' }} type="monotone" dataKey="ThresholdLimit" stroke="#d14d14" fill="url(#gradientThresholdLimit)" />
        <Area dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4, strokeDasharray: '' }} type="monotone" dataKey="ResistanceTrend" stroke="BLUE" fill="url(#gradientThresholdLimit)" />
        <Area dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4, strokeDasharray: '' }} type="monotone" dataKey="MaxThresholdLimit" stroke="#c51d31" fill="url(#gradientThresholdLimit)" />
        <ReferenceLine y={8} strokeWidth={2} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="#c51d31" />
        <ReferenceLine y={5} strokeWidth={2} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#d14d14" />
      </AreaChart>
    </ResponsiveContainer>
    <div>
      <Card style={{width:"700px", display:"flex", marginLeft:"70px"}}>
     <Table>
     <thead>
       <tr style={{ marginBottom: '10px' }}>
         <th><div  style={{  marginRight: '1px' }} ><IconActivityHeartbeat stroke={2} size={30} color='#c51d31'/></div></th>
         <th>Threshold Limit</th>
         <th><div><IconActivityHeartbeat stroke={2} size={30} color="BLUE"/></div></th>
         <th>Resistance Trend</th>
         <th><div><IconActivityHeartbeat stroke={2} size={30} color="#d14d14" /></div></th>
         <th>Max Threshold Limit</th>
       </tr>
     </thead>
   </Table>
   </Card>
   </div>
   </>
  );
};

export default RfermLinechartb;
