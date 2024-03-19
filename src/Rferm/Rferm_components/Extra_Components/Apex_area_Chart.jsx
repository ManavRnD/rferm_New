import React from "react";
import Chart from "react-apexcharts";

import { gray } from "d3";

const Apex_area_Chart = ({ data }) => {
  console.log("data for chart", data);
 

  const options = {
    legend: {
      show: true,
      labels: {
        colors: "yellow",
      },
    },
    markers: {
      size: 2,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    chart: {
      toolbar: {
        show: true,

        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "date",
      labels: {
        style: {
          colors: "gray",
        },
      },
      title: {
        text: "Date",
        style: {
          color: "gray",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "gray",
        },
      },
      title: {
        text: "Value",
        style: {
          color:"gray",
        },
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: data.map(({ Date, value }) => ({ x: Date, y: value })),
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default Apex_area_Chart;