import { Button, Card, Center, Flex, Grid, Text, Group, } from '@mantine/core'
import React from 'react'

import { useNavigate } from 'react-router-dom';
import RfermResponseive_pie from './Rferm_components/RfermResponseive_pie';
import SafeRing from './Rferm_components/SafeRing';
import WorningRing from './Rferm_components/WorningRing';
import FualtRing from './Rferm_components/FualtRing';
import Usertable from './Rferm_components/UserTable';
import { green, red } from '@mui/material/colors';
import PitCardList from './Rferm_components/Pit_card';




function PIT_cardsmainpage() {

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



  ];


  return (
    <>
      <Grid mt="xl" mb="xl">
        <Grid.Col md={1} lg={1} ></Grid.Col>
        <Grid.Col md={10} lg={10}  >
        <PitCardList datatable={datatable} />
        </Grid.Col>
        <Grid.Col md={1} lg={1} ></Grid.Col>
      </Grid>
    </>

  )
}

export default PIT_cardsmainpage

