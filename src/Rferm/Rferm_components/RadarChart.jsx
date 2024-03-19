
import { useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { red } from '@mui/material/colors';
import { gray } from 'd3';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = ({ datasets }) => {
  const theme = useMantineTheme();
 
  console.log("data1234567",datasets);
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height:350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: '',
      },
      stroke: {
        width: 2,
      },
      fill: {

        opacity: 0.2,
      },
      markers: {
        size: 2,
        hover: {
          size: 10
      }
    },
      xaxis: {
        categories: [],
      
        
      },
   
      yaxis: {
        tickAmount: 6,
        show: true,
        labels: {
          style: {
            colors: "gray" // Adjust based on theme
          },           
        },
      },
        legend: {
          position: 'right',
          labels: {
            colors: [gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,],
          }
        },
       
      
    },
    
  });

  useEffect(() => {
    // Set up chart data when component mounts or datasets change
    if (datasets) {
      const categories = datasets[0].map(item => item.status);

      const seriesData = datasets.map((dataset, index) => ({
        name: `PITS PLANT ${index + 1}`,
        data: dataset.map(item => item.count),
        
      }));

      setChartData({
        series: seriesData,
        options: {
          ...chartData.options,
          xaxis: {
            ...chartData.options.xaxis,
            categories: categories,
          },
        },
      });
    }
  }, [datasets]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="radar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadarChart;

// import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
// import { Badge, Grid, Table } from "@mantine/core";
// import ReactApexChart from "react-apexcharts";

// const combineDatasets = (datasets) => {
//   const combinedCounts = {};

//   datasets.forEach((data, index) => {
//     data.forEach(({ status, count }) => {
//       if (!combinedCounts[status]) {
//         combinedCounts[status] = {};
//       }
//       combinedCounts[status][`count_pit_${index + 1}`] = count;
//     });
//   });

//   return Object.keys(combinedCounts).map((status) => ({
//     status,
//     ...combinedCounts[status],
//   }));
// };

// const RadarChart = ({ datasets }) => {
//   const [combinedData, setCombinedData] = useState([]);

//   useEffect(() => {
//     setCombinedData(combineDatasets(datasets));
//   }, [datasets]);

//   const series = datasets.map((_, index) => ({
//     name: `count_pit_${index + 1}`,
//     data: datasets[index].map(({ count }) => count),
//     fill: true,
//   }));

//   const options = {
//     chart: {
//       type: "radar",
//       toolbar: {
//         show: false,
//       },
//     },
//     xaxis: {
//       categories: combinedData.map(({ status }) => status),
//     },
//     yaxis: {
//       show: false,
//     },
//     markers: {
//       size: 0,
//     },
//     legend: {
//       show: true,
//       position: "top",
//     },
//   };

//   return (
//     <div>
     
//           <Table>
//             <tbody>
//               {combinedData.map((item, index) => (
//                 <tr key={index}>
//                   <td>
//                     <Badge />
//                   </td>
//                   <td>{item.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
       
//           <ReactApexChart options={options} series={series} type="radar" height={300} />
       
//     </div>
//   );
// };

// export default RadarChart;
