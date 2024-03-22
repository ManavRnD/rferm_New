import { Button, Card, Center, Checkbox, Divider, Flex, Grid, Group, Table, Text, useMantineTheme, } from '@mantine/core';
import React, { useState } from 'react'
import Responseive_pie from '../../maintenance/Responseive_pie';
import TableComponent from '../../components/Table_comp';
import { useNavigate } from 'react-router-dom';
import Usertable from './UserTable';
import Pit_Table from './Pit_Table';
import RFCircularProgressbar from './RFCircularProgressbar';
import Linechart from './Linechart';
import RfermRingProgress from './RfermRingProgress';
import Rfermhome from '../Rfermhome';
import WorningRing from './WorningRing';
import FualtRing from './FualtRing';
import SafeRing from './SafeRing';
import RfermResponseive_pie from './RfermResponseive_pie';
import TotalRing from './TotalRing';
import { red } from '@mui/material/colors';
import { gray } from 'd3';
import RadarChart from './RadarChart';
import { bop1 } from './DataTables/bop1';
import { bop2 } from './DataTables/bop2';
import { bop3 } from './DataTables/bop3';
import { bop4 } from './DataTables/bop4';
import Recent_table from './Extra_Components/Recent_table';
import { recent_data } from './DataTables/recent_data';
import { grid_data } from './DataTables/grid_data';
import Apex_area_Chart from './Extra_Components/Apex_area_Chart';


function Pcc() {

  const navigate = useNavigate();



  const CccValue = [
    { label: "Safe", value: 100, color: "#24782c", },
    { label: "Warning", value: 50, color: "#d14d14" },
    { label: "Unsafe", value: 30, color: "#c51d31" }
  ];





  const datatable = [
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '23' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '15' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '56' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '12' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.90, TimeInterval: '01/01/2023 10:44:45', Unit: '18' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '10' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '22' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '23' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '23' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '32' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 2.5, TimeInterval: '03/01/2023 10:44:45', Unit: '42' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '44' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '32' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '11' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '23' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2023 10:44:45', Unit: '12' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 2.5, TimeInterval: '04/01/2023 10:44:45', Unit: '24' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2023 10:44:45', Unit: '23' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2023 10:44:45', Unit: '23' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '12' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '23' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '12' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 2.45, TimeInterval: '05/01/2023 10:44:45', Unit: '11' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '23' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '22' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '23' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '11' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '12`' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '23' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '31' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:001', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '54' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 2.20, TimeInterval: '01/01/2023 10:44:45', Unit: '34' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '34' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '54' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 2.32, TimeInterval: '01/01/2023 10:44:45', Unit: '43' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '34' },
    { Date: '01/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '01/01/2023 10:44:45', Unit: '34' },
    { Date: '02/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '34' },
    { Date: '02/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 2.22, TimeInterval: '02/01/2023 10:44:45', Unit: '54' },
    { Date: '02/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '42' },
    { Date: '02/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '02/01/2023 10:44:45', Unit: '12' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '12' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '12' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '21' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '21' },
    { Date: '03/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '03/01/2023 10:44:45', Unit: '12' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 1.80, TimeInterval: '04/01/2023 10:44:45', Unit: '12' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:002', PitName: 'Pit 02', PitID: '002', NormalReding: 2.22, TimeInterval: '04/01/2023 10:44:45', Unit: '12' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '04/01/2023 10:44:45', Unit: '32' },
    { Date: '04/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '04/01/2023 10:44:45', Unit: '12' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '12' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 4.44, TimeInterval: '05/01/2023 10:44:45', Unit: '11' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '14' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '12' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '14' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '14' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '05/01/2023 10:44:45', Unit: '13' },
    { Date: '05/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 2.22, TimeInterval: '05/01/2023 10:44:45', Unit: '14' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '15' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '15' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '15' },
    { Date: '06/01/2023', MACAddress: 'MC:00:00:00:003', PitName: 'Pit 03', PitID: '003', NormalReding: 1.80, TimeInterval: '06/01/2023 10:44:45', Unit: '15' },
  ];

  const cols = {
    Date: 'Date',
    PitName: 'Pit Name',
    PitID: 'Pit ID',
    Unit: 'Resistance',

  };

  const visibleColumns = [
    'Date',
    'PitName',
    'PitID',
    'Unit'
  ];



  const datav = {
    labels: ["Jan", "February", "March", "April", "May"],
    datasets: [
      {
        label: "PIT NAME",
        data: [3.5, 3.5, 3.2, 3.2, 4, 3.4,],
        fill: false,
        borderColor: "rgb(335, 15, 1)",
        tension: 0.1,
        pointStyle: 'rect',
        pointBorderColor: 'rgb(255,255,255)'
      },
      {
        label: "PIT NAME",
        data: [2.5, 1.5, 1.2, 2.2, 2, 2.4,],
        fill: false,
        borderColor: "rgb(335, 15, 1)",
        tension: 0.1,
        pointStyle: 'rect',
        pointBorderColor: 'rgb(255,255,255)'
      }
    ],
  };





  const optionsv = {
    scales: {
      x: {
        type: "category",
        labels: datav.labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const data0 = [
    { label: 'HEALTHY', stats: '34', progress: 100, color: '#24782c', },
  ];
  const data1 = [
    { label: 'UNHEALTHY', stats: '26', progress: 100, color: '#d14d14', },
  ];
  const data2 = [
    {
      label: 'DANGER',
      stats: '38',
      progress: 100,
      color: '#c51d31',

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
    navigate("/Rferm/PIT_cardsmainpage", { state: { prop: 'Safe' } } );
  };
  const handleOverClick1 = () => {
    navigate("/Rferm/PIT_cardsmainpage", { state: { prop: 'Warning' } });
  };
  const handleOverClick2 = () => {
    navigate("/Rferm/PIT_cardsmainpage", { state: { prop: 'Unsafe' } });
  };
  const handleOverClick3 = () => {
    navigate("/Rferm/PIT_cardsmainpage", { state: { prop: 'All' } });
  };

  const [selectedDatasets, setSelectedDatasets] = useState([bop1]);
  const [sendData, setSendData] = useState([bop1]);

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

  const datasets = [bop1, bop2, bop3, bop4];

 
  return (
    <>

      <Grid mt="xl" mb="xl">
        <Grid.Col md={.5} lg={.5}></Grid.Col>
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
        <Grid.Col md={.5} lg={.5}></Grid.Col>


        {/*table users */}
        <Grid.Col md={.5} lg={.5}></Grid.Col>
        <Grid.Col md={11} lg={11}>
          <Card shadow="xl" padding="lg" radius="lg" withBorder mt="sm">
            <Grid>
              <Grid.Col md={4.5} lg={4.5}>

                {/*unsafe user data table display hear*/}
                <Text fw={700}>

                  UNSAFE PITS
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
                      {datasets.map((dataset, index) => (
                        <tr key={index}>
                          <td>
                            <Checkbox
                              key={index}
                              checked={selectedDatasets.includes(dataset)}
                              onChange={() => handleDatasetSelection(dataset)}
                              mt="md"
                            />
                          </td>
                          <td>{`PIT ${index + 1}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Center>
                <div>
                  <Center>
                    {/* Submit button (disabled if no datasets are selected) */}
                    <Button mt="xl" onClick={handleSubmit} disabled={selectedDatasets.length === 0}>
                      Submit
                    </Button>
                  </Center>
                </div>
                <div>
                  <Center>
                    {/* Display message if no datasets are selected */}
                    {selectedDatasets.length === 0 && <p>No PIT selected</p>}
                  </Center>
                </div>
              </Grid.Col>
              <Divider size='md' />
              <Grid.Col md={6} lg={6}>
                <Text fw={700} ta="center">
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
                <Text fw={700} >
                  LAST 15 DAYS STATUS
                </Text>
                <Apex_area_Chart data={grid_data} />
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col md={.5} lg={.5} ></Grid.Col>

      </Grid>
   
    </>

  )
}

export default Pcc