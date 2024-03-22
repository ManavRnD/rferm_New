
// import { useMantineColorScheme, useMantineTheme } from '@mantine/core';
// import { red } from '@mui/material/colors';
// import { gray } from 'd3';
// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const RadarChart = ({ datasets }) => {
//   const theme = useMantineTheme();

//   console.log("data1234567",datasets);
//   const [chartData, setChartData] = useState({
//     series: [],
//     options: {
//       chart: {
//         height:350,
//         type: 'radar',
//         dropShadow: {
//           enabled: true,
//           blur: 1,
//           left: 1,
//           top: 1,
//         },
//       },
//       title: {
//         text: '',
//       },
//       stroke: {
//         width: 2,
//       },
//       fill: {

//         opacity: 0.2,
//       },
//       markers: {
//         size: 2,
//         hover: {
//           size: 10
//       }
//     },
//       xaxis: {
//         categories: [],



//       },

//       yaxis: {
//         tickAmount: 5,
//         show: true,
//         labels: {
//           style: {
//             colors: "gray" // Adjust based on theme
//           },           
//         },
//       },
//         legend: {
//           position: 'bottom',
//           labels: {
//             colors: [gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,gray,],
//           }
//         },


//     },

//   });

//   useEffect(() => {
//     // Set up chart data when component mounts or datasets change
//     if (datasets) {
//       const categories = datasets[0].map(item => item.status);

//       const seriesData = datasets.map((dataset, index) => ({
//         name: `PITS PLANT ${index + 1}`,
//         data: dataset.map(item => item.count),

//       }));

//       setChartData({
//         series: seriesData,
//         options: {
//           ...chartData.options,
//           xaxis: {
//             ...chartData.options.xaxis,
//             categories: categories,
//           },
//         },
//       });
//     }
//   }, [datasets]);

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="radar"
//           height={350}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default RadarChart;

// // import React, { useState, useEffect } from "react";
// // import Chart from "react-apexcharts";
// // import { Badge, Grid, Table } from "@mantine/core";
// // import ReactApexChart from "react-apexcharts";

// // const combineDatasets = (datasets) => {
// //   const combinedCounts = {};

// //   datasets.forEach((data, index) => {
// //     data.forEach(({ status, count }) => {
// //       if (!combinedCounts[status]) {
// //         combinedCounts[status] = {};
// //       }
// //       combinedCounts[status][`count_pit_${index + 1}`] = count;
// //     });
// //   });

// //   return Object.keys(combinedCounts).map((status) => ({
// //     status,
// //     ...combinedCounts[status],
// //   }));
// // };

// // const RadarChart = ({ datasets }) => {
// //   const [combinedData, setCombinedData] = useState([]);

// //   useEffect(() => {
// //     setCombinedData(combineDatasets(datasets));
// //   }, [datasets]);

// //   const series = datasets.map((_, index) => ({
// //     name: `count_pit_${index + 1}`,
// //     data: datasets[index].map(({ count }) => count),
// //     fill: true,
// //   }));

// //   const options = {
// //     chart: {
// //       type: "radar",
// //       toolbar: {
// //         show: false,
// //       },
// //     },
// //     xaxis: {
// //       categories: combinedData.map(({ status }) => status),
// //     },
// //     yaxis: {
// //       show: false,
// //     },
// //     markers: {
// //       size: 0,
// //     },
// //     legend: {
// //       show: true,
// //       position: "top",
// //     },
// //   };

// //   return (
// //     <div>

// //           <Table>
// //             <tbody>
// //               {combinedData.map((item, index) => (
// //                 <tr key={index}>
// //                   <td>
// //                     <Badge />
// //                   </td>
// //                   <td>{item.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </Table>

// //           <ReactApexChart options={options} series={series} type="radar" height={300} />

// //     </div>
// //   );
// // };

// // export default RadarChart;

// import { useMantineTheme } from '@mantine/core';
// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const RadarChart = ({ datasets }) => {
//   const theme = useMantineTheme();
//   const [chartData, setChartData] = useState({
//     series: [],
//     options: {
//       chart: {
//         height: 350,
//         type: 'radar',
//         dropShadow: {
//           enabled: true,
//           blur: 1,
//           left: 1,
//           top: 1,
//         },
//       },
//       title: {
//         text: '',
//       },
//       stroke: {
//         width: 2,
//       },
//       fill: {
//         opacity: 0.2,
//       },
//       markers: {
//         size: 2,
//         hover: {
//           size: 10
//         }
//       },
//       xaxis: {
//         categories: [],
//       },
//       yaxis: {
//         tickAmount: 6,
//         show: true,
//         labels: {
//           style: {
//             colors: "gray" // Adjust based on theme
//           },
//         },
//       },
//     },
//   });
//   const [legendData, setLegendData] = useState([]);

//   useEffect(() => {
//     if (datasets) {
//       const categories = datasets[0].map(item => item.status);
//       const seriesData = datasets.map((dataset, index) => ({
//         name: `PITS PLANT ${index + 1}`,
//         data: dataset.map(item => item.count),
//       }));

//       setChartData({
//         series: seriesData,
//         options: {
//           ...chartData.options,
//           xaxis: {
//             ...chartData.options.xaxis,
//             categories: categories,
//           },
//         },
//       });
//       setLegendData(seriesData);
//     }
//   }, [datasets]);

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="radar"
//           height={350}
//         />
//       </div>
//       <div id="legends">
//         <table>
//           <thead>
//             <tr>
//               <th>Legend</th>
//             </tr>
//           </thead>
//           <tbody>
//             {legendData.map((legend, index) => (
//               <tr key={index}>
//                 <td>{legend.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RadarChart;

