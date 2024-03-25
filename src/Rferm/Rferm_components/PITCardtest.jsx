
import React, { useState } from 'react';
import { Text, Card, RingProgress, Group, useMantineTheme, Input, Button } from '@mantine/core';
import classes from '../Rferm_components/Cssfile/StatsRingCard.module.css';
import { useNavigate } from 'react-router-dom';

export function Pit_card({ data }) {
  const theme = useMantineTheme();

  const items = data.Resistances.map((resistance, index) => (
    <div key={index}>
      <Text className={classes.label}>{resistance}</Text>
      <Text size="xs" c="dimmed">
        Resistance {index + 1}
      </Text>
    </div>
  ));


  const navigate = useNavigate();

  
  const handleOverClick = () => {
    navigate("/Rferm/Sample");
  };

  return (
    <div onClick={handleOverClick} style={{ cursor: "pointer" }}>
    <Card mt="sm" shadow='30px' withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            PIT NAME:{data.PIT}
          </Text>
          <Group mt="lg">
            <div>
              <Text className={classes.lead} mt={30}>
                27
                {data.FaultReadings}
              </Text>
              <Text fz="xs" c="dimmed">
                Fault Readings
              </Text>
            </div>
            <div>
              <Text className={classes.lead} mt={30}>
                {data.Resistances.length}
              </Text>
              <Text fz="xs" c="dimmed">
                Resistances
              </Text>
            </div>
          </Group>
          <Group mt="lg">
          <div>
              <Text className={classes.lead} mt={30}>
                27
                {data.FaultReadings}
              </Text>
              <Text fz="xs" c="dimmed">
              Ground (V)
              </Text>
            </div>
            <div>
              <Text className={classes.lead} mt={30}>
                27
                {data.FaultReadings}
              </Text>
              <Text fz="xs" c="dimmed">
              Lightning (V)
              </Text>
            </div>

          </Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value:80 , color: theme.primaryColor }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  80%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  BATTERY
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
    </div>
  );
}


export default function PITCardtest({ datatable }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [startIndex, setStartIndex] = useState(0);

  const filteredData = datatable.filter((data) =>
    data.PIT.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 3);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const renderGroup = (groupData) => (
    <div style={{ display: 'flex', overflowX: 'auto', margin:"5px" }}>
      {groupData.map((data) => (
        <Pit_card key={data.PIT} data={data} />
      ))}
    </div>
  );

  const groupByPITStatus = () => {
    const groups = {};

    filteredData.forEach((data) => {
      if (!groups[data.PITStatus]) {
        groups[data.PITStatus] = [];
      }
      groups[data.PITStatus].push(data);
    });

    return groups;
  };

  const groups = groupByPITStatus();

  return (
    <>
      <Input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by PIT"
      />
      {Object.entries(groups).map(([status, groupData]) => (
        <div key={status}>
          <h2>{status}</h2>
          {renderGroup(groupData.slice(startIndex, startIndex + 4))}
        </div>
      ))}
      {filteredData.length > 4 && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button onClick={handlePrevClick} disabled={startIndex === 0}>
            Previous
          </Button>
          <Button onClick={handleNextClick} disabled={startIndex + 4 >= filteredData.length}>
            Next
          </Button>
        </div>
      )}
    </>
  );
}