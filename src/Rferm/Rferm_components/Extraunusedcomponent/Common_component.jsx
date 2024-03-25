import { Card, Grid, Text, Center } from '@mantine/core';
import React from 'react'
import Responseive_pie from '../../../maintenance/Responseive_pie';
import RfermResponseive_pie from '../RfermResponseive_pie';
import { red } from '@mui/material/colors';


function Common_component() {

       // Sample data from data table
       const data = [
        { label: "Safe", value: 150, color: "#33FF57"},
        { label: "Unsafe", value: 20, color: "#f53803" },
        { label: "Warning", value: 50, color: "#f59a03" },
        
    ];


  const batteryValue = [
   
    { id: "low", label: "live Fault", value: 50 },
    { id: "Worning", label: "Worning ", value: 50 },
    { id: "full", label: "Latest Fault", value: 20},
  ];
  
  
  return (
    <>
     {/* This is Common section for all Details */}
      <Grid mt="xl" mb="xl">
        <Grid.Col md={1} lg={1}></Grid.Col> 
        <Grid.Col   md={10} lg={10}>
          <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder >
            <div >
              <Text ta="center" fw={700}  size="xl">
                {" "}
                <h1>TOTAL PITS</h1>
              </Text>
              <Center>
              <RfermResponseive_pie data={data} />
              </Center>
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col md={2} lg={1}></Grid.Col> 
      </Grid>
    </>
  )
}

export default Common_component