import { Button, Card, Center, Flex, Grid, Text, Group, Divider, Table, Checkbox, Modal, Pagination, } from '@mantine/core'
import React, { useState } from 'react'
import Responseive_pie from '../../maintenance/Responseive_pie'
import TableComponent from '../../components/Table_comp';
import MyResponsiveLine from '../PIT_cardsmainpage';
import Data_table from '../../components/Data_table';
import RfermTable from './RfermTable';
import Usertable from './UserTable';
import RFCircularProgressbar from './RFCircularProgressbar';
import RfermRingProgress from './RfermRingProgress';
import Pitdetails_table from './Pitdetails_table';
import RfermResponseive_pie from './RfermResponseive_pie';
import SafeRing from './SafeRing';
import WorningRing from './WorningRing';
import FualtRing from './FualtRing';
import { useNavigate } from 'react-router-dom';
import TotalRing from './TotalRing';
import { green, red } from '@mui/material/colors';
import RadarChart from './RadarChart';
import Recent_table from './Extra_Components/Recent_table';
import { bop1 } from './DataTables/bop1';
import { bop2 } from './DataTables/bop2';
import { bop3 } from './DataTables/bop3';
import { bop4 } from './DataTables/bop4';
import { recent_data } from './DataTables/recent_data';
import Apex_area_Chart from './Extra_Components/Apex_area_Chart';
import { grid_data } from './DataTables/grid_data';
import Plantdetails from './Plantdetails';
import { bop5 } from './DataTables/bop5';
import { bop6 } from './DataTables/bop6';
import { bop7 } from './DataTables/bop7';
import { bop8 } from './DataTables/bop8';
import { bop9 } from './DataTables/bop9';
import { bop10 } from './DataTables/bop10';
import { bop11 } from './DataTables/bop11';
import { bop12 } from './DataTables/bop12';
import { bop13 } from './DataTables/bop13';






