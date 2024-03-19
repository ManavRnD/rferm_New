import { Card, Grid } from '@mantine/core'
import React from 'react'
import Lmap from '../../components/Lmap'
import useWebsocket from '../../components/useWebsocket';
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

  
  const { data, chartData } = useWebsocket(email);

  const transformedData = chartData
    .map((row) => ({
      x: row[4],
      y: Number(row[13]),
    }))
    .reverse();

  const diaDataElectroStatic = chartData
    .map((row) => ({
      x: row[4],
      y: row[5],
    }))
    .reverse();

  const diaDataSpark = chartData
    .map((row) => ({
      x: row[4],
      y: row[6],
    }))
    .reverse();

  const diaDataEnvironment = chartData
    .map((row) => ({
      x: row[4],
      y: row[7],
    }))
    .reverse();

  const transformerData = data.map((row) => ({
    x: row[4],
    y: Number(row[13]),
  }));

    
      const mapData = chartData.map((row) => ({
    x: Number(row[2]),
    y: Number(row[3]),
    z: Number(row[13]),
  }));

  const staticData = data.map((row) => ({
    x: row[4],
    y: row[5],
  }));
  const sparkData = data.map((row) => ({
    x: row[4],
    y: row[6],
  }));
  const envData = data.map((row) => ({
    x: row[4],
    y: row[7],
  }));
  const temp = data.map((row) => ({
    x: row[4],
    y: Number(row[14]),
  }));
  const pressure = data.map((row) => ({
    x: row[4],
    y: Number(row[15]),
  }));
  const humidity = data.map((row) => ({
    x: row[4],
    y: Number(row[16]),
  }));
  const calenderData = data.map((row) => ({
    x: row[4],
    y: Number(row[13]),
  }));

  return (
    <div>
         <Grid>
         <Grid.Col md={.5} lg={.5}></Grid.Col>
         <Grid.Col md={11} lg={11}>
           {" "}
            <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
             <Lmap data={mapData} />
            </Card>
         </Grid.Col>
           <Grid.Col md={.5} lg={.5}></Grid.Col>
    </Grid> </div>
  )
}

export default Map_componenent