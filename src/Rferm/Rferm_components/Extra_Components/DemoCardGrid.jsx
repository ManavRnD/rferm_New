
import React, { useEffect, useState } from 'react'
import { Text, Card, RingProgress, Group, useMantineTheme, Divider, Progress, Center, Grid, px } from '@mantine/core';
import { IconOmega, IconTrekking, IconHandClick, IconCircuitGround } from '@tabler/icons-react';
import { RxLightningBolt } from "react-icons/rx";
import BatteryGaugevar from './BatteryGaugevar';





const stats = [
    { value: 337, label: 'Ground (V)' },
    { value: 76, label: 'Lightning (V)' },
];

export function DemoCardGrid() {
    const theme = useMantineTheme();

    const [batteryValue, setBatteryValue] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setBatteryValue(prevValue => {
                if (prevValue === 10) return 50;
                else if (prevValue === 50) return 100;
                else return 10;
            });
        }, 3000); // Change this value to control the interval in milliseconds

        return () => clearInterval(interval);
    }, []);

    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['green', 'orange', 'red'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 3000); // Change this value to control the interval in milliseconds

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
        <Card withBorder mt="10px" p="xl" radius="md" shadow='xl' style={{ width: "auto", display: "inline-block", marginLeft: "10px" }} >

            <Grid cols={12} gutter="md" >

                <Grid.Col md={8} lg={8}>
                    <Text fz="sm" fw={800} >
                        Name:
                    </Text>
                </Grid.Col>
                <Grid.Col md={4} lg={4} >
                    <Center>
                        <Text fw={900} fz="15px" style={{ display: "flex" }}>
                            <BatteryGaugevar size={40} /> {batteryValue} %
                        </Text>
                    </Center>
                </Grid.Col>
                <Divider size="sm" variant='transparent' />
                <Grid.Col md={6} lg={6} >
                    <Grid.Col style={{ padding: "0px" }}>
                        <Text fz="sm" fw={800} style={{ display: "flex" }}>

                            <Card withBorder w={26} padding={0} radius="50px" bg={colors[currentColorIndex]}>
                                <Center>
                                    <IconCircuitGround stroke={2} />
                                </Center>
                            </Card>
                            <Text fz="sm" fw={800} style={{ display: "flex", position: "absolute", left: "60px" }}>
                                : 18.87 <IconOmega size="20px" />
                            </Text>
                        </Text>
                    </Grid.Col>
                    <Divider size="sm" variant='transparent' />
                    <Text fz="sm" c="red" fw={800} >
                        Ground(V)
                    </Text>
                    <IconTrekking />
                    <Text fz="sm" fw={800} >
                        4234.3234
                    </Text>

                    <IconHandClick />
                    <Text fz="sm" fw={800} >
                        4234.3234
                    </Text>
                </Grid.Col>
                <Grid.Col md={6} lg={6} >
                    <Grid.Col display={"flex"} style={{ padding: "0px" }}>
                        <RxLightningBolt size={20} color='red' />
                        <Text fz="sm" fw={800} >
                            : 188
                        </Text>
                    </Grid.Col>
                    <Text fz="sm" c="red" mt={5} fw={800} >
                        Lightning(V)
                    </Text>
                    <IconTrekking />
                    <Text fz="sm" fw={800} >
                        4234.3234
                    </Text>

                    <IconHandClick />
                    <Text fz="sm" fw={800} >
                        4234.3234

                    </Text>
                </Grid.Col>
            </Grid>
        </Card>

    );
}


export default DemoCardGrid;

