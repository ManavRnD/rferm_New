import React from 'react';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Grid, Card } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconSum  } from '@tabler/icons-react';


const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};



const TotalRing = ({ data }) => {
  return (
    <>
      {data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
          <Paper withBorder radius="md" p="xs" key={stat.label} > {/*bg={"linear-gradient(to right, #6cff33, #cfffd8 )"}*/}
            <Group>
              <RingProgress
                size={100}
                roundCaps
                thickness={8}
                sections={[{ value: stat.progress, color: stat.color }]}
                label={
                  <Center>
                    <IconSum style={{ width: rem(40), height: rem(40), }} stroke={1.5} />
                  </Center>
                }
              />
              <div>
                <Text c="dimmed" size="lg" tt="uppercase" fw={700}>
                  {stat.label}
                </Text>
                <Text fw={700} size="xl">
                  {stat.stats}
                </Text>
              </div>
            </Group>
          </Paper>
        );
      })}
    </>
  );
};


export default TotalRing