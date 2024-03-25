
// import { Card, useMantineTheme } from '@mantine/core';
// import React, { useState } from 'react';
// import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList } from 'recharts';
// import { IconActivityHeartbeat } from '@tabler/icons-react';
// const Faultreadingchart = ({ data }) => {
//   const theme = useMantineTheme();


// // Extract available keys from chartData
// const availableKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== 'name') : [];


//   return (
//     <Card shadow='200px'>
//       <ResponsiveContainer width="100%" height={400}>
//         <AreaChart
//           data={data}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }}
//             label={{
//               value: `Days(MM/DD/YYYY)`,
//               style: { textAnchor: 'middle'},
//               angle: 0,
//               position: 'bottom',
//               offset: 0,
//             }}/> 
//           <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} 
//            label={{
//             value: `Fault Resistance( Ω )`,
//             style: { textAnchor: 'middle' },
//             angle: -90,
//             position: 'left',
//             offset:0 ,
//           }} />
//           <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <Tooltip />
//           <Area  dot={{ stroke: 'red', strokeWidth: 2, r: 2,strokeDasharray:''}}  type="monotone" dataKey="FaultResistance" stroke="red" fill="url(#gradient)" />
//           <Legend align="right"  />
//           <LabelList dataKey="value" position="bottom" /> 
//           <defs>
//            <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
//              <stop offset="0%" stopColor="rgb(239,91,91)"  />
//              <stop offset="100%" stopColor="rgb(286,219,255)"  />
//            </linearGradient>
//         </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// export default Faultreadingchart;



import { Card, useMantineTheme, Table, Text } from '@mantine/core';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { IconActivityHeartbeat } from '@tabler/icons-react';

const RfermLinechartb = ({ data }) => {
  const theme = useMantineTheme();

  return (
    <>
    <ResponsiveContainer width="100%" height={400} style={{padding:"10px"}}>
      <AreaChart
        data={data}
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
            value: `Fault Resistance( Ω )`,
            style: { textAnchor: 'middle' },
            angle: -90,
            position: 'insideLeft', // Position the label inside the left side of the Y-Axis
            offset: 20, // Add padding between the Y-Axis and its label
          }} />
        <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
        <Tooltip />
        <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
//              <stop offset="0%" stopColor="rgb(239,91,91)"  />
//              <stop offset="100%" stopColor="rgb(286,219,255)"  />
//            </linearGradient>
        </defs>
        <Area  dot={{ stroke: 'red', strokeWidth: 2, r: 2,strokeDasharray:''}}  type="monotone" dataKey="FaultResistance" stroke="red" fill="url(#gradient)" />
      </AreaChart>
    </ResponsiveContainer>
    <div>
      <Card style={{width:"200px", display:"flex", marginLeft:"70px"}}>
     <Table>
     <thead>
       <tr style={{ marginBottom: '10px' }}>
         <th><div  style={{  marginRight: '1px' }} ><IconActivityHeartbeat stroke={2} size={30} color='#c51d31'/></div></th>
         <th>FaultResistance</th>
       </tr>
     </thead>
   </Table>
   </Card>
   </div>
   </>
  );
};

export default RfermLinechartb;
