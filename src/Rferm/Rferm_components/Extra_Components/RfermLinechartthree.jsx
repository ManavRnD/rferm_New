
import { Card, useMantineTheme } from '@mantine/core';
import React, { useState } from 'react';
import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList, ReferenceLine } from 'recharts';

const RfermLinechartthree = ({ chartData1 }) => {
  const theme = useMantineTheme();




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
          <Area type="monotone" dataKey="ThresholdLimit" stroke="#ffa500" fill="green" />
          <Area type="monotone" dataKey="ResistanceTrend" stroke="green" />
          <Area type="monotone" dataKey="MaxThresholdLimit" stroke="red"  />
          <Legend  align="right" />
          <LabelList dataKey="value" position="top" /> {/* this line to display labels */}
         
            {/* I applye area color here using lineargradint*/}
       
          <ReferenceLine y={8} strokeWidth={4} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="red" />
         <ReferenceLine y={5} strokeWidth={4} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#ffa500" />
            
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RfermLinechartthree;



// // const data = [
// //   { date: "01/02/2023", value1: 1, },
// //   { date: "01/03/2023", value: 5 },
// //   { date: "01/04/2023", value1: 3,  },
// //   { date: "01/05/2023",  value: 7 },
// //   { date: "01/06/2023", value2: 6, },
// //   { date: "01/07/2023", value1: 6,},
// //   { date: "01/08/2023",  value: 10 },
// //   { date: "01/09/2023",  value2: 9,  },
// //   { date: "01/10/2023", value1: 9, },
// //   { date: "01/11/2023", value: 13 }
// // ];

// import React from 'react';
// import { Card, useMantineTheme } from '@mantine/core';
// import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, Legend, LabelList } from 'recharts';

// const Faultreadingchart = ({data}) => {
//   const theme = useMantineTheme();
 

  


// // Separate arrays for each value type with date
// const valuesWithDate = data.map(data => {
//   const obj = {};
//   obj.date = data.date;
//   if (data.hasOwnProperty('NormalReding')) obj.NormalReding = data.NormalReding;
//   if (data.hasOwnProperty('ThresholdLimit')) obj.ThresholdLimit = data.ThresholdLimit;
//   if (data.hasOwnProperty('FaultResistance')) obj.FaultResistance = data.FaultResistance;
//   return obj;
// });

// console.log("data1234567", valuesWithDate);





//   // const colorMap = {
//   //   normal: '#82ca9d',
//   //   warning: '#ffc658',
//   //   maxThreshold: '#ff5a5f',
//   // };
  
//   // const segregateData = (data) => {
//   //   return data.map(item => {
//   //     let threshold;
//   //     let value;
//   //     if (item.value1 !== undefined) {
//   //       value = item.value1;
//   //     } else if (item.value2 !== undefined) {
//   //       value = item.value2;
//   //     } else {
//   //       value = item.value;
//   //     }

//   //     if (value <= 3) {
//   //       threshold = 'normal';
//   //     } else if (value <= 6) {
//   //       threshold = 'warning';
//   //     } else {
//   //       threshold = 'maxThreshold';
//   //     }

//   //     return { name: item.date, value, threshold };
//   //   });
//   // };

//   // const segregatedData = segregateData(data);
//   // console.log("segregate",segregatedData)

//   return (
//     <Card shadow='200px'>
//       <ResponsiveContainer width="100%" height={400}>
//         <AreaChart
//           data={valuesWithDate}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <Tooltip />
//           <Area type="monotone" dataKey="NormalReding" stroke="red" fill="red" />
//           <Area type="monotone" dataKey="ThresholdLimit" stroke="green" fill="url(#gradient)" />
//           <Area type="monotone" dataKey="FaultResistance" stroke="pink" fill="url(#gradient)" />
       
          
//           <Legend align="right" />
//           <LabelList dataKey="value" position="top" /> 
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
//               <stop offset="0%" stopColor="rgb(239,91,91)"  />
//               <stop offset="100%" stopColor="rgb(286,219,255)"  />
//             </linearGradient>
//           </defs>
//         </AreaChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// export default Faultreadingchart;



// import { Card, useMantineTheme } from '@mantine/core';
// import React, { useState } from 'react';
// import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList } from 'recharts';

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
//           <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <Tooltip />
//           <Area type="monotone" dataKey="FaultResistance" stroke="red" fill="url(#gradient)" />
//           <Legend align="right" />
//           <LabelList dataKey="value" position="top" /> 
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






// import { Card, useMantineTheme } from '@mantine/core';
// import React, { useState } from 'react';
// import { Legend, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, LabelList, ReferenceLine } from 'recharts';

// // const data = [
// //   { name: 'Jan', value: 2 },
// //   { name: 'Feb', value: 4 },
// //   { name: 'Mar', value: 7 },
// //   { name: 'Apr', value: 5 },
// //   { name: 'May', value: 8 },
// //   { name: 'Jun', value: 3 },
// //   { name: 'Jul', value: 6 },
// //   { name: 'Aug', value: 2 },
// //   { name: 'Sep', value: 4 },
// //   { name: 'Oct', value: 5 },
// //   { name: 'Nov', value: 3 },
// //   { name: 'Dec', value: 7 },
// // ];

// const Faultreadingchart = ({data}) => {
//   const theme = useMantineTheme();
//   console.log("dataiget",data)

//   const colorMap = {
//     normal: '#82ca9d',
//     warning: '#ffc658',
//     maxThreshold: '#ff5a5f',
//   };
  
//   const segregateData = (data) => {
//     return data.map(item => {
//       let threshold;
//       if (item.value <= 2) {
//         threshold = 'normal';
//       } else if (item.value <= 4) {
//         threshold = 'warning';
//       } else {
//         threshold = 'maxThreshold';
//       }
//       return { ...item, threshold };
//     });
//   };

//   const segregatedData = segregateData(data);

//   return (
//     <Card shadow='200px'>
//       <ResponsiveContainer width="100%" height={400}>
//         <AreaChart
//         data={segregatedData}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <XAxis dataKey="name" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <YAxis tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <CartesianGrid strokeDasharray="3 3" tick={{ fill: theme.colorScheme === 'dark' ? '#fff' : '#333' }} />
//           <Tooltip />
//           {Object.keys(colorMap).map((threshold, index) => (
//           <Area
//           type="monotone"
//           dataKey="FaultResistance"
//           key={threshold}
//           stackId="1"
//           stroke={colorMap[threshold]}
//           fill={colorMap[threshold]}
//           data={segregatedData.filter(item => item.threshold === threshold)}
//           name={threshold}
//         />
//         ))}
//           <Legend align="right" />
//           <LabelList dataKey="value" position="top" /> 
//           <defs>
//            <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
//              <stop offset="0%" stopColor="rgb(239,91,91)"  />
//              <stop offset="100%" stopColor="rgb(286,219,255)"  />
//            </linearGradient>
//         </defs>
//         <ReferenceLine y={8} strokeWidth={4} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="red" />
//         <ReferenceLine y={5} strokeWidth={4} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#ffa500" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// export default Faultreadingchart;