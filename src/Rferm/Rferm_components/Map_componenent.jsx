import { Card, Grid } from '@mantine/core'
import React from 'react'
import Lmap from '../../components/Lmap'
import { useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Map_componenent() {

    const theme = useMantineTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin");

    
  const blockedStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    filter: "blur(8px)",
    borderRadius: "10px",
  };
  

 // Example data containing latitude, longitude, and percentage
 const data = {
  data: [
    { x: 12.971599, y: 77.594566, z: 10 }, // Example data point
    // Add more data points as needed
  ]
};

 

  return (
    <div>
         <Grid>
         <Grid.Col md={.5} lg={.5}></Grid.Col>
         <Grid.Col md={11} lg={11}>
           {" "}
            <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
             <Lmap data={data} />
            </Card>
         </Grid.Col>
           <Grid.Col md={.5} lg={.5}></Grid.Col>
    </Grid> </div>
  )
}

export default Map_componenent