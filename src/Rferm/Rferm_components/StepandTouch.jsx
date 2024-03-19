
import React from 'react'
import TableComponent from '../../components/Table_comp';
import { Card, Grid, Text } from '@mantine/core';

const datatable = [
    { SLNO: '1', Timestamp: '01/01/2024 15:43:13', GroundStep: '10609.23', GroundTouch: '24368.87', LighteningStep: '23451.34', LighteningTouch: '34342.30' },
    { SLNO: '2', Timestamp: '01/02/2024 15:48:13', GroundStep: '10709.23', GroundTouch: '24546.80', LighteningStep: '73464.43', LighteningTouch: '34424.43' },
    { SLNO: '3', Timestamp: '01/03/2024 15:53:13', GroundStep: '10809.23', GroundTouch: '24724.73', LighteningStep: '85424.78', LighteningTouch: '34506.56' },
    { SLNO: '4', Timestamp: '01/04/2024 15:58:13', GroundStep: '10909.23', GroundTouch: '24902.66', LighteningStep: '97484.34', LighteningTouch: '34588.69' },
    { SLNO: '5', Timestamp: '01/05/2024 16:03:13', GroundStep: '11009.23', GroundTouch: '25080.59', LighteningStep: '109544.89', LighteningTouch: '34670.82' },
    { SLNO: '6', Timestamp: '01/06/2024 16:08:13', GroundStep: '11109.23', GroundTouch: '25258.52', LighteningStep: '121605.45', LighteningTouch: '34752.95' },
    { SLNO: '7', Timestamp: '01/07/2024 16:13:13', GroundStep: '11209.23', GroundTouch: '25436.45', LighteningStep: '133666.00', LighteningTouch: '34835.08' },
    { SLNO: '8', Timestamp: '01/08/2024 16:18:13', GroundStep: '11309.23', GroundTouch: '25614.38', LighteningStep: '145726.56', LighteningTouch: '34917.21' },
    { SLNO: '9', Timestamp: '01/09/2024 16:23:13', GroundStep: '11409.23', GroundTouch: '25792.31', LighteningStep: '157787.11', LighteningTouch: '35000.34' },
    { SLNO: '10', Timestamp: '01/10/2024 16:28:13', GroundStep: '11509.23', GroundTouch: '25970.24', LighteningStep: '169847.67', LighteningTouch: '35082.47' },
    { SLNO: '11', Timestamp: '01/11/2024 16:33:13', GroundStep: '11609.23', GroundTouch: '26148.17', LighteningStep: '181908.22', LighteningTouch: '35164.60' },
    { SLNO: '12', Timestamp: '01/12/2024 16:38:13', GroundStep: '11709.23', GroundTouch: '26326.10', LighteningStep: '193968.78', LighteningTouch: '35246.73' },
    { SLNO: '13', Timestamp: '01/13/2024 16:43:13', GroundStep: '11809.23', GroundTouch: '26504.03', LighteningStep: '206029.33', LighteningTouch: '35328.86' },
    { SLNO: '14', Timestamp: '01/14/2024 16:48:13', GroundStep: '11909.23', GroundTouch: '26681.96', LighteningStep: '218089.89', LighteningTouch: '35410.99' },
    { SLNO: '15', Timestamp: '01/15/2024 16:53:13', GroundStep: '12009.23', GroundTouch: '26859.89', LighteningStep: '230150.44', LighteningTouch: '35493.12' },
    { SLNO: '16', Timestamp: '01/16/2024 16:58:13', GroundStep: '12109.23', GroundTouch: '27037.82', LighteningStep: '242211.00', LighteningTouch: '35575.25' },
    { SLNO: '17', Timestamp: '01/17/2024 17:03:13', GroundStep: '12209.23', GroundTouch: '27215.75', LighteningStep: '254271.56', LighteningTouch: '35657.38' },
    { SLNO: '18', Timestamp: '01/18/2024 17:08:13', GroundStep: '12309.23', GroundTouch: '27393.68', LighteningStep: '266332.11', LighteningTouch: '35739.51' },
    { SLNO: '19', Timestamp: '01/19/2024 17:13:13', GroundStep: '12409.23', GroundTouch: '27571.61', LighteningStep: '278392.67', LighteningTouch: '35821.64' },
    { SLNO: '20', Timestamp: '01/20/2024 17:18:13', GroundStep: '12509.23', GroundTouch: '27749.54', LighteningStep: '290453.22', LighteningTouch: '35903.77' },
    { SLNO: '21', Timestamp: '01/21/2024 17:23:13', GroundStep: '12609.23', GroundTouch: '27927.47', LighteningStep: '302513.78', LighteningTouch: '35985.90' },
    { SLNO: '22', Timestamp: '01/22/2024 17:28:13', GroundStep: '12709.23', GroundTouch: '28105.40', LighteningStep: '314574.33', LighteningTouch: '36068.03' },
    { SLNO: '23', Timestamp: '01/23/2024 17:33:13', GroundStep: '12809.23', GroundTouch: '28283.33', LighteningStep: '326634.89', LighteningTouch: '36150.16' },
    { SLNO: '24', Timestamp: '01/24/2024 17:38:13', GroundStep: '12909.23', GroundTouch: '28461.26', LighteningStep: '338695.44', LighteningTouch: '36232.29' },
    { SLNO: '25', Timestamp: '01/25/2024 17:43:13', GroundStep: '13009.23', GroundTouch: '28639.19', LighteningStep: '350755.99', LighteningTouch: '36314.42' },
    { SLNO: '26', Timestamp: '01/26/2024 17:48:13', GroundStep: '13109.23', GroundTouch: '28817.12', LighteningStep: '362816.55', LighteningTouch: '36396.55' },
    { SLNO: '27', Timestamp: '01/27/2024 17:53:13', GroundStep: '13209.23', GroundTouch: '28995.05', LighteningStep: '374877.10', LighteningTouch: '36478.68' },
    { SLNO: '28', Timestamp: '01/28/2024 17:58:13', GroundStep: '13309.23', GroundTouch: '29172.98', LighteningStep: '386937.66', LighteningTouch: '36560.81' },
    { SLNO: '29', Timestamp: '01/29/2024 18:03:13', GroundStep: '13409.23', GroundTouch: '29350.91', LighteningStep: '398998.21', LighteningTouch: '36642.94' },
    { SLNO: '30', Timestamp: '01/30/2024 18:08:13', GroundStep: '13509.23', GroundTouch: '29528.84', LighteningStep: '411058.77', LighteningTouch: '36725.07' },
    { SLNO: '31', Timestamp: '01/31/2024 18:13:13', GroundStep: '13609.23', GroundTouch: '29706.77', LighteningStep: '423119.32', LighteningTouch: '36807.20' },
    { SLNO: '32', Timestamp: '02/01/2024 18:18:13', GroundStep: '13709.23', GroundTouch: '29884.70', LighteningStep: '435179.88', LighteningTouch: '36889.33' },
    { SLNO: '33', Timestamp: '02/02/2024 18:23:13', GroundStep: '13809.23', GroundTouch: '30062.63', LighteningStep: '447240.43', LighteningTouch: '36971.46' },
    { SLNO: '34', Timestamp: '02/03/2024 18:28:13', GroundStep: '13909.23', GroundTouch: '30240.56', LighteningStep: '459300.99', LighteningTouch: '37053.59' },
    { SLNO: '35', Timestamp: '02/04/2024 18:33:13', GroundStep: '14009.23', GroundTouch: '30418.49', LighteningStep: '471361.54', LighteningTouch: '37135.72' },
    { SLNO: '36', Timestamp: '02/05/2024 18:38:13', GroundStep: '14109.23', GroundTouch: '30596.42', LighteningStep: '483422.10', LighteningTouch: '37217.85' },
    { SLNO: '37', Timestamp: '02/06/2024 18:43:13', GroundStep: '14209.23', GroundTouch: '30774.35', LighteningStep: '495482.65', LighteningTouch: '37299.98' },
    { SLNO: '38', Timestamp: '02/07/2024 18:48:13', GroundStep: '14309.23', GroundTouch: '30952.28', LighteningStep: '507543.21', LighteningTouch: '37382.11' },
    { SLNO: '39', Timestamp: '02/08/2024 18:53:13', GroundStep: '14409.23', GroundTouch: '31130.21', LighteningStep: '519603.76', LighteningTouch: '37464.24' },
    { SLNO: '40', Timestamp: '02/09/2024 18:58:13', GroundStep: '14509.23', GroundTouch: '31308.14', LighteningStep: '531664.32', LighteningTouch: '37546.37' },

    ];
  
  const cols = {
    SLNO: 'SL NO',
    GroundStep: 'GROUND STEP ( V )',
    GroundTouch: 'GROUND TOUCH ( V )',
    LighteningStep: 'LIGHTNING STEP ( V )',
    LighteningTouch: 'LIGHTNING TOUCH ( V )',
    Timestamp: 'TIMESTAMP',
    
  };
  
  const visibleColumns = [
    "SLNO",
    "GroundStep",
    "GroundTouch",
    "LighteningStep",
    "LighteningTouch",
    "Timestamp",
  ];
  

function StepandTouch() {
  return (
    <>
    <Grid mt="xl" mb="xl">
    <Grid.Col md={1} lg={1}></Grid.Col>
    <Grid.Col md={10} lg={10}>
      <Card mt="xl" shadow="xl" padding="lg" radius="lg" withBorder>
        <Text ta="center" fw={700} size="xl">
          <h2> STEP&TOUCH READING</h2>
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
 

export default StepandTouch