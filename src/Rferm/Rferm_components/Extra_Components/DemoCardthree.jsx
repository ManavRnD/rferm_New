import React, { useEffect, useState } from 'react'
import { Text, Card, RingProgress, Group, useMantineTheme, Divider, Progress, Center } from '@mantine/core';
import { IconOmega, IconTrekking, IconHandClick, IconCircuitGround } from '@tabler/icons-react';
import { color } from 'd3';
import BatteryGauge from 'react-battery-gauge';
import { TbMessage2Bolt } from "react-icons/tb";
import { RxLightningBolt } from "react-icons/rx";
import DemoCardone from './DemoCardone';
import BatteryGaugevar from '../BatteryGaugevar';



const stats = [
    { value: 337, label: 'Ground (V)' },
    { value: 76, label: 'Lightning (V)' },
];

export function DemoCardthree() {
    const theme = useMantineTheme();

    const [batteryValue, setBatteryValue] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setBatteryValue(prevValue => {
                if (prevValue === 10) return 50;
                else if (prevValue === 50) return 100;
                else return 10;
            });
        }, 2000); // Change this value to control the interval in milliseconds

        return () => clearInterval(interval);
    }, []);

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
                            PIT NAME 34134134 FDDSFIRME MEEJSMA DKDKSMA KKFMFFAF ASDKADIADKAD KADSASDOAD KSDADDM 
                        </Text>
                    </div>
                    <Divider size="sm" variant='transparent' style={{ marginBottom: "10px" }} />

                    <Group mt="lg">

                        <Divider size="sm" />



                    </Group>
                    <Group mt="lg">
                        <div>
                            <div className='battery' style={{ position: "absolute", top: "60px", right: "50px" }}>
                                <BatteryGaugevar size={40}/>
                                <Text fw={800} fz="sm" style={{ position: "absolute", top: "0px", left: "45px" }}>
                                    {batteryValue}%
                                </Text>
                            </div>
                            <div style={{ position: "absolute", top: "62px" }}>
                                <RxLightningBolt size={20} />
                            </div>
                            <Text fz="sm" fw={800} style={{ position: "absolute", top: "60px", left: "45px" }}>
                                : 188
                            </Text>
                            <Divider size="sm" variant='transparent' />
                            <Text fz="sm" c="red" mt={10} fw={800} >
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
                        <Divider orientation="vertical" variant='transparent' style={{ padding: "10px" }} />
                        <div>

                            <Text fz="sm" fw={800} style={{ position: "absolute", top: "61px", left: "280px" }}>
                                <div style={{ position: "absolute", top: "-2px", left: "-30px" }}>
                                    <Card withBorder w={26} padding={0} radius="50px" bg={colors[currentColorIndex]}>
                                        <Center>
                                            <IconCircuitGround stroke={2} />
                                        </Center>
                                    </Card>
                                </div>
                                : 18.87
                                <div style={{ position: "absolute", top: "0px", left: "50px" }}>
                                    <IconOmega size="20px" />
                                </div>
                            </Text>
                            <Text fz="sm" c="red" mt={10} fw={800} >
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
                        </div>
                    </Group>
                </div>
                <Divider orientation="vertical" variant='transparent' style={{ padding: "10px" }} />
                <div >

                    {/* <Text ta="center" fw={800} >PIT STATUS</Text>
                    <Progress color={colors[currentColorIndex]} radius="lg" size="xl" value={100} striped animated /> */}
                </div>
            </div>
        </Card>
    );
}


export default DemoCardthree;