function Ccc() {

  const navigate = useNavigate();

  const datatable = [

    { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P001", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P002", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P003", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Rajesh", PIT: "P004", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P005", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P006", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P007", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Vikram", PIT: "P008", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P009", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P010", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P011", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Bangalore" },
    { SCCUser: "Mahadev", PCCUser: "Ganesh", PIT: "P012", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Bangalore" },

    { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P013", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P014", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P015", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Anil", PIT: "P016", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P017", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P018", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P019", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Kumar", PIT: "P020", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0021", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0022", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0023", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0024", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hydrabhad" },
    { SCCUser: "Ganesh", PCCUser: "Amit", PIT: "P0025", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hydrabhad" },

    { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P026", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P027", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P028", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: "Anil", PIT: "P029", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P030", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P031", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P032", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Mangala', PIT: "P034", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P035", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P036", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P037", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P038", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Chanai" },
    { SCCUser: 'Lakshman', PCCUser: 'Kumarkar', PIT: "P039", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Chanai" },

    { SCCUser: 'Lava', PCCUser: 'Venu', PIT: 'P040', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Venu', PIT: 'P041', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Venu', PIT: 'P042', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Venu', PIT: 'P043', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Manjhu', PIT: 'P044', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Manjhu', PIT: 'P045', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Manjhu', PIT: 'P046', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Manjhu', PIT: 'P047', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Mohan', PIT: 'P048', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Mohan', PIT: 'P049', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Mohan', PIT: 'P050', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "koppal" },
    { SCCUser: 'Lava', PCCUser: 'Mohan', PIT: 'P051', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "koppal" },

    { SCCUser: 'Ramana', PCCUser: 'Venu A', PIT: 'P00040', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Venu A', PIT: 'P00041', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Venu A', PIT: 'P00042', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Venu A', PIT: 'P00043', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Manjhu A', PIT: 'P00044', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Manjhu A', PIT: 'P00045', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Manjhu A', PIT: 'P0406', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Mohan A', PIT: 'P00048', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Mohan A', PIT: 'P00049', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Mohan A', PIT: 'P0050', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Ballari" },
    { SCCUser: 'Ramana', PCCUser: 'Mohan A', PIT: 'P00051', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Ballari" },

    { SCCUser: 'Shivakumar', PCCUser: 'Venu B', PIT: 'P0040', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Venu B', PIT: 'P0041', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Venu B', PIT: 'P0042', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Venu B', PIT: 'P0043', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Manjhu B', PIT: 'P0044', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Manjhu B', PIT: 'P0045', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Manjhu B', PIT: 'P0046', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Manjhu B', PIT: 'P0047', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Mohan B', PIT: 'P0048', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Mohan B', PIT: 'P0049', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Mohan B', PIT: 'P0050', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Hebbal" },
    { SCCUser: 'Shivakumar', PCCUser: 'Mohan B', PIT: 'P0051', Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Hebbal" },

    { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0001", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0002", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0003", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Rajesh A", PIT: "P0004", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0005", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0006", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0007", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Vikram A", PIT: "P0008", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0009", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0100", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0011", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Kashi" },
    { SCCUser: 'Niju', PCCUser: "Ganesh A", PIT: "P0012", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Kashi" },

    { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0026", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0027", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0028", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: "Anila", PIT: "P0029", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0030", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0031", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0032", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Mangala B', PIT: "P0034", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0035", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0036", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0037", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Safe", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0038", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Warning", Plantname: "Dheli" },
    { SCCUser: 'Tharun', PCCUser: 'Kumarkar B', PIT: "P0039", Resistances: ["10", "15", "20", "30", "40", "50"], PITStatus: "Unsafe", Plantname: "Dheli" },


  ];





  // Count the number of pits for each SCCUser
  const pitCounts = {};
  datatable.forEach(entry => {
    const { SCCUser } = entry;
    pitCounts[SCCUser] = (pitCounts[SCCUser] || 0) + 1;
  });




  // Calculate counts for each status
  const counts = {
    Warning: datatable.filter(item => item.PITStatus === "Warning").length,
    Safe: datatable.filter(item => item.PITStatus === "Safe").length,
    Unsafe: datatable.filter(item => item.PITStatus === "Unsafe").length
  };

  // Update CccValue array with counts
  const updatedCccValue = [

    { label: "Safe", value: counts.Safe, color: "#24782c", },
    { label: "Warning", value: counts.Warning, color: "#d14d14" },
    { label: "Unsafe", value: counts.Unsafe, color: "#c51d31" }
  ];

  // I create the condition here to Display the Unsafe user data into the Table 
  const unsafeData = datatable.filter(item => item.PITStatus === "Unsafe");
  console.log("Unsafe:", unsafeData);

  // I create the condition here to Display the Safe user data into the Table 
  const safeData = datatable.filter(item => item.PITStatus === "Safe");
  console.log("Safe:", safeData);
  // I create the condition here to Display the Warning user data into the Table 
  const WarningData = datatable.filter(item => item.PITStatus === "Warning");
  console.log("Warning:", WarningData);

  // Count of Unsafe
  const totalUnsafe = unsafeData.length;
  console.log("countUnsafe:", totalUnsafe);

  // count of Safe
  const totalSafe = safeData.length;
  console.log("countsafe:", totalSafe);

  // Count of Warning 
  const totalWarning = WarningData.length;
  console.log("countWarning:", totalWarning);

  // Count of Total Users 
  const uniqueSCCUsers = Array.from(new Set(datatable.map(item => item.SCCUser)));
  const SCCUserCount = uniqueSCCUsers.length;

  // Count occurrences of repeat name in this table
  const siteCounts = {};
  datatable.forEach(user => {
    const SCCUser = user.SCCUser;
    siteCounts[SCCUser] = (siteCounts[SCCUser] || 0) + 1;
  });

  // Log the counts
  console.log("Site Counts:", siteCounts);

  // RfermRingProgress data table hear

  const data0 = [
    { label: 'HEALTHY SCC', stats: '34', progress: 100, color: '#24782c', icon: 'up' },
  ];
  const data1 = [
    { label: 'UNHEALTHY SCC', stats: '26', progress: 100, color: '#d14d14', icon: 'down' },
  ];
  const data2 = [
    {
      label: 'DANGER SCC',
      stats: '38',
      progress: 100,
      color: '#c51d31',
      icon: 'down',
    }

  ];

  const data3 = [
    {
      label: 'Total ',
      stats: '98',
      progress: 100,
      color: '#1dbac5',

    }
  ];
  const handleOverClick = () => {
    navigate("/Rferm/Rferm_components/SCCuserdetails", { state: { prop: 'safe' } } );
  };
  const handleOverClick1 = () => {
    navigate("/Rferm/Rferm_components/SCCuserdetails", { state: { prop: 'Warning' } });
  };
  const handleOverClick2 = () => {
    navigate("/Rferm/Rferm_components/SCCuserdetails", { state: { prop: 'unsafe' } });
  };
  const handleOverClick3 = () => {
    navigate("/Rferm/Rferm_components/SCCuserdetails");
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close

  const handleModalToggle = () => {
      setIsModalOpen((prev) => !prev); // Toggle modal state
  };

  const [selectedDatasets, setSelectedDatasets] = useState([bop1]);
  const [sendData, setSendData] = useState([bop1]);
  const [pageIndex, setPageIndex] = useState(1); // Start from page 1
  const datasetsPerPage =5;

  const datasets = [bop1, bop2, bop3, bop4, bop5, bop6, bop7, bop8, bop9, bop10, bop11, bop12, bop13];
  const paginatedDatasets = datasets.slice((pageIndex - 1) * datasetsPerPage, pageIndex * datasetsPerPage);

  const handleDatasetSelection = (dataset) => {
    if (selectedDatasets.includes(dataset)) {
      setSelectedDatasets(selectedDatasets.filter((item) => item !== dataset));
    } else {
      setSelectedDatasets([...selectedDatasets, dataset]);
    }
  };

  const handleSubmit = () => {
    console.log("Button submit clicked");
    setSendData(selectedDatasets);
    console.log("data i try to send", sendData);
  };

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
  };

  

  

  return (
    <>
      <Grid mt="xl" mb="xl">
        <Grid.Col md={.5} lg={.5} ></Grid.Col>
        <Grid.Col md={11} lg={11}  >
          <Card mb="sm" mt="xl" pt="20px" pb="130px" shadow="xl" padding="lg" radius="lg" withBorder>
            <div>
            <Text ta="center" fw={700} size="xl">
                {" "}
                <h3>TOTAL PITS</h3>
              </Text>
              <Grid md={10} lg={10} >
                <Grid.Col md={3.5} lg={3.5} > </Grid.Col>
              
                <Grid.Col md={5} lg={5} > 
                <RfermResponseive_pie data={updatedCccValue} />
                </Grid.Col>
                <Grid.Col md={3.5} lg={3.5} ></Grid.Col>
                </Grid>
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>
        <Grid.Col md={2.75} lg={2.75} onClick={handleOverClick}>
          <SafeRing data={data0} />
        </Grid.Col>
        <Grid.Col md={2.75} lg={2.75} onClick={handleOverClick1}>
          <WorningRing data={data1} />
        </Grid.Col>
        <Grid.Col md={2.75} lg={2.75} onClick={handleOverClick2}>
          <FualtRing data={data2} />
        </Grid.Col>
        <Grid.Col md={2.75} lg={2.75} onClick={handleOverClick3}>
          <TotalRing data={data3} />
        </Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>




        <Grid.Col md={.5} lg={.5} ></Grid.Col>
        <Grid.Col md={11} lg={11}  >
          <Card shadow="xl" padding="lg" radius="lg" withBorder mt="sm">
            <Grid>
              <Grid.Col md={4.5} lg={4.5} >
                <Text fw={700} td="underline" onClick={handleModalToggle} >
                  PLANTS
                </Text>
                <RadarChart datasets={sendData} />
              </Grid.Col>
              <Divider size='md' />
              <Grid.Col md={1.5} lg={1.5}>
              <Center>
          <Table>
            <thead>
              <td>Select</td>
              <td>Name</td>
            </thead>
            <tbody>
              {paginatedDatasets.map((dataset, index) => (
                <tr key={index}>
                  <td>
                    <Checkbox
                      key={index}
                      checked={selectedDatasets.includes(dataset)}
                      onChange={() => handleDatasetSelection(dataset)}
                      mt="md"
                    />
                  </td>
                  <td>{`PLANT ${index + (pageIndex - 1) * datasetsPerPage + 1}`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Center>
         {/* Filter input */}
      <Center>
        
      </Center>
        <Center>
                    {/* Submit button (disabled if no datasets are selected) */}
                    <Button mt="xl" mb="10px" onClick={handleSubmit} disabled={selectedDatasets.length === 0}>
                      Submit
                    </Button>
                  </Center>
        <Center>
          {/* Pagination controls */}
          <Pagination
            size="xs"
            radius="sm"
            limit={datasetsPerPage}
            value={pageIndex}
            onChange={handlePageChange}
            withGoTo
          />
        </Center>
                <div>
                  <Center>
                    {/* Display message if no datasets are selected */}
                    {selectedDatasets.length === 0 && <p>No PIT selected</p>}
                  </Center>
                </div>
              </Grid.Col>
              <Divider size='md' />
              <Grid.Col md={6} lg={6}>
                <Text fw={700} ta="center" td="underline">
                  Recent Activity
                </Text>
                <Recent_table data={recent_data} />
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>
        <Grid.Col md={11} lg={11}  >
          <Card shadow="xl" padding="lg" radius="lg" withBorder mt="sm">
            <Grid>
              <Grid.Col md={12} lg={12}>
                <Text fw={700} td="underline">
                  PLANTS
                </Text>
                <Apex_area_Chart data={grid_data} />
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>
      </Grid>

      <Modal
                
                size="auto"
                padding="md"
                opened={isModalOpen}
                onClose={handleModalToggle}
                hideCloseButton
            >
                {/* Your modal content goes here */}
                
                <Plantdetails/>
                
            </Modal>
    </>

  )
}

export default Ccc;