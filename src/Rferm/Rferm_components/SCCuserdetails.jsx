import React from 'react'
import { Scc_User_data } from './DataTables/Scc_User_data'
import { Card, Grid, Text } from '@mantine/core';
import Usertable from './UserTable';
import { useLocation } from 'react-router-dom';

function SCCuserdetails() {

  const data = Scc_User_data;
  console.log("Scc_User_data", data)

  const columns = {
    SLNO: "SLNO",
    PlantName: "PLANT NAME",
    Name:"NAME",
    status: 'STATUS',

  };

  const visibleColumns = [
    "SLNO",
    "Name",
    "PlantName",
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
              <h2> SCC USERS</h2>
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

export default SCCuserdetails