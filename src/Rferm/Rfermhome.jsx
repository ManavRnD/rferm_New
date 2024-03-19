// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Paper,
//   Card,
//   useMantineTheme,
//   Grid,
//   Group,
//   Center,
//   Button,
//   Text,
//   Divider,
//   Flex,
// } from "@mantine/core";

// import { Link, useNavigate } from "react-router-dom";


// import { Divide } from "tabler-icons-react";


// import Battery_status from "../components/Battery_status"
// import Progress_bar from "../components/Progress_bar";
// import useWebsocket from "../components/useWebsocket";
// import Lmap from "../components/Lmap";
// import Summary_timeline from "../maintenance/Summary_timeline";
// import Circular_progress from "../maintenance/Circular_progress";
// //Rfarm live status import heare
// import Live_status from "./Rferm_components/Live_status";
// import Responseive_pie from "../maintenance/Responseive_pie";
// import Ccc from "./Rferm_components/Ccc";
// import Scc from "./Rferm_components/Scc";
// import Pcc from "./Rferm_components/Pcc";

// import { gray } from "d3";
// import Sample from "./Sample";



// function Rfermhome() {
//   const theme = useMantineTheme();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("admin");

//   const blockedStyle = {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     filter: "blur(8px)",
//     borderRadius: "10px",
//   };

  
//   const { data, chartData } = useWebsocket(email);

//   const transformedData = chartData
//     .map((row) => ({
//       x: row[4],
//       y: Number(row[13]),
//     }))
//     .reverse();

//   const diaDataElectroStatic = chartData
//     .map((row) => ({
//       x: row[4],
//       y: row[5],
//     }))
//     .reverse();

//   const diaDataSpark = chartData
//     .map((row) => ({
//       x: row[4],
//       y: row[6],
//     }))
//     .reverse();

//   const diaDataEnvironment = chartData
//     .map((row) => ({
//       x: row[4],
//       y: row[7],
//     }))
//     .reverse();

//   const transformerData = data.map((row) => ({
//     x: row[4],
//     y: Number(row[13]),
//   }));

//   const mapData = chartData.map((row) => ({
//     x: Number(row[2]),
//     y: Number(row[3]),
//     z: Number(row[13]),
//   }));

//   const staticData = data.map((row) => ({
//     x: row[4],
//     y: row[5],
//   }));
//   const sparkData = data.map((row) => ({
//     x: row[4],
//     y: row[6],
//   }));
//   const envData = data.map((row) => ({
//     x: row[4],
//     y: row[7],
//   }));
//   const temp = data.map((row) => ({
//     x: row[4],
//     y: Number(row[14]),
//   }));
//   const pressure = data.map((row) => ({
//     x: row[4],
//     y: Number(row[15]),
//   }));
//   const humidity = data.map((row) => ({
//     x: row[4],
//     y: Number(row[16]),
//   }));
//   const calenderData = data.map((row) => ({
//     x: row[4],
//     y: Number(row[13]),
//   }));

//   const handleClick = () => {
//     navigate("/maintenance/Summary");
//   };

//   const handleOverClick = () => {
//     navigate("/Rferm/Sample");
//   };


//   const pitsValue = [
//     { id: "Total PIT'S", label: "Total PIT'S", value: 100 },
//     { id: "Safe PIT'S", label: "Safe PIT'S", value: 100 },
//     { id: "Worning PIT'S", label: "Worning PIT'S", value: 100 },
//     { id: "Unsafe PIT's", label: "Unsafe PIT's", value: 100 },
//   ];

//   const batteryValue = [
   
//     { id: "FULL Battery", label: "Safe PIT'S", value: 300 },
//     { id: "Worning Battery", label: "Worning PIT'S", value: 50 },
//     { id: "Low Battery", label: "Low Battery", value: 50},
//   ];


//   return (
//     <>
      
//            {/* This is Common section for all Details */}
//       <Grid mt="xl" mb="xl">
//         <Grid.Col md={1} lg={1}></Grid.Col> 
//         <Grid.Col   md={5} lg={5}>
//           <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
//             <div onClick={handleOverClick} style={{ cursor: "pointer" }}>
//               <Text ta="center" fw={700} td="underline" size="xl">
//                 {" "}
//                 <h1>Total PIT'S Under CCC</h1>
//               </Text>
//               <Center>
//               <Responseive_pie chartData={pitsValue} />
//               </Center>
//             </div>
//           </Card>
//         </Grid.Col>
       
//         <Grid.Col  md={5} lg={5}>
//           <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
//             <div onClick={handleOverClick} style={{ cursor: "pointer" }}>
//               <Text ta="center" fw={700} td="underline" size="xl">
//                 {" "}
//                 <h1>Battery Status All PIT'S</h1>
//               </Text>
//               <Center>
//               <Responseive_pie chartData={batteryValue} />
//               </Center>
//             </div>
//           </Card>
//         </Grid.Col>
//         <Grid.Col md={2} lg={1}></Grid.Col> 
//       </Grid>

