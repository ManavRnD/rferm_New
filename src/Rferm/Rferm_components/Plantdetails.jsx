import React from 'react'
import { Card, Grid, Text } from '@mantine/core';
import Usertable from './UserTable';
import { useLocation } from 'react-router-dom';
import { Ccc_Plant_data } from './DataTables/Ccc_Plant_data';

function Plantdetails() {

  const data = Ccc_Plant_data;
  console.log("Scc_User_data", data)

  const columns = {
    SLNO: "SLNO",
    PlantName:  "PLANT NAME",
    City: "CITY",
    status: "STATUS",

  };

  const visibleColumns = [
    "SLNO",
    "PlantName",
    "City",
    "status",
  ];
  const location = useLocation();
  const prop = location.state?.prop; // Access the prop passed from the previous component
// Now you can use the prop variable in your component logic
console.log("prop",prop)

  const filterStatus = prop;

console.log("filterStatus",filterStatus)
  
  return (
    <>
      <Grid mt="xl" mb="xl">
        <Grid.Col md={.5} lg={.5}></Grid.Col>
        <Grid.Col md={11} lg={11}>
          <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
            <Text ta="center" fw={700} size="xl">
              <h2> PLANT DETAILS</h2>
            </Text>
            <Usertable
              data={data}
              columns={columns}
              visibleColumns={visibleColumns}
              filterStatus={filterStatus} />
          </Card>
        </Grid.Col>
        <Grid.Col md={.5} lg={.5}></Grid.Col>
      </Grid>

    </>
  )
}

export default Plantdetails;