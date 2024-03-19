
import React, { useEffect, useState } from 'react';
import { Text, Card, Flex, RingProgress, Group, useMantineTheme, Input, Button, Grid, Center, Divider, Select, Pagination, Modal, } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import BatteryGaugevar from './BatteryGaugevar';
import { IconOmega, IconTrekking, IconHandClick, IconCircuitGround, IconSearch } from '@tabler/icons-react';
import { RxLightningBolt } from "react-icons/rx";
import PitResistance from './PitResistance';
import Pit_details from './Pit_details';
import StepandTouch from './StepandTouch';


export function Pit_card({ data }) {
    const theme = useMantineTheme();

    // const items = data.Resistances.map((resistance, index) => (
    //   <div key={index}>
    //     <Text className={classes.label}>{resistance}</Text>
    //     <Text size="xs" c="dimmed">
    //       Resistance {index + 1}
    //     </Text>
    //   </div>
    // ));





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
        }, 5000); // Change this value to control the interval in milliseconds

        return () => clearInterval(interval);
    }, []);
    console.log("color", currentColorIndex)


    const navigate = useNavigate();


    const handleOverClick = () => {
        navigate("/Rferm/Sample");
    };


    const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev); // Toggle modal state
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false); // State to track modal open/close

    const handleModalToggle1 = () => {
        setIsModalOpen1((prev) => !prev); // Toggle modal state
    };

    const [isModalOpen2, setIsModalOpen2] = useState(false); // State to track modal open/close

    const handleModalToggle2 = () => {
        setIsModalOpen2((prev) => !prev); // Toggle modal state
    };


    return (
        <>
            <Card withBorder mt="10px" p="xl" radius="md" shadow='xl' style={{ width: "400px", display: "inline-block", marginLeft: "10px" }} >

                <Grid cols={12} gutter="md" >

                    <Grid.Col md={8} lg={8}>
                        <Text fz="sm" fw={800} >
                            Name {data.PIT}
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

                                <Card withBorder w={26} padding={0} radius="50px" bg={colors[currentColorIndex]} onClick={handleModalToggle1}>
                                    <Center>
                                        <IconCircuitGround stroke={2} />
                                    </Center>
                                </Card>
                                <Text fz="sm" fw={800} style={{ display: "flex", position: "absolute", left: "55px" }}>
                                    18.87 <IconOmega size="20px" />
                                </Text>
                            </Text>
                        </Grid.Col>
                        <Divider size="sm" variant='transparent' />
                        <Text fz="sm" c="red" fw={700} onClick={handleModalToggle2}>
                            Ground(V)
                        </Text>
                        <IconTrekking />
                        <Text fz="sm" fw={600} >
                            423432.34
                        </Text>

                        <IconHandClick />
                        <Text fz="sm" fw={600} >
                            423432.34
                        </Text>
                    </Grid.Col>
                    <Grid.Col md={6} lg={6} >
                        <Grid.Col display={"flex"} style={{ padding: "0px" }} onClick={handleModalToggle} >
                            <RxLightningBolt size={20} color='red' />
                            <Text fz="sm" fw={800} >
                                188
                            </Text>
                        </Grid.Col>
                        <Text fz="sm" c="red" mt={5} fw={700} onClick={handleModalToggle2} >
                            Lightning(V)
                        </Text>
                        <IconTrekking />
                        <Text fz="sm" fw={600} >
                            423432.34
                        </Text>

                        <IconHandClick />
                        <Text fz="sm" fw={600} >
                            423432.34

                        </Text>
                    </Grid.Col>
                </Grid>
            </Card>

            <Modal
                
                size="4000px"
                padding="md"
                opened={isModalOpen}
                onClose={handleModalToggle}
                hideCloseButton
            >
                {/* Your modal content goes here */}
                <Text h={70} fw={800} fz="50px" ta={"center"} mb={10} bg={"#efb4b1"}> FAULT READING</Text>
                <Text fw={800} ta={"center"} > PIT NAME: {data.PIT} </Text>
                <PitResistance/>
                
            </Modal>

            <Modal
                
                size="auto"
                padding="md"
                opened={isModalOpen1}
                onClose={handleModalToggle1}
                hideCloseButton
            >
                {/* Your modal content goes here */}
                <Text fw={800} ta={"center"} > PIT NAME: {data.PIT} </Text>
                <Pit_details/>
                
            </Modal>

            <Modal
                
                size="auto"
                padding="md"
                opened={isModalOpen2}
                onClose={handleModalToggle2}
                hideCloseButton
            >
                {/* Your modal content goes here */}
                <Text fw={800} ta={"center"} > PIT NAME: {data.PIT} </Text>
                <StepandTouch/>
                
            </Modal>
        </>
    );
}

export default function PitCardList({ datatable }) {

    const location = useLocation();
    const prop = location.state?.prop; // Access the prop passed from the previous component
  // Now you can use the prop variable in your component logic
  console.log("prop",prop)

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(prop || 'All');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter the data based on search term and selected status
    const filteredData = datatable.filter((data) =>
        data.PIT.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedStatus === 'All' || data.PITStatus === selectedStatus)
    );

    const statusOptions = ['All', 'Unsafe', 'Warning', 'Safe']; // Replace with your actual status options


    // Calculate total number of pages based on number of cards per page (12 in this case)
    const totalPages = Math.ceil(filteredData.length / 12);

    // Handle change of pagination page
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Slice the filteredData array to display only the cards for the current page
    const startIndex = (currentPage - 1) * 12;
    const endIndex = Math.min(startIndex + 12, filteredData.length);
    const currentPageData = filteredData.slice(startIndex, endIndex);

    return (
        <>
            <Grid>
                <Grid.Col md={12} lg={12} bg={"#e4e4e4"} style={{ marginBottom: '10px', }}>

                    <Flex
                        mih={50}
                        gap="100px"
                        justify="center"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >
                        <Input
                            value={searchTerm}
                            radius={5}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Search by PIT"
                            icon={<IconSearch />} // Add SearchIcon as the icon prop
                        />
                        <Select
                            radius={5}
                            data={statusOptions.map(status => ({ value: status, label: status }))}
                            value={selectedStatus}
                            onChange={(value) => setSelectedStatus(value)}
                            placeholder="Select status"

                        />
                        <Button variant="gradient"
                            radius="xl"
                            style={{ width: "120px", height: "40px", justifyContent: "center" }}
                            onClick={() => setSearchTerm('')}>Clear
                        </Button>
                    </Flex>
                </Grid.Col>
            </Grid>
            <Divider size="xl" mt={30} mb={10} />

            {currentPageData.length === 0 ? (
                <p>No Pits available</p>
            ) : (
                <>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {currentPageData.map((data) => (
                            <Pit_card key={data.PIT} data={data} />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Pagination
                            currentPage={currentPage}
                            total={totalPages}
                            onChange={handlePageChange}
                            size="sm"
                            siblings={2}
                            limit={1}
                            boundaries={1}
                            position="right"
                            style={{ marginTop: "20px" }}

                        />
                    </div>
                </>
            )}
        </>
    );
}