//       {/* this start CCC section Details */}
    
             
     
//               {/* <Grid mt="xl" mb="xl"> */}
//       {/* <Grid.Col md={2} lg={1}></Grid.Col> 
//      <Grid.Col md={10} lg={10}> */}
//                   <Ccc/> {/* Calling CCC Component here */}
//      {/* </Grid.Col>
//      <Grid.Col md={2} lg={1}></Grid.Col>    
//       </Grid> */}
//       {/* this start SCC section Details */}
//       {/* <Grid mt="xl" mb="xl">
//       <Grid.Col md={2} lg={1}></Grid.Col> 
//   <Grid.Col md={10} lg={10}> */}
//                        <Scc/>
//      {/* </Grid.Col>
//      <Grid.Col md={2} lg={1}></Grid.Col>    
//       </Grid> */}
//           {/* this start PCC section Details */}
//     {/* <Grid mt="xl" mb="xl">
//       <Grid.Col md={2} lg={1}></Grid.Col> 
//      <Grid.Col md={10} lg={10}> */}
//                             <Pcc/>       
//   {/* </Grid.Col>
//      <Grid.Col md={2} lg={1}></Grid.Col>    
//       </Grid> */}
//        <Grid> 
//         <Grid.Col md={1} lg={1}></Grid.Col>
//         <Grid.Col md={12} lg={10}>
//           {" "}
//         </Grid.Col>
//         <Grid.Col md={1} lg={1}></Grid.Col>
//       </Grid>
//       <Grid>
//         <Grid.Col md={1} lg={1}></Grid.Col>
//         <Grid.Col md={10} lg={10}>
//           {" "}
//           <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
//             <Lmap data={mapData} />
//           </Card>
//         </Grid.Col>
//         <Grid.Col md={1} lg={1}></Grid.Col>
//       </Grid> 



     
//     </>
//   );
// }

// export default Rfermhome;


//ring prograss

// import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Grid} from '@mantine/core';
// import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

// const icons = {
//   up: IconArrowUpRight,
//   down: IconArrowDownRight,
// };

// const data = [
//   { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
//   { label: 'New users', stats: '2,550', progress: 72, color: 'blue', icon: 'up' },
//   {
//     label: 'Orders',
//     stats: '4,735',
//     progress: 52,
//     color: 'red',
//     icon: 'down',
//   },
  
// ] 

// export function Rfermhome() {
//   console.log("Ring", data);
//   const stats = data.map((stat, index) => {
//     const Icon = icons[stat.icon];
//     return (
//             <Grid.Col key={index} xs={12} sm={4}>
//               <Paper withBorder radius="md" p="xs">
//                 <Group>
//                   <RingProgress
//                     size={80}
//                     roundCaps
//                     thickness={8}
//                     sections={[{ value: stat.progress, color: stat.color }]}
//                     label={
//                       <Center>
//                         <Icon style={{ width: 20, height: 20 }} stroke={1.5} />
//                       </Center>
//                     }
//                   />
      
//                   <div>
//                     <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
//                       {stat.label}
//                     </Text>
//                     <Text fw={700} size="xl">
//                       {stat.stats}
//                     </Text>
//                   </div>
//                 </Group>
//               </Paper>
//             </Grid.Col>
//           );
//         });
      
//         return <Grid>{stats}</Grid>;
//       }
      

// export default Rfermhome


// import React from 'react'
// import RfermRingProgress from './Rferm_components/RfermRingProgress'
// import Pit_card from './Rferm_components/Pit_card'
// import PitCardList from './Rferm_components/Pit_card';
// import RfermResponseive_pie from './Rferm_components/RfermResponseive_pie';



// function Rfermhome() {

//   const data = [
//       { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
//       { label: 'New users', stats: '2,550', progress: 72, color: 'blue', icon: 'up' },
//       {
//         label: 'Orders',
//         stats: '4,735',
//         progress: 52,
//         color: 'red',
//         icon: 'down',
//       },
//   ]

   
//   const datatable=[
      
//     { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P001",Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" },
//     { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P002",Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P003",Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" },
//     { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P004",Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" },
//     { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P005", Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" },
//     { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P006",Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P007" , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" },
//     { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P008" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" },
//     { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P009" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P010" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P011" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" },
//     { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P012" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },  
    
//     { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P013",Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P014" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" }, 
//     { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P015" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P016" , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P017" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P018" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P019" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P020" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0021" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0022" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" }, 
//     { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0023" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0024" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0025" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },

//     { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P026" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P027" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P028" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P029" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P030" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P031" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P032" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P034" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P035" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P036" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P037", Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P038" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P039" , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 

//     { SCCUser: 'Lava' , PCCUser: 'Venu', PIT: 'P040' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Lava' , PCCUser: 'Venu', PIT: 'P041' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lava' , PCCUser: 'Venu', PIT: 'P042' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lava' , PCCUser: 'Venu', PIT: 'P043' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" },
//     { SCCUser: 'Lava' , PCCUser: 'Manjhu', PIT: 'P044' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lava' , PCCUser: 'Manjhu', PIT: 'P045', Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lava' , PCCUser: 'Manjhu', PIT: 'P046' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lava' , PCCUser: 'Manjhu', PIT: 'P047' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Lava' , PCCUser: 'Mohan', PIT: 'P048' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" }, 
//     { SCCUser: 'Lava' , PCCUser: 'Mohan', PIT: 'P049' ,Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Lava' , PCCUser: 'Mohan', PIT: 'P050', Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 
//     { SCCUser: 'Lava' , PCCUser: 'Mohan', PIT: 'P051' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },

//     { SCCUser: 'Ramana' , PCCUser: 'Venu A', PIT: 'P00040' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Ramana' , PCCUser: 'Venu A', PIT: 'P00041',Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Ramana' , PCCUser: 'Venu A', PIT: 'P00042' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Ramana' , PCCUser: 'Venu A', PIT: 'P00043' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Ramana' , PCCUser: 'Manjhu A', PIT: 'P00044',Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Ramana', PCCUser: 'Manjhu A', PIT: 'P00045' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Ramana' , PCCUser: 'Manjhu A', PIT: 'P0406' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Ramana' , PCCUser: 'Mohan A', PIT: 'P00048' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Ramana' , PCCUser: 'Mohan A', PIT: 'P00049' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Ramana' , PCCUser: 'Mohan A', PIT: 'P0050' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" },
//     { SCCUser: 'Ramana' , PCCUser: 'Mohan A', PIT: 'P00051' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },

//     { SCCUser: 'Shivakumar' , PCCUser: 'Venu B', PIT: 'P0040' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Venu B', PIT: 'P0041', Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 
//     { SCCUser: 'Shivakumar' , PCCUser: 'Venu B', PIT: 'P0042' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Venu B', PIT: 'P0043' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Manjhu B', PIT: 'P0044' ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" }, 
//     { SCCUser: 'Shivakumar' , PCCUser: 'Manjhu B', PIT: 'P0045' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Manjhu B', PIT: 'P0046' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Manjhu B', PIT: 'P0047' , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 
//     { SCCUser: 'Shivakumar' , PCCUser: 'Mohan B', PIT: 'P0048',Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Mohan B', PIT: 'P0049', Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" },
//     { SCCUser: 'Shivakumar' , PCCUser: 'Mohan B', PIT: 'P0050', Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Unsafe" }, 
//     { SCCUser: 'Shivakumar' , PCCUser: 'Mohan B', PIT: 'P0051', Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },

//     { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0001" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" }, 
//     { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0002" , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Warning" },
//     { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0003",Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0004" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0005" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0006" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0007" , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" }, 
//     { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0008" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0009" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0100" , Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0011" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0012" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
    
//     { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0026" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0027" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0028" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0029" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0030" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0031" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0032" ,Resistances: ["10", "15", "20","30","40","50"],PITStatus:"Safe" },
//     { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0034" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0035" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 
//     { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0036" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0037" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Safe" },
//     { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0038" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Warning" },
//     { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0039" ,Resistances: ["10", "15", "20","30","40","50"], PITStatus:"Unsafe" }, 

      
//       ];

//       const pitsValue = [
  
//         { id: "Safe PIT'S", label: "Safe PIT'S", value: 100 , color:"rgb(100,255,100)" },
//         { id: "Worning PIT'S", label: "Worning PIT'S", value: 100 ,color:"rgb(255,150,70)" },
//         { id: "Unsafe PIT's", label: "Unsafe PIT's", value: 100 ,color:"rgb(255,100,100)" },
//       ];

//   return (
//     <div>
//           {/* <RfermRingProgress data={data}/> */}
//           {/* <PitCardList datatable={datatable} />; */}
//           {/* <Rferm_Live_Status/> */}
//           <RfermResponseive_pie chartData={pitsValue} />
//     </div>
//   )
// }

// export default Rfermhome


// import React from 'react'
// import Pit_details from './Rferm_components/Pit_details'

// function Rfermhome() {
//   return (
//     <div>
//     <Pit_details/>
//     </div>
//   )
// }

// export default Rfermhome


    {/* <Pit_details/> */}
      {/* <GraphChart/> */}
      
import React from 'react'
import Pit_details from './Rferm_components/Pit_details'
import GraphChart from './Rferm_components/Extra_Components/GraphChart'
import RadarChart from './Rferm_components/RadarChart'
import { bop1 } from './Rferm_components/DataTables/bop1'
import { bop2 } from './Rferm_components/DataTables/bop2'
import { bop3 } from './Rferm_components/DataTables/bop3'
import { bop4 } from './Rferm_components/DataTables/bop4'



function Rfermhome() {

 const dataset=[bop1,bop2,bop3,bop4];


 console.log("data1234567",dataset);
  return (
    <div> 
  
      <RadarChart datasets={dataset}/>
    </div>
    
  )
}

export default Rfermhome