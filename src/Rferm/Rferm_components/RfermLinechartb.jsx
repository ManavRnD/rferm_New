// import { Card, useMantineTheme } from '@mantine/core';
// import React from 'react';
// import { Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, ReferenceLine } from 'recharts';

// const RfermLinechartb = ({ chartData1 }) => {
//   const theme = useMantineTheme();

//   return (
//     <Card shadow='200px' >
//       <ResponsiveContainer width="100%" height={400}>
//         <AreaChart
//           data={chartData1}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} 
//              label={{
//               value: `Days(DD/MM/YYYY)`,
//               style: { textAnchor: 'middle' },
//               angle: 0,
//               position: 'center',
//               offset: 0,
//             }}/>
//           <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }}
//            label={{
//             value: `Resistance( Ω )`,
//             style: { textAnchor: 'middle' },
//             angle: -90,
//             position: 'left',
//             offset: 0,
//           }} />
//           <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <Tooltip />
//           {/* Define gradients */}
//           <defs>
//             {/* Define gradient for ThresholdLimit */}
//             <linearGradient id="gradientThresholdLimit" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="5%" stopColor="#1a7ee3" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#1a7ee3" stopOpacity={0} />
//             </linearGradient>
           
//           </defs>
//           {/* Render areas with gradients */}
//           <Area dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4,strokeDasharray:''}} type="monotone" dataKey="ThresholdLimit" stroke="#d14d14" fill="url(#gradientThresholdLimit)" />
//           <Area  dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4,strokeDasharray:''}} type="monotone" dataKey="ResistanceTrend" stroke="BLUE"/>
//           <Area  dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4,strokeDasharray:''}} type="monotone" dataKey="MaxThresholdLimit" stroke="#c51d31"  />
//           <Legend align="center" />
//           <LabelList dataKey="value"
//            position="top" /> {/* this line to display labels */}
//           {/* Add ReferenceLine */}
//           <ReferenceLine y={8} strokeWidth={2} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="#c51d31" />
//           <ReferenceLine y={5} strokeWidth={2} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#d14d14" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// export default RfermLinechartb;


import { Card, useMantineTheme } from '@mantine/core';
import React from 'react';
import { Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, ReferenceLine } from 'recharts';

const RfermLinechartb = ({ chartData1 }) => {
  const theme = useMantineTheme();

  return (
    <Card shadow='200px' >
     
        <ResponsiveContainer width="100%" height={400} style={{marginBottom:"10px"}} >
          <AreaChart
            data={chartData1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name"  tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} 
               label={{
                value: `Days(MM/DD/YYYY)`,
                style: { textAnchor: 'middle'},
                angle: 0,
                position: 'bottom',
                offset: 0,
              }}/>
             
            <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }}
             label={{
              value: `Resistance( Ω )`,
              style: { textAnchor: 'middle' },
              angle: -90,
              position: 'left',
              offset:0 ,
            }} />
            <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
            <Tooltip />
            {/* Define gradients */}
            <defs>
              {/* Define gradient for ThresholdLimit */}
              <linearGradient id="gradientThresholdLimit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="5%" stopColor="#1a7ee3" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1a7ee3" stopOpacity={0} />
              </linearGradient>
             
            </defs>
            
            {/* Render areas with gradients */}
            <Area dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4,strokeDasharray:''}} type="monotone" dataKey="ThresholdLimit" stroke="#d14d14" fill="url(#gradientThresholdLimit)" />
            <Area  dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4,strokeDasharray:''}} type="monotone" dataKey="ResistanceTrend" stroke="BLUE"  fill="url(#gradientThresholdLimit)"/>
            <Area  dot={{ stroke: 'url(#gradientThresholdLimit)', strokeWidth: 2, r: 4,strokeDasharray:''}} type="monotone" dataKey="MaxThresholdLimit" stroke="#c51d31"  fill="url(#gradientThresholdLimit)" />
            <Legend align="right" />
            <LabelList dataKey="value" 
             /> {/* this line to display labels */}
            {/* Add ReferenceLine */}
            <ReferenceLine y={8} strokeWidth={2} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="#c51d31" />
            <ReferenceLine y={5} strokeWidth={2} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#d14d14" />
          </AreaChart>
        </ResponsiveContainer>
     
    </Card>
  );
};

export default RfermLinechartb;

