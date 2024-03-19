import React from 'react';
import Chart from 'react-apexcharts';

const Apexareachart = () => {
  const datatable=[
   
    { Date: '04/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '04/01/2023 10:44:45', FaultResistance: '2.5'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '04/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '04/01/2023 10:44:45', FaultResistance: '2.5'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.5'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 4.44 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.5'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.6' , ThresholdLimit:'30', ResistanceTrend:'6'  },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 2.22 , TimeInterval: '05/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '06/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '06/01/2023 10:44:45', FaultResistance: '2.6'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '06/01/2023 10:44:45', FaultResistance: '2.2'  , ThresholdLimit:'30', ResistanceTrend:'6' },
    { Date: '05/01/2023' , MACAddress: 'MC:00:00:00:003', PitName:'Pit 03', PitID:'003', NormalReding: 1.80 , TimeInterval: '06/01/2023 10:44:45', FaultResistance: '2.6' , ThresholdLimit:'30', ResistanceTrend:'6'  },
  
  ];

  const series = [
    {
    name: 'Fault Resistance',
    data: datatable.map(entry => parseFloat(entry.NormalReding))
  },
  {
    name: 'Threshold Limit',
    data: datatable.map(entry => parseFloat(entry.ThresholdLimit))
  },
  {
    name: 'Resistance Trend ',
    data: datatable.map(entry => parseFloat(entry.ResistanceTrend))
  },



];
  const options = {
    chart: {
      id: 'zoomable-area'
    },
    xaxis: {
      categories: datatable.map(entry => entry.Date)
    },
    yaxis: {
      title: {
        text: 'Fault Resistance'
      }
    },
    selection: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    }
  };

  return (
    <Chart options={options} series={series} type="area" height={350} />
  );
};

export default Apexareachart;