// import { Table, useMantineTheme, Badge } from '@mantine/core';
// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { IconPentagram } from '@tabler/icons-react';

// const RadarChart = ({ datasets }) => {
//   const theme = useMantineTheme();
//   const [chartData, setChartData] = useState({
//     series: [],
//     options: {
//       chart: {
//         height: 350,
//         type: 'radar',
//         dropShadow: {
//           enabled: true,
//           blur: 1,
//           left: 1,
//           top: 1,
//         },
//         toolbar: {
//           show: false // Remove the toolbar
//         }
//       },
//       title: {
//         text: '',
//       },
//       stroke: {
//         width: 2,
//       },
//       fill: {
//         opacity: 0.2,
//       },
//       markers: {
//         size: 2,
//         hover: {
//           size: 10
//         }
//       },
//       xaxis: {
//         categories: [],
//       },
//       yaxis: {
//         show: true,
//         labels: {
//           style: {
//             colors: theme.colorScheme === 'dark' ? 'white' : 'gray',
//           },
//           formatter: (value) => Math.round(value), // Ensure y-axis labels display integers
//         },
//         max: 0, // Initial max value for y-axis
//         min: 0,
//         forceNiceScale: true, // Ensure integer values are displayed on the y-axis
//       },
//       legend: {
//         show: false
//       },
//     },
//   });
//   const [legendData, setLegendData] = useState([]);

//   useEffect(() => {
//     if (datasets) {
//       const categories = datasets[0].map(item => item.status);
//       const seriesData = datasets.map((dataset, index) => ({
//         name: `PLANT ${index + 1}`,
//         data: dataset.map(item => item.count),
//         color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Generate random color for each series
//       }));

//       const maxCount = Math.max(...datasets.flatMap(dataset => dataset.map(item => item.count))); // Calculate maximum count value
//       setChartData({
//         series: seriesData,
//         options: {
//           ...chartData.options,
//           xaxis: {
//             ...chartData.options.xaxis,
//             categories: categories,
//           },
//           yaxis: {
//             ...chartData.options.yaxis,
//             max: maxCount, // Set maximum value for y-axis
//           },
//         },
//       });
//       setLegendData(seriesData);
//     }
//   }, [datasets]);

//   const renderLegendRows = () => {
//     const rows = [];
//     for (let i = 0; i < legendData.length; i += 4) {
//       rows.push(
//         <tr key={i}>
//           {legendData.slice(i, i + 4).map((legend, index) => (
//             <td key={index} style={{ textAlign: "center" }}>
//               <IconPentagram stroke={6} size={12} color={legend.color} />  {legend.name}
//             </td>
//           ))}
//         </tr>
//       );
//     }
//     return rows;
//   };

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="radar"
//           height={350}
//         />
//       </div>
//       <div id="legends">
//         <Table>
//           <tbody>
//             {renderLegendRows()}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default RadarChart;

import { Table, useMantineTheme, Badge } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { IconPentagram } from '@tabler/icons-react';

const RadarChart = ({ datasets }) => {
  const theme = useMantineTheme();
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
        toolbar: {
          show: false // Remove the toolbar
        }
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
        show: true,
        labels: {
          style: {
            colors: theme.colorScheme === 'dark' ? 'white' : 'gray',
          },
          formatter: (value) => Math.round(value), // Ensure y-axis labels display integers
        },
        max: 0, // Initial max value for y-axis
        min: 0,
        forceNiceScale: true, // Ensure integer values are displayed on the y-axis
      },
      legend: {
        show: false
      },
    },
  });
  const [legendData, setLegendData] = useState([]);

  useEffect(() => {
    if (datasets) {
      const categories = datasets[0].map(item => item.status);
      const seriesData = datasets.map((dataset, index) => ({
        name: `PLANT ${index + 1}`,
        data: dataset.map(item => item.count),
        color: getDefaultColor(index), // Use default color for each series
      }));

      const maxCount = Math.max(...datasets.flatMap(dataset => dataset.map(item => item.count))); // Calculate maximum count value
      setChartData({
        series: seriesData,
        options: {
          ...chartData.options,
          xaxis: {
            ...chartData.options.xaxis,
            categories: categories,
          },
          yaxis: {
            ...chartData.options.yaxis,
            max: maxCount, // Set maximum value for y-axis
          },
        },
      });
      setLegendData(seriesData);
    }
  }, [datasets]);

  // Function to get default colors
  const getDefaultColor = (index) => {
    const defaultColors = [
      '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0',
      '#3F51B5', '#03A9F4', '#4CAF50', '#F9CE1D', '#FF9800'
    ];
    return defaultColors[index % defaultColors.length];
  };

  const renderLegendRows = () => {
    const rows = [];
    for (let i = 0; i < legendData.length; i += 4) {
      rows.push(
        <tr key={i}>
          {legendData.slice(i, i + 4).map((legend, index) => (
            <td key={index} style={{ textAlign: "center" }}>
              <IconPentagram stroke={6} size={12} color={legend.color} />  {legend.name}
            </td>
          ))}
        </tr>
      );
    }
    return rows;
  };

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
      <div id="legends">
        <Table>
          <tbody>
            {renderLegendRows()}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RadarChart;

