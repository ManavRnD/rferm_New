import React from 'react'
import TableComponent from '../../components/Table_comp';
import { Card, Grid, Text } from '@mantine/core';

const datatable = [
    { Date: '01/01/2024', SLNO: '1', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '2.0', ThresholdLimit: '3', ResistanceTrend: '6'},
    { Date: '01/02/2024', SLNO: '2', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '2.6', ThresholdLimit: '4', ResistanceTrend: '6' },
    { Date: '01/03/2024', SLNO: '3', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.7', ThresholdLimit: '5', ResistanceTrend: '7' },
    { Date: '01/04/2024', SLNO: '4', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.8', ThresholdLimit: '6', ResistanceTrend: '7' },
    { Date: '01/05/2024', SLNO: '5', PitName: 'Pit 01', PitID: '001', NormalReding: 1.90, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.9', ThresholdLimit: '11', ResistanceTrend: '7' },
    { Date: '01/06/2024', SLNO: '6', PitName: 'Pit 01', PitID: '001', NormalReding: 1.90, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '4.1', ThresholdLimit: '12', ResistanceTrend: '7' },
    { Date: '01/07/2024', SLNO: '7', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '01/01/2024 10:44:45', FaultResistance: '3.1', ThresholdLimit: '8', ResistanceTrend: '7' },
    { Date: '01/08/2024', SLNO: '8', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.2', ThresholdLimit: '9', ResistanceTrend: '7' },
    { Date: '01/09/2024', SLNO: '9', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.6', ThresholdLimit: '1', ResistanceTrend: '7' },
    { Date: '01/10/2024', SLNO: '10', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.8', ThresholdLimit: '4', ResistanceTrend: '6' },
    { Date: '01/11/2024', SLNO: '11', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '02/01/2024 10:44:45', FaultResistance: '2.5', ThresholdLimit: '12', ResistanceTrend: '7' },
    { Date: '01/12/2024', SLNO: '12', PitName: 'Pit 01', PitID: '001', NormalReding: 2.5, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.9', ThresholdLimit: '11', ResistanceTrend: '7' },
    { Date: '01/13/2024', SLNO: '13', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.8', ThresholdLimit: '10', ResistanceTrend: '7' },
    { Date: '01/14/2024', SLNO: '14', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.7', ThresholdLimit: '5', ResistanceTrend: '6' },
    { Date: '01/15/2024', SLNO: '15', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.6', ThresholdLimit: '10', ResistanceTrend: '7' },
    { Date: '01/16/2024', SLNO: '16', PitName: 'Pit 01', PitID: '001', NormalReding:1.80, TimeInterval: '03/01/2024 10:44:45', FaultResistance: '4.5', ThresholdLimit: '9', ResistanceTrend: '6' },
    { Date: '01/17/2024', SLNO: '17', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '2.4', ThresholdLimit: '7', ResistanceTrend: '7' },
    { Date: '01/181/2024', SLNO: '18', PitName: 'Pit 01', PitID: '001', NormalReding: 2.5, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '5.0', ThresholdLimit: '4', ResistanceTrend: '4' },
    { Date: '01/19/2024', SLNO: '19', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '5.1', ThresholdLimit: '1', ResistanceTrend: '6' },
    { Date: '01/20/2024', SLNO: '20', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '04/01/2024 10:44:45', FaultResistance: '5.2', ThresholdLimit: '3', ResistanceTrend: '7' },
    { Date: '01/21/2024', SLNO: '21', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.3', ThresholdLimit: '4', ResistanceTrend: '4' },
    { Date: '01/22/2024', SLNO: '22', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.4', ThresholdLimit: '7', ResistanceTrend: '6' },
    { Date: '01/23/2024', SLNO: '23', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.5', ThresholdLimit: '8', ResistanceTrend: '7' },
    { Date: '01/24/2024', SLNO: '24', PitName: 'Pit 01', PitID: '001', NormalReding: 2.45, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.1', ThresholdLimit: '10', ResistanceTrend: '6' },
    { Date: '01/25/2024', SLNO: '25', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.3', ThresholdLimit: '9', ResistanceTrend: '7' },
    { Date: '01/26/2024', SLNO: '26', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.2', ThresholdLimit: '5', ResistanceTrend: '7' },
    { Date: '01/27/2024', SLNO: '27', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.5', ThresholdLimit: '2', ResistanceTrend: '7' },
    { Date: '01/28/2024', SLNO: '28', PitName: 'Pit 01', PitID: '001', NormalReding: 5, TimeInterval: '05/01/2024 10:44:45', FaultResistance: '5.9', ThresholdLimit: '5', ResistanceTrend: '7' },
    { Date: '01/29/2024', SLNO: '29', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2024 10:44:45', FaultResistance: '5.8', ThresholdLimit: '8', ResistanceTrend: '6' },
    { Date: '01/30/2024', SLNO: '30', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2024 10:44:45', FaultResistance: '2.5', ThresholdLimit: '10', ResistanceTrend: '7' },
    { Date: '01/31/2024', SLNO: '31', PitName: 'Pit 01', PitID: '001', NormalReding: 1.80, TimeInterval: '06/01/2024 10:44:45', FaultResistance: '2.5', ThresholdLimit: '9', ResistanceTrend: '6' },
  
  
     ];
  
  const cols = {
    SLNO: 'SLNO',
    TimeInterval: 'TIMESTAMP',
    FaultResistance: 'Fault Resistance ( Ω )',
  };
  
  const visibleColumns = [
    'SLNO',
    'TimeInterval',
    'FaultResistance',
  ];
  

function PitResistance() {
  return (
    <>
    <Grid mt="xl" mb="xl">
    <Grid.Col md={1} lg={1}></Grid.Col>
    <Grid.Col md={10} lg={10}>
      <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
        <Text ta="center" fw={700} size="xl">
          <h2>READING TABLE</h2>
        </Text>

       
          <TableComponent
            data={datatable}
            columns={cols}
            visibleColumns={visibleColumns}
          />
       
      </Card>
    </Grid.Col>
    <Grid.Col md={1} lg={1}></Grid.Col>
  </Grid>
</>
);
}
 

export default PitResistance