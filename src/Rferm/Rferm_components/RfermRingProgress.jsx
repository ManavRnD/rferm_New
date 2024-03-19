
import React from 'react';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Grid} from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};



const RfermRingProgress = ({ data }) => {
  return (
    <Group>
      {data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
          <Paper  style={{width:"440px", height:"auto"}}withBorder radius="md" p="sm" key={stat.label}>
            <Group>
              <RingProgress
                size={150}
                roundCaps
                thickness={8}
                sections={[{ value: stat.progress, color: stat.color }]}
                label={
                  <Center>
                    <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                  </Center>
                }
              />
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
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
    </Group>
  );
};


export default RfermRingProgress