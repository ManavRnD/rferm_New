



import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";

const data = [
  {
    date: "01/01/2024", NormalReding: 0,
    
    
  },
  {
    name: "01/02/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "01/03/2024",
  
    FaultResistance: 2500,
    ThresholdLimit: 2500
  },
  {
    name: "01/04/2024",
    ThresholdLimit: 3500,
    ThresholdLimit: 3500,
    
  },
  {
    name: "01/05/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "01/06/2024",
    
    FaultResistance: 1000,
    NormalReding: 1500
  },
  {
    name: "01/07/2024",
    NormalReding: 850,
    NormalReding: 850,
    
  },
  {
    name: "01/08/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "01/09/2024", NormalReding: 0,
    
    
  },
  {
    name: "01/10/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "01/11/2024",
  
    FaultResistance: 2500,
    ThresholdLimit: 2500
  },
  {
    name: "01/12/2024",
    ThresholdLimit: 3500,
    ThresholdLimit: 3500,
    
  },
  {
    name: "01/13/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "01/14/2024",
    
    FaultResistance: 1500,
    NormalReding: 1500
  },
  {
    name: "01/15/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "01/16/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "01/17/2024", NormalReding: 0,
    
    
  },
  {
    name: "01/18/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "01/19/2024",
  
    FaultResistance: 2500,
    ThresholdLimit: 2500
  },
  {
    name: "01/20/2024",
    ThresholdLimit: 3800,
    ThresholdLimit: 3800,
    
  },
  {
    name: "01/21/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "01/22/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "01/23/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "01/24/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "01/25/2024", NormalReding: 0,
    
    
  },
  {
    name: "01/26/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "01/27/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "01/28/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "01/29/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "01/30/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "01/31/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "02/01/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "02/02/2024", NormalReding: 0,
    
    
  },
  {
    name: "02/03/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "02/04/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "02/05/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "02/06/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "02/07/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "02/08/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "02/09/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "02/10/2024", NormalReding: 0,
    
    
  },
  {
    name: "02/11/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "02/12/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "02/13/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "02/14/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "02/15/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "02/16/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "02/17/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "02/18/2024", NormalReding: 0,
    
    
  },
  {
    name: "02/19/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "02/20/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "02/21/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "02/22/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "02/23/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "02/24/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "02/25/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "02/26/2024", NormalReding: 0,
    
    
  },
  {
    name: "02/27/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "02/28/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "02/29/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "03/01/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "03/02/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "03/03/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "03/04/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "02/05/2024", NormalReding: 0,
    
    
  },
  {
    name: "02/06/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "02/07/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "02/08/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "03/09/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "03/10/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "03/11/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "03/12/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "03/13/2024", NormalReding: 0,
    
    
  },
  {
    name: "03/14/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "03/15/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "03/16/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "03/17/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "03/18/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "03/19/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "03/20/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "03/21/2024", NormalReding: 0,
    
    
  },
  {
    name: "03/22/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "03/23/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "03/24/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "03/25/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "03/26/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "03/27/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "03/28/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "03/29/2024", NormalReding: 0,
    
    
  },
  {
    name: "03/30/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "03/31/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "04/01/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "04/02/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "04/03/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "04/04/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "04/05/2024",
    NormalReding: 300,
   
    
  },
  {
    date: "04/06/2024", NormalReding: 0,
    
    
  },
  {
    name: "04/07/2024", NormalReding: 1000, FaultResistance: 1000, },
  {
    name: "04/08/2024",
  
    FaultResistance: 2000,
    ThresholdLimit: 2000
  },
  {
    name: "04/09/2024",
    ThresholdLimit: 3000,
    ThresholdLimit: 3000,
    
  },
  {
    name: "04/10/2024",

    ThresholdLimit: 2000, 
    FaultResistance: 2000,
    
  },
  {
    name: "04/11/2024",
    
    FaultResistance: 1000,
    NormalReding: 1000
  },
  {
    name: "04/12/2024",
    NormalReding: 800,
    NormalReding: 800,
    
  },
  {
    name: "04/13/2024",
    NormalReding: 300,
   
    
  },
  
];

export default function App() {
  return (
    <div>
      <AreaChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area dot={{ stroke: '#424242', strokeWidth: 1.5, r: 4,strokeDasharray:''}} type="monotone" dataKey="NormalReding" stroke="#424242" fill="url(#gradientThresholdLimit)" /> 
        <Area dot={{ stroke: '#424242', strokeWidth: 1.5, r: 4,strokeDasharray:''}}  type="monotone" dataKey="FaultResistance" stroke="#424242" fill="#ffa500"/> {/*"url(#gradient1)"*/}
        <Area dot={{ stroke: '#424242', strokeWidth: 1.5, r: 4,strokeDasharray:''}} type="monotone" dataKey="ThresholdLimit" stroke="#424242" fill="url(#gradient2)" /> 
        
        <ReferenceLine y={2000} strokeWidth={4} label={{ position: 'bottom', value: 'MaxTheresholdLimit' }} stroke="red" />
        <ReferenceLine y={1000} strokeWidth={4} label={{ position: 'bottom', value: 'TheresholdLimit' }} stroke="#ffa500" />
       
        
      </AreaChart>
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >

              
        <defs>
            {/* Define gradient for ThresholdLimit */}
            <linearGradient id="gradientThresholdLimit" x1="0" y1="0" x2="10" y2="0">
              <stop offset="0%" stopColor="#1a7ee3" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#1a7ee3" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="gradient1" x1="1" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#ffa500" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffa500" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="gradient2" x1="1" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff0000" stopOpacity={0} />
            </linearGradient>
           
          </defs>

          
          
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          connectNulls
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
        /> */}
      </AreaChart>
    </div>
  );
}




