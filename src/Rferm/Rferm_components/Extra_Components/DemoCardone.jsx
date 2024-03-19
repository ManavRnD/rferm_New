import React, { useEffect, useState } from 'react'
import { Text, Card, RingProgress, Group, useMantineTheme, Divider, Progress, Center } from '@mantine/core';
import classes from '../Cssfile/StatsRingCard.module.css'
import { IconOmega, IconTrekking, IconHandClick , IconCircuitGround} from '@tabler/icons-react';
import { color } from 'd3';

const stats = [
    { value: 337, label: 'Ground (V)' },
    { value: 76, label: 'Lightning (V)' },
];

export function DemoCardone() {
    const theme = useMantineTheme();
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['orange', 'green', 'red'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 1000); // Change this value to control the interval in milliseconds

        return () => clearInterval(interval);
    }, []);
    console.log("color", currentColorIndex)

    const [batteryValue, setBatteryValue] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setBatteryValue(prevValue => {
                if (prevValue === 10) return 50;
                else if (prevValue === 50) return 100;
                else return 10;
            });
        }, 1000); // Change this value to control the interval in milliseconds

        return () => clearInterval(interval);
    }, []);



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
        <Card withBorder p="xl" radius="md" shadow="xl" className={classes.card}>
            <div className={classes.inner}>
                <div>
                    <Text fz="sm" fw={800} >
                        PIT NAME:PIT NAME 37387 JHFGYEGRU NNDGYSGVE HBDDFDSFDS
                    </Text>
                    <Group mt="lg">

                        <Divider size="sm" />
                        <div style={{position:"absolute", top:"50px", right:"50px" }}>
                           
                            <Card withBorder w={46} h={46} padding={9} radius="50px" bg={colors[currentColorIndex]}>
                                        <Center>
                                            <IconCircuitGround stroke={2} />
                                        </Center>
                                    </Card>
                        </div>



                    </Group>
                    <Group mt="lg">
                        <div>

                            <Text fz="sm"  fw={800} >
                                Fault: 1887
                            </Text>
                            <Divider size="sm" mt={10} variant='transparent' />
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
                        </div>
                        <Divider orientation="vertical" variant='transparent' style={{ padding: "50px" }} />
                        <div>
                            <Text fz="sm" fw={800}>
                                Resistance : 18.87 <IconOmega size="15px" style={{ marginTop: "2px" }} />
                            </Text>
                            <Text fz="sm" mt={10} c="red" fw={800} >
                                Lightning(V)
                            </Text>
                            <IconTrekking />
                            <Text fz="sm" fw={800}>
                                3324.343
                            </Text>
                            <IconHandClick />
                            <Text fz="sm" fw={800} >
                                3324.343
                            </Text>
                        </div>
                    </Group>
                </div>
                <Divider orientation="vertical" variant='transparent' style={{ padding: "50px" }} />
                <div className={classes.ring}>
                    <RingProgress
                        roundCaps
                        thickness={6}
                        size={100}
                        sections={[{ value:batteryValue , color:colors[currentColorIndex] }]}
                        label={
                            <div>
                                <Text ta="center" fz="lg" >
                                    {batteryValue}%
                                </Text>
                                <Text ta="center" fz="xs" fw={800}>
                                    BATTERY
                                </Text>
                            </div>
                        }
                    />
                </div>
            </div>
        </Card>
    );
}


export default DemoCardone

