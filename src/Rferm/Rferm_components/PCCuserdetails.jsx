import React from 'react'
import { Card, Grid, Text } from '@mantine/core';
import Usertable from './UserTable';
import { useLocation } from 'react-router-dom';
import { Pcc_User_data } from './DataTables/Pcc_User_data';

function PCCuserdetails() {

  const data = Pcc_User_data;
  console.log("Scc_User_data", data)

  const columns = {
    SLNO: "SLNO",
    EmployeeID: "EMPLOYEE ID",
    Name: "NAME",
    Mail: "MAIL",
    status: 'STATUS',

  };

  const visibleColumns = [
    "SLNO", 
    "EmployeeID",
    "Name" ,
    "Mail",
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
              <h2> PCC USERS</h2>
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

export default PCCuserdetails;