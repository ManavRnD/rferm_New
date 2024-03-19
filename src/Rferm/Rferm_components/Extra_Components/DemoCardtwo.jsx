import React, { useEffect, useState } from 'react'
import { Text, Card, RingProgress, Group, useMantineTheme, Divider, Progress, Center } from '@mantine/core';
import { IconOmega, IconTrekking, IconHandClick } from '@tabler/icons-react';
import { color } from 'd3';
import BatteryGauge from 'react-battery-gauge';
import BatteryGaugevar from '../BatteryGaugevar';



const stats = [
  { value: 337, label: 'Ground (V)' },
  { value: 76, label: 'Lightning (V)' },
];

export function DemoCardone() {
  const theme = useMantineTheme();
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['green', 'orange', 'red'];

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
      }, 1000); // Change this value to control the interval in milliseconds

      return () => clearInterval(interval);
  }, []);
  console.log("color", currentColorIndex)


  // const completed = 1887;
  // const total = 2333;
  // const items = stats.map((stat) => (
  //   <div key={stat.label}>
  //     <Text className={classes.label}>{stat.value}</Text>
  //     <Text size="xs" >
  //       {stat.label}
  //     </Text>
  //   </div>
  // ));

  return (
    <Card withBorder p="xl" radius="md" shadow='xl' style={{ width: "auto", display: "inline-block", marginLeft: "10px" }} >
      <div >
        <div style={{ justifyContent: "space-between" }}>
          <div>
            <Text fz="sm" fw={800} >
              PIT NAME:PIT NAME 37387 JHFGYEGRU NNDGYSGVE HBDDFDSFDS
            </Text>
          </div>
          <Divider size="sm" variant='transparent' style={{marginBottom:"10px"}} />
          <div className='battery' style={{ position: "absolute", top: "50px", right: "20px" }}>
            <BatteryGaugevar size={50}/>
          </div>
          <Group mt="lg">

            <Divider size="sm" />



          </Group>
          <Group mt="lg">
            <div>

              <Text fz="sm" fw={800} >
                Fault: 1887
              </Text>
              <Divider size="sm" variant='transparent' />
              <Text fz="sm" c="red" mt={10} fw={800} >
                Ground(V)
              </Text>
              <IconTrekking />
              <Text fz="sm" fw={800} >
                4234.3234
              </Text>
            </div>
            <div style={{ marginTop: "50px" }}>
              <IconHandClick />
              <Text fz="sm" fw={800} >
                4234.3234
              </Text>
            </div>
            <Divider orientation="vertical" variant='transparent' style={{ padding: "10px" }} />
            <div>
              <Text fz="sm"  fw={800}>
                Resistance : 18.87 <IconOmega size="15px" style={{ marginTop: "2px" }} />
              </Text>
              <Text fz="sm" c="red" mt={10} fw={800} >
              Lightning(V)
              </Text>
              <IconTrekking />
              <Text fz="sm" fw={800} >
                4234.3234
              </Text>
            </div>
            <div style={{ marginTop: "50px" }}>
              <IconHandClick />
              <Text fz="sm" fw={800} >
                4234.323434
              </Text>
            </div>
            <Divider orientation="vertical" variant='transparent' style={{ padding: "10px" }} />
          </Group>
        </div>
        <Divider orientation="vertical" variant='transparent' style={{ padding: "10px" }} />
        <div >

          <Text ta="center" fw={800} >PIT STATUS</Text>
          <Progress color={colors[currentColorIndex]} radius="lg" size="xl" value={100} striped animated />
        </div>
      </div>
    </Card>
  );
}


export default DemoCardone

