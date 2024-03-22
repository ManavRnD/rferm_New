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
import { Cardtabledata } from './Rferm_components/DataTables/Cardtabledata';




function PIT_cardsmainpage() {

  const navigate = useNavigate();


  return (
    <>
      <Grid mt="xl" mb="xl">
        <Grid.Col md={1} lg={1} ></Grid.Col>
        <Grid.Col md={10} lg={10}  >
        <PitCardList datatable={Cardtabledata} />
        </Grid.Col>
        <Grid.Col md={1} lg={1} ></Grid.Col>
      </Grid>
    </>

  )
}

export default PIT_cardsmainpage

