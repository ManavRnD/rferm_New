
import { Grid, Card, Center, Text, Button, Flex, Divider, } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/Table_comp';
import { DatePicker, DatePickerInput } from '@mantine/dates';
import RfermLinechartb from './RfermLinechartb';
import Faultreadingchart from './Faultreadingchart';



const datatable = [
  { Date: '01/01/2024', SLNO: '1', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '2.0', ResistanceTrend: '3', ThresholdLimit: '6' },
  { Date: '01/02/2024', SLNO: '2', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '2.6', ResistanceTrend: '4', ThresholdLimit: '6' },
  { Date: '01/03/2024', SLNO: '3', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.7', ResistanceTrend: '5', ThresholdLimit: '7' },
  { Date: '01/04/2024', SLNO: '4', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.8', ResistanceTrend: '6', ThresholdLimit: '7' },
  { Date: '01/05/2024', SLNO: '5', PitName: 'Pit 01', PitID: '001', NormalReding: 1.90, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.9', ResistanceTrend: '11', ThresholdLimit: '7' },
  { Date: '01/06/2024', SLNO: '6', PitName: 'Pit 01', PitID: '001', NormalReding: 1.90, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '4.1', ResistanceTrend: '12', ThresholdLimit: '7' },
  { Date: '01/07/2024', SLNO: '7', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.1', ResistanceTrend: '8', ThresholdLimit: '7' },
  { Date: '01/08/2024', SLNO: '8', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.2', ResistanceTrend: '9', ThresholdLimit: '7' },
  { Date: '01/09/2024', SLNO: '9', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.6', ResistanceTrend: '1', ThresholdLimit: '7' },
  { Date: '01/10/2024', SLNO: '10', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.8', ResistanceTrend: '4', ThresholdLimit: '6' },
  { Date: '01/11/2024', SLNO: '11', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.5', ResistanceTrend: '12', ThresholdLimit: '7' },
  { Date: '01/12/2024', SLNO: '12', PitName: 'Pit 01', PitID: '001', NormalReding: 2.5, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.9', ResistanceTrend: '11', ThresholdLimit: '7' },
  { Date: '01/13/2024', SLNO: '13', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.8', ResistanceTrend: '10', ThresholdLimit: '7' },
  { Date: '01/14/2024', SLNO: '14', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.7', ResistanceTrend: '5', ThresholdLimit: '6' },
  { Date: '01/15/2024', SLNO: '15', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.6', ResistanceTrend: '10', ThresholdLimit: '7' },
  { Date: '01/16/2024', SLNO: '16', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.5', ResistanceTrend: '9', ThresholdLimit: '6' },
  { Date: '01/17/2024', SLNO: '17', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '2.4', ResistanceTrend: '7', ThresholdLimit: '7' },
  { Date: '01/181/2024', SLNO: '18', PitName: 'Pit 01', PitID: '001', NormalReding: 2.5, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '5.0', ResistanceTrend: '4', ThresholdLimit: '4' },
  { Date: '01/19/2024', SLNO: '19', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '5.1', ResistanceTrend: '1', ThresholdLimit: '6' },
  { Date: '01/20/2024', SLNO: '20', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '5.2', ResistanceTrend: '3', ThresholdLimit: '7' },
  { Date: '01/21/2024', SLNO: '21', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.3', ResistanceTrend: '4', ThresholdLimit: '4' },
  { Date: '01/22/2024', SLNO: '22', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.4', ResistanceTrend: '7', ThresholdLimit: '6' },
  { Date: '01/23/2024', SLNO: '23', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.5', ResistanceTrend: '8', ThresholdLimit: '7' },
  { Date: '01/24/2024', SLNO: '24', PitName: 'Pit 01', PitID: '001', NormalReding: 2.45, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.1', ResistanceTrend: '10', ThresholdLimit: '6' },
  { Date: '01/25/2024', SLNO: '25', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.3', ResistanceTrend: '9', ThresholdLimit: '7' },
  { Date: '01/26/2024', SLNO: '26', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.2', ResistanceTrend: '5', ThresholdLimit: '7' },
  { Date: '01/27/2024', SLNO: '27', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.5', ResistanceTrend: '2', ThresholdLimit: '7' },
  { Date: '01/28/2024', SLNO: '28', PitName: 'Pit 01', PitID: '001', NormalReding: 5, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.9', ResistanceTrend: '5', ThresholdLimit: '7' },
  { Date: '01/29/2024', SLNO: '29', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2024 10:44:45', FaultResistance: '5.8', ResistanceTrend: '8', ThresholdLimit: '6' },
  { Date: '01/30/2024', SLNO: '30', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2024 10:44:45', FaultResistance: '2.5', ResistanceTrend: '10', ThresholdLimit: '7' },
  { Date: '01/31/2024', SLNO: '31', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2024 10:44:45', FaultResistance: '2.5', ResistanceTrend: '9', ThresholdLimit: '6' },


 ];

const cols = {
  SLNO: 'SLNO',
  TimeInterval: 'TIMESTAMP',
  FaultResistance: 'PIT RESISTANCE ( Ω )',
};

const visibleColumns = [
  'SLNO',
  'TimeInterval',
  'FaultResistance',
];



function Pit_details() {

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showData, setShowData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    // Calculate start date (15 days ago)
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 15);
    setFromDate(startDate);

    // End date is today
    const endDate = new Date();
    setToDate(endDate);

    // Filter data for the last 15 days
    const last15DaysData = datatable.filter(item => {
      const currentDate = new Date(item.Date);
      return currentDate >= startDate && currentDate <= endDate;
    });
    setFilteredData(last15DaysData);
    setShowData(true);
  }, []);

  // Handle continue button click to filter data for selected date range
  const handleContinue = () => {
    if (fromDate && toDate) {
      const filteredData = datatable.filter(item => {
        const currentDate = new Date(item.Date);
        return (!fromDate || currentDate >= fromDate) && (!toDate || currentDate <= toDate);
      });
      setFilteredData(filteredData);
      setShowData(true);
    } else {
      setShowData(false); // Reset showData if either fromDate or toDate is null
    }
  };

  // Transform the data to fit the structure expected by Recharts
  const chartData = filteredData.map((data) => ({
    name: data.Date, // Assuming 'Date' is the x-axis data
    FaultResistance: parseFloat(data.FaultResistance), // Using 'FaultResistance' as y-axis data
  }));

  // Transform the data to fit the structure expected by Recharts
  const chartData2 = filteredData.map((data) => ({
    name: data.Date, // Assuming 'Date' is the x-axis data
    ResistanceTrend: parseFloat(data.ResistanceTrend),
    // ResistanceTrend: parseFloat(data.ResistanceTrend),
    // NormalReding: parseFloat(data.NormalReding),
  }));


  return (
    <>
      {/* Date range picker */}
      <Grid mt="xl" mb="xl">
        <Grid.Col md={1} lg={1}></Grid.Col>
        <Grid.Col md={10} lg={10}>
          <Flex
            mih={50}
            gap="100px"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            {/* Date range picker */}
            <DatePickerInput
              label="Select From Date"
              value={fromDate}
              placeholder="Pick dates range"
              onChange={setFromDate}
              maxDate={toDate}
              style={{ width: "200px" }}
            />

            <DatePickerInput
              label="Select End Date"
              value={toDate}
              placeholder="Pick dates range"
              onChange={setToDate}
              minDate={fromDate}
              style={{ width: "200px" }}
            />

            <Button
              onClick={handleContinue}
              disabled={!fromDate || !toDate}
              mt="lg"
              radius="xl"
              variant="gradient"
              style={{ width: "120px", height: "40px", justifyContent: "center" }}
            >
              Continue
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>

      <Divider size="xl" />

      {/* Display data */}
      {showData ? (
        filteredData.length > 0 ? (
          <Grid mt="xl" mb="xl">
            <Grid.Col md={1} lg={1}></Grid.Col>
            <Grid.Col md={10} lg={10}>
              <Card mt="xl" shadow="xl" padding="0px" radius="lg" withBorder>
                <Text ta="center" fw={700} size="xl">
                  <h2>PIT RESISTANCE</h2>
                </Text>
                <RfermLinechartb chartData1={chartData2} />
              </Card>
            </Grid.Col>
            <Grid.Col md={1} lg={1}></Grid.Col>
            <Grid.Col md={1} lg={1}></Grid.Col>
            <Grid.Col md={10} lg={10}>
              <Card mt="xl" shadow="xl" padding="0px" radius="lg" withBorder>
                <Text ta="center" fw={700} size="xl">
                  <h2>FAULT READING</h2>
                </Text>
                <Faultreadingchart data={chartData} />
              </Card>
            </Grid.Col>
            <Grid.Col md={1} lg={1}></Grid.Col>

            <Grid.Col md={1} lg={1}></Grid.Col>
            <Grid.Col md={10} lg={10}>
              <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
                <Text ta="center" fw={700} size="xl">
                  <h2>READING TABLE</h2>
                </Text>

                {showData && (
                  <TableComponent
                    data={filteredData}
                    columns={cols}
                    visibleColumns={visibleColumns}
                  />
                )}
              </Card>
            </Grid.Col>
            <Grid.Col md={1} lg={1}></Grid.Col>
          </Grid>
        ) : (
          <Center>
            <Text>No data available. Please select a date range.</Text>
          </Center>
        )
      ) : null}
    </>
  );
}

export default Pit_details;
